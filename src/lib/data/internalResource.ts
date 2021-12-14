import { readdir, readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

// https://stackoverflow.com/questions/59256354/why-does-readdirsync-say-no-such-file-or-directory
// path.resolve return absolute project path
const postsPath = path.resolve('./src/routes/posts');

const getMdPath = (postName: string) => `${postsPath}/${postName}/index.svx`;

export const getAllPostNames = async (): Promise<Array<string>> => {
	const allFiles = await readdir(postsPath, { withFileTypes: true });
	const directories = allFiles.filter((dirent) => dirent.isDirectory());
	return directories.map((dir) => dir.name);
};

export const getMetaPosts = async (postNames: Array<string>): Promise<IMetaPost[]> => {
	const meta = await Promise.all(
		postNames.map(async (postName: string) => {
			const postPath = getMdPath(postName);
			const fileContent = await readFile(postPath);
			const { data } = matter(fileContent);
			return {
				...(data as IMetaPost),
				href: `/posts/${postName}`
			};
		})
	);
	return meta;
};
