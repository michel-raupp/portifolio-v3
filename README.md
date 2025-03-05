# Introduction

I try to create a new version of my portfolio as a developer every year. This repository refers to its third version!

The purpose of this portfolio is to be a simple and straightforward SPA (Single Page Application) where I can showcase my most recent and relevant experiences as a developer.

## About the project

The project uses React.js with Vite, TypeScript, and Styled Components. Additionally, i18next was used for internationalization and Zustand for global state management (theme, language, etc.).

[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![Typescript](https://img.shields.io/badge/Typescript-3178C6?logo=Typescript&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)
[![Styled Components](https://img.shields.io/badge/Styled_Components-violet?logo=styled-components&logoColor=fff)](#)
[![i18next](https://img.shields.io/badge/i18next-26A69A?logo=i18next&logoColor=fff)](#)
[![Zustand](https://img.shields.io/badge/Zustand-FF9930)](#)

## Como foi criado o design?

O protótipo do site foi feito por mim mesmo no Figma. Não encontrei nenhuma referência de algum portifólio que gostaria de me basear então resolvi criar um do zero. [View Protoype](https://www.figma.com/design/1ceIi43nNDurAOj1rgcqA2/Portif%C3%B3lio-V3?node-id=10-443&p=f)

## Pagespeed Scores

Below are the performance, accessibility, best practices, and SEO scores.  [View Pagespeed](https://pagespeed.web.dev/analysis/https-www-michelraupp-com/g6erf0zvtb?form_factor=mobile)

Mobile
![image](https://github.com/user-attachments/assets/0aaba541-0e2e-4ab7-887f-c0dc9129cc24)

Desktop
![image](https://github.com/user-attachments/assets/41e23841-fe9e-4af2-9a2a-b643e0c1e604)

## How to start the project?

Well, just follow the Next.js documentation with Vite. In short:
- Clone the repository;
- Open the project in VS Code (or another [IDE](https://www.redhat.com/pt-br/topics/middleware/what-is-ide#:~:text=A%20sigla%20IDE%20significa%20(Integrated,de%20usu%C3%A1rio%20gr%C3%A1fica%20(GUI).));
- Run the command ```npm i``` to install the project dependencies;
- Run the project locally using the command ```npm run dev```;
- Access ```http://localhost:5137/``` to test the project locally (or the one indicated in your terminal).


React.js Documentation: [View](https://react.dev/learn)
Vite.js Documentation: [View](https://vite.dev/guide/)

## Challenges faced

Since not everything is smooth sailing, I encountered some issues while developing this project. Problems found:

- Improving performance scores was quite challenging since the LCP was too high;
- Using react-helmet-async to properly translate meta descriptions into English/Portuguese did not work correctly;
- On iPhones, for some reason, the modal that opens when viewing project details was appearing as position: absolute instead of fixed.

## Final considerations

Feel free to clone, copy, improve, or edit the project. If you have any feedback, you can send me an email at [michelraupp@outlook.com](mailto:michelraupp@outlook.com) or contact me via [LinkedIn](https://www.linkedin.com/in/michelraupp/).
