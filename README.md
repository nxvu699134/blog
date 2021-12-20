# Development notes

## 21 Dec 2021

- Figure out How I was fucked up. The current work is [here](https://github.com/nxvu699134/blog/tree/54aca4dfe518635df3f2927283fc4611cda4d045)

- The first idea is create md files in route folder then sveltekit (file-based system route) will make posts url live. So the way to get all available postsis read all files in route/posts folder (just read front-matter of md file) then make array of meta data return to an endpoint.

- All things work in my local. The problem come out when I tried to deploy to somewhere. I called to endpoint to fetch all posts but the response is error about "Hey, there is no fucking file here" and return 500 status.

- The reason is when upload build to cloud they dont have full structure of project thats just a bunch of build files.

- After re read [docs](https://kit.svelte.dev/docs#ssr-and-javascript-prerender) I put my all pages to [prerender](https://github.com/nxvu699134/blog/blob/54aca4dfe518635df3f2927283fc4611cda4d045/src/routes/index.svelte#L2) at build time. Everything work but I hate this cheat cuz it will cause many problem in the future.

