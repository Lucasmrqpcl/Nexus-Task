# 🛰️ Nexus Task - Gerenciamento de Fluxo Inteligente

O **Nexus Task** é um ecossistema de produtividade desenvolvido para centralizar e organizar tarefas de forma fluida. O projeto nasceu da necessidade de um controle visual ágil, unindo a robustez da lógica de back-end com uma interface moderna de front-end.

---

## 🛠️ Tecnologias e Estrutura

O projeto é dividido em dois ambientes principais para atender diferentes perfis de uso:

### 1. Nexus Web (Kanban Pro)
Uma interface visual completa baseada na metodologia Kanban (A Fazer, Fazendo, Feito).
- **Design:** Dark Mode Premium com efeito *Glassmorphism*.
- **Funcionalidades:** - Drag-and-drop (arrastar e soltar) nativo.
  - Persistência em `localStorage` (os dados não somem ao atualizar).
  - Sistema de prioridades com badges dinâmicos (Alta, Média, Baixa).
  - Gestão de ciclo de vida (Criação e Exclusão).

### 2. Nexus Console (C#)
Uma versão minimalista e funcional para terminais.
- **Linguagem:** C# (.NET Core).
- **Foco:** Rapidez e simplicidade no gerenciamento via linha de comando.

---

## 🚀 Como Executar

### Versão Web
Basta abrir o arquivo `index.html` em qualquer navegador moderno ou utilizar a extensão **Live Server** no VS Code para uma experiência em tempo real.

### Versão Console
Certifique-se de ter o SDK do .NET instalado:
```bash
dotnet run
