# Introdução

Eu tento criar anualmente uma nova versão do meu Portifolio como desenvolvedor. Esse repositório é referente a sua terceira versão!

O intuito do portifólio é ser uma SPA (Single Page Application) simples e direta, no qual consigo demonstrar minhas experiências mais recentes e relevantes como desenvolvedor.

## Sobre o projeto

O projeto utiliza React.js com Vite, Typescript e Styled Components. Além disso, foi utilizado i18next para internacionalização e Zustand para gerenciamento de estados globais (tema, idioma, etc)

[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![Typescript](https://img.shields.io/badge/Typescript-3178C6?logo=Typescript&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)
[![Styled Components](https://img.shields.io/badge/Styled_Components-violet?logo=styled-components&logoColor=fff)](#)
[![i18next](https://img.shields.io/badge/i18next-26A69A?logo=i18next&logoColor=fff)](#)
[![Zustand](https://img.shields.io/badge/Zustand-FF9930)](#)

## Como foi criado o design?

O protótipo do site foi feito por mim mesmo no Figma. Não encontrei nenhuma referência de algum portifólio que gostaria de me basear então resolvi criar um do zero. [Acessar Protótipo](https://www.figma.com/design/1ceIi43nNDurAOj1rgcqA2/Portif%C3%B3lio-V3?node-id=10-443&p=f)

## Pontuações do Pagespeed

Segue abaixo as pontuações de desempenho, acessibilidade, boas práticas e SEO. [Acessar Pagespeed](https://pagespeed.web.dev/analysis/https-www-michelraupp-com/g6erf0zvtb?form_factor=mobile)

Mobile
![image](https://github.com/user-attachments/assets/0aaba541-0e2e-4ab7-887f-c0dc9129cc24)

Desktop
![image](https://github.com/user-attachments/assets/41e23841-fe9e-4af2-9a2a-b643e0c1e604)

## Como iniciar o projeto?

Bom, basta seguir a documentação do Next.js com Vite. Em resumo:
- Clone o repositório;
- Abra-o projeto no VsCode (ou outra [IDE](https://www.redhat.com/pt-br/topics/middleware/what-is-ide#:~:text=A%20sigla%20IDE%20significa%20(Integrated,de%20usu%C3%A1rio%20gr%C3%A1fica%20(GUI).));
- Rode o comando ```npm i``` para instalar as dependências do projeto;
- Rode localmente o projeto utilizando o comando ```npm run dev```;
- Acessar o ```http://localhost:5137/``` para testar o projeto local (ou o indicado em seu terminal);

Documentação React.js: [Acessar](https://react.dev/learn)
Documentação Vite.js: [Acessar](https://vite.dev/guide/)

## Desafios encontrados

Como nem tudo são flores, encontrei problemas durante o desenvolvimento desse projeto. Problemas encontrados:
- Melhorar pontuações de desempenho foram muito dificeis, visto que o LCP estava muito grande;
- Utilizar o react-helmet-async para ter meta description traduzidos corretamente para inglês/português não funcionou corretamente;
- Em Iphones, por algum motivo o modal que é aberto ao ver detalhes de algum projeto ficava como position absolute ao invés de fixed.

## Considerações finais

Sinta-se livre para clonar, copiar, melhorar, editar o projeto. Caso tenha algum feedback, pode mandar um email em [michelraupp@outlook.com](mailto:michelraupp@outlook.com) ou entrar em contato comigo via [LinkedIn](https://www.linkedin.com/in/michelraupp/).
