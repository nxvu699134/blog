# Development notes

## 21 Dec 2021

- Figure out How I was fucked up. The current work is [here](https://github.com/nxvu699134/blog/tree/54aca4dfe518635df3f2927283fc4611cda4d045)

- The first idea is create md files in route folder then sveltekit (file-based system route) will make posts url live. So the way to get all available postsis read all files in route/posts folder (just read front-matter of md file) then make array of meta data return to an endpoint.

- All things work in my local. The problem come out when I tried to deploy to somewhere. I called to endpoint to fetch all posts but the response is error about "Hey, there is no fucking file here" and return 500 status.

- The reason is when upload build to cloud they dont have full structure of project thats just a bunch of build files.

- After re read [docs](https://kit.svelte.dev/docs#ssr-and-javascript-prerender) I put my all pages to [prerender](https://github.com/nxvu699134/blog/blob/54aca4dfe518635df3f2927283fc4611cda4d045/src/routes/index.svelte#L2) at build time. Everything work but I hate this cheat cuz it will cause many problem in the future.

## 5 Jan 2022

- All pages are almost done, nice

- Use icon package instead font-awesome font because there are many icons arent use but bundled in css. Thats reduce loaded size.

## 10 Jan 2022

- Run lighthouse report on my page and benchmark. I just realised fucked up thing: set default dark mode in onMount function does not prevent flicker from light to dark mode.


## 11 Jan 2022

- Finally find [solution](https://github.com/nxvu699134/blog/commit/6001cc047eb37fd2885c2b69d7e42122cb428fe6). Just move script which set dark mode to head tag inside a <script> tag. Thats script will auto run first.
  
- Rerun lighthouse 5 times on old and new version then pick the best. 
  

| Before      | After       |
| ----------- | ----------- |
| ![image](https://user-images.githubusercontent.com/27850048/148930037-d4662551-b1d6-425a-b1f1-27268e9f4933.png) | ![image](https://user-images.githubusercontent.com/27850048/148931019-d377660c-16da-46a5-989d-73be06ca6226.png) |
| ![image](https://user-images.githubusercontent.com/27850048/148930455-927de02d-9e28-40fe-b352-a2273b5b477b.png) | ![image](https://user-images.githubusercontent.com/27850048/148933260-6332e8a4-8e54-4e05-9cb4-3ca94dce00cb.png) |





