Personal Website contains my portfolio, resume, qualifications and my Photo gallery.

Images Used:
Index Background Gif: https://cdn.wallpapersafari.com/84/11/BcnSgM.gif
Images and icons are used from other websites.

Version: 2.0 
Implemented with Next.js.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Dependecies that I used:

* https://nextui.org/docs/components/card#cover-image - npm install @nextui-org/card

* https://styled-components.com/docs/advanced - npm install styled-components

* https://nextui.org/docs/components/button - npx nextui-cli@latest add button

* Anime  - npm install animejs, npm i --save-dev @types/animejs

* Icons: npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons

## Error Solutions:
If you get this error:

[Error: EINVAL: invalid argument, readlink 'C:\Users\ghosh\OneDrive\Desktop\PatralikaGhosh.github.io\pghosh_personal_web\.next\server\app\favicon.ico\route.js'] {
  errno: -4071,
  code: 'EINVAL',
  syscall: 'readlink',
  path: 'C:\\Users\\ghosh\\OneDrive\\Desktop\\PatralikaGhosh.github.io\\pghosh_personal_web\\.next\\server\\app\\favicon.ico\\route.js'
}

*** delete the .next folder and run npm run dev
