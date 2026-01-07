# MindEase 🧠

Plataforma web para acessibilidade cognitiva, com painel personalizável, organizador de tarefas e perfil do usuário. Projeto em Clean Architecture usando React/TypeScript + Vite, priorizando acessibilidade, usabilidade e testes automatizados.

## 🌟 Características

- **Dashboard Cognitivo Personalizável**: Painel visual com estatísticas de tarefas e foco
- **Organizador de Tarefas**: Gerencie suas tarefas com prioridades e acompanhamento
- **Timer Pomodoro Integrado**: Técnica Pomodoro para melhorar foco e produtividade
- **Perfil com Configurações Persistentes**: Personalize acessibilidade e preferências
- **Acessibilidade Completa**: 
  - Suporte a temas (Claro, Escuro, Alto Contraste)
  - Tamanhos de fonte ajustáveis
  - Redução de movimento
  - ARIA labels e navegação por teclado
- **Arquitetura Limpa**: Separação clara entre domínio, aplicação, infraestrutura e apresentação
- **Testes Automatizados**: Cobertura de testes com Vitest

## 🏗️ Arquitetura

O projeto segue os princípios da Clean Architecture:

```
src/
├── domain/              # Regras de negócio e entidades
│   ├── entities/       # User, Task, DashboardPanel
│   ├── repositories/   # Interfaces de repositórios
│   └── usecases/       # Casos de uso da aplicação
├── infrastructure/     # Implementações técnicas
│   ├── storage/        # LocalStorage service
│   └── repositories/   # Implementações de repositórios
├── presentation/       # Camada de UI
│   ├── components/     # Componentes React
│   ├── contexts/       # Contextos React
│   ├── hooks/          # Custom hooks
│   └── styles/         # Estilos globais e CSS modules
└── test/               # Testes automatizados
```

## 🚀 Começando

### Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/BrunaABraguin/mindease.git
cd mindease

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Compila TypeScript e cria build de produção
npm run preview      # Preview do build de produção

# Testes
npm test             # Executa testes em modo watch
npm run test:ui      # Interface visual para testes
npm run test:coverage # Gera relatório de cobertura

# Linting
npm run lint         # Executa ESLint
```

## 🧪 Testes

O projeto utiliza Vitest e React Testing Library para testes:

```bash
npm test              # Modo watch
npm run test:ui       # UI interativa
npm run test:coverage # Cobertura de código
```

## ♿ Acessibilidade

MindEase foi projetado com acessibilidade em mente:

- **WCAG 2.1 AA Compliance**: Seguindo as diretrizes de acessibilidade
- **Navegação por Teclado**: Todas as funcionalidades acessíveis via teclado
- **Screen Reader Support**: ARIA labels e estrutura semântica
- **Temas Personalizáveis**: Claro, Escuro e Alto Contraste
- **Tamanhos de Fonte**: Pequeno, Médio, Grande e Extra Grande
- **Redução de Movimento**: Opção para minimizar animações

## 🛠️ Tecnologias

- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Vite** - Build tool e dev server
- **Vitest** - Framework de testes
- **Testing Library** - Testes de componentes
- **ESLint** - Linting
- **Prettier** - Formatação de código

## 📦 Build e Deploy

```bash
# Build de produção
npm run build

# A pasta 'dist' conterá os arquivos otimizados
```

O projeto pode ser facilmente deployado em:
- Vercel
- Netlify
- GitHub Pages
- Qualquer servidor de arquivos estáticos

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👥 Autores

- Bruna A. Braguin - [BrunaABraguin](https://github.com/BrunaABraguin)

## 🙏 Agradecimentos

- Comunidade React
- Documentação de acessibilidade da W3C
- Técnica Pomodoro por Francesco Cirillo
