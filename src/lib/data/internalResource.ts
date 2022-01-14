const postFiles = import.meta.globEager('./posts/*/*.md');

const postMetas: IPostMeta[] = [];
for (const postPath in postFiles) {
	const post = postFiles[postPath];
	const fileName = postPath.split('/').pop().split('.')[0];
	postMetas.push({
		...post.metadata,
		href: '/blog/' + fileName,
		id: fileName,
		component: post.default
	});
}

postMetas.sort(
	(a: IPostMeta, b: IPostMeta) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export { postMetas };
