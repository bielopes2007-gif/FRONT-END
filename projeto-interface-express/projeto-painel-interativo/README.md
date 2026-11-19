# Descubra seu caminho no Front-End

Projeto 3 – Painel Interativo com JavaScript | Desenvolvimento Front-End para Web

## Integrantes e divisão das tarefas



Gabriel Fonseca Lopes | 49614614 | Estrutura HTML, textos e acessibilidade |
| Leonardo Rocha Coelho | 49914332 | Identidade visual, responsividade e temas |
| Bernardo Vieira de Moraes | 47661780 | JavaScript, testes e documentação |

## Tema

Página dark com visual "tech premium" que orienta o visitante: ele informa o nome, escolhe HTML, CSS ou JavaScript e recebe uma mensagem personalizada, tarefas de prática e links de cursos gratuitos da área escolhida.

## Como funciona

1. O clique em **Gerar orientação** lê o nome, a área e o nível.
2. Se o nome estiver vazio (ou só com espaços), aparece um aviso na própria página.
3. Se estiver preenchido, a função `criarMensagem()` usa `switch` e `if/else` para montar o texto.
4. A mensagem vai para `#resultado` com `textContent`; tarefas e links aparecem conforme a área.
5. O **painel ao vivo** conta as orientações geradas na visita.
6. O botão **Tema** alterna a classe `tema-escuro` no `<body>`.

## Comandos JavaScript utilizados

- `document.getElementById()`: localiza campos, botões e áreas de resultado.
- `const` e `let`: guardam elementos e valores.
- `addEventListener('click', ...)`: executa uma ação ao clicar nos botões.
- `.value` e `.trim()`: leem o campo e ignoram espaços sozinhos.
- `if/else` e `switch`: escolhem a orientação de cada área.
- Template string `` `Olá, ${nome}!` ``: insere variáveis na mensagem.
- `.textContent`: exibe o texto na página.
- `.classList.toggle()`: alterna o tema escuro.
- Extras: `createElement`, `forEach`, `async/await` (terminal animado).

## Testes realizados

- Nome vazio
- HTML, CSS e JavaScript
- Troca de tema
- Tela pequena

## Captura de tela

