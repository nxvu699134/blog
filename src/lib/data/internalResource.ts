import { readdir } from 'fs/promises';
import path from 'path';

// https://stackoverflow.com/questions/59256354/why-does-readdirsync-say-no-such-file-or-directory
// path.resolve return absolute project path
const postsPath = path.resolve('./src/routes/posts');

const getMdPath = (postName: string) => `${postsPath}/${postName}/index.svx`;

export const getAllPosts = async (): Promise<string[]> => {
	const allFiles = await readdir(postsPath, { withFileTypes: true });
	const directories = allFiles.filter((dirent) => dirent.isDirectory());
	const postMds = directories.map((dir) => getMdPath(dir.name));
	return postMds;
};
