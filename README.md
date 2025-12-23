# Multisensory Intelligence Github pages
This is the github pages repo for Multisensory Research Group @ Media Lab @ MIT. 

Credit to [astro-erudite](https://github.com/jktrn/astro-erudite) as the template. 

# Development
We use [Astro](https://astro.build/), React, Tailwind, pnpm for tech stack.

## Setup
Make sure you have [pnpm installed](https://pnpm.io/installation#using-npm). Then run
```
pnpm install
```

in the root directory of the project to install dependencies.

## Development
Run
```
pnpm dev
```
to start local development. This starts a development server to deploy the website on your computer running locally at some localhost link, i.e. `localhost:1234`. Go to this link that the command output produces, and you should see the website. Changes you make to local files should automatically update the website locally. 

If you are just editing content, and you get errors, make sure the content is in the schema specified by `src/content.config.ts`. I've observed that occasionally restarting the development server is needed to fully sync some content. 