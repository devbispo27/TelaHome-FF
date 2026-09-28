# Finanças App

Este projeto é uma interface mobile em React Native + Expo para um app gamificado de educação financeira. A ideia é transformar o aprendizado financeiro em uma experiência visual e motivadora, com desafios por níveis, progresso do usuário e indicadores de desempenho.

A tela principal apresenta:
- barra superior com moedas, sequência e energia;
- cabeçalho da seção atual;
- trilha de níveis em formato de caminho com moedas representando metas;
- navegação inferior com abas principais;
- dados simulados em mock para facilitar o desenvolvimento inicial.

## Sobre o projeto
O app foi pensado para incentivar hábitos financeiros de forma leve e interativa. Em vez de mostrar apenas números, ele usa mecânicas de gamificação, como nível, progresso e energia, para tornar a experiência mais envolvente.

Essa primeira versão é focada no front-end e usa dados mockados para simular comportamento real. A estrutura está pronta para receber integração com backend no futuro.

## Tecnologias
- React Native
- Expo
- TypeScript
- React Native Safe Area Context
- Expo Vector Icons
- Expo Linear Gradient

## Requisitos
- Node.js 18+ ou superior
- npm
- VS Code
- Expo Go no celular ou emulador Android/iOS

## Instalação
```bash
npm install
npx expo install
npx expo start
```

## Como executar
1. Abra o projeto no terminal.
2. Rode o comando acima.
3. Escaneie o QR code com o Expo Go no celular, ou use um emulador.
4. Para Android: pressione `a`
5. Para iOS: pressione `i`
6. Para web: pressione `w`

## Estrutura do projeto
```text
App.tsx
src/
  components/
    BottomNavigation.tsx
    BottomTab.tsx
    LevelButton.tsx
    LevelPath.tsx
    SectionHeader.tsx
    TopBar.tsx
  data/
    mock.ts
  screens/
    HomeScreen.tsx
  services/
    api.ts
  theme/
    colors.ts
    spacing.ts
  types/
    index.ts
```

## Onde personalizar o app
- Cores e paleta visual: `src/theme/colors.ts`
- Tamanhos, margens e espaçamento da trilha: `src/theme/spacing.ts`
- Dados simulados do usuário e níveis: `src/data/mock.ts`
- Ações ao tocar nos níveis e abas: `src/screens/HomeScreen.tsx`
- Ícones da barra inferior: `src/components/BottomNavigation.tsx`

## Futuro integração com backend
A camada de dados já foi isolada em `src/services/api.ts`, permitindo conectar a API real futuramente sem quebrar a interface. A ideia é substituir os mocks por chamadas reais sem alterar a lógica dos componentes.

## Observação
Este é um projeto de front-end inicial, com foco em UX, identidade visual e fluxo da interface. O objetivo principal dessa etapa é estabelecer a base visual e o comportamento da tela principal do app.
