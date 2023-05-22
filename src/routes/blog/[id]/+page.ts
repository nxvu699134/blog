import type { PageLoad, PageLoadEvent } from './$types';
import { postMetas } from '$lib/data/internalResource';

export const load = (({params}: PageLoadEvent) => {
  const { id } = params;
  const post = postMetas.find((p) => p.id === id);
  if (post) {
    return {
      component: post.component
    };
  }
  return {
    component: null
  };
}) satisfies PageLoad;
