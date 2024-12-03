This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# My Blog

## Choosing the Right Git Branching Strategy

There are a lot of different approaches when it comes to managing code using branches, some popular Git branching strategies are for example [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/), [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow), [GitLab Flow](https://about.gitlab.com/topics/version-control/what-is-gitlab-flow/), [Trunk-based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development) and many more.

Because this project is about a personal blog, I will use a rather simple Git Flow with only two branches. The **main** branch that holds the code ready for production, and the staging or preview branch, to commit the code uptades into and then be able to deploy the preview code to checkt the result on a server.As soon as the staged code is bug free, a pull request can be make to merge the code into the main branch. From there the main branch can be get deployed in production.

## npm commands (package.json scripts)

First, run the development server:

`npm run dev`: to start the development server  
`npm run build`: to make a production build  
`npm run start`: to start the server on a production server using the build we made with the previous command  
`npm run lint`: to run a linting script that will scan our code and help us find problems in our code  
 
## CI/CD pipeline for automatic deployments
 
Every time code gets pushed into the main branch, it will trigger a production deployment
 
When code gets pushed into the preview branch, it will trigger a preview deployment
