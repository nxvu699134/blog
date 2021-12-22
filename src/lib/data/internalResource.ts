const postFiles = import.meta.globEager('./posts/*.md');

const postMetas: IPostMeta[] = [];
for (const postPath in postFiles) {
	const post = postFiles[postPath];
	postMetas.push({
		...post.metadata,
		href: '/posts/' + postPath.split('/').pop().split('.')[0],
		render: post.default.render
	});
}

postMetas.sort(
	(a: IPostMeta, b: IPostMeta) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export { postMetas };
