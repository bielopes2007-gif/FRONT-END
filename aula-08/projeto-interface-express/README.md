# SetupLab

## Tema do projeto

O SetupLab é uma landing page sobre montagem de setups para jogos e estudos. 
A página apresenta alguns dos principais componentes de um setup e possui uma área para participação do usuário.

## Integrantes

- Gabriel Fonseca Lopes 
- Leonardo Rocha Coelho

## Como abrir o projeto

1. Abra a pasta do projeto no Visual Studio Code.
2. Abra o arquivo `index.html`.
3. Execute o arquivo no navegador ou utilize a extensão Live Server.

## Principais prompts utilizados com IA

- Crie uma estrutura HTML5 semântica para uma landing page sobre montagem de setups, utilizando header, nav, main, sections e footer.

- Ajude a criar uma identidade visual em CSS para o SetupLab utilizando cores escuras e roxo.

- Sugira propriedades CSS novas que possam melhorar a aparência e a responsividade da página.

- Explique como utilizar hover, focus, Flexbox e media query em uma página responsiva.

## Propriedades novas testadas

### 1. box-shadow

Aplicada nos cards dos componentes.

Finalidade: criar uma sombra e dar maior destaque visual aos cards.

Teste realizado: inicialmente foi utilizada uma sombra mais suave, com `15px` e opacidade `0.2`. Depois, os valores foram alterados para `30px` e opacidade `0.5`.

Resultado: a segunda opção criou um efeito de brilho roxo mais visível e foi mantida no projeto.

### 2. linear-gradient()

Aplicada no fundo da seção de apresentação.

Finalidade: criar uma transição gradual entre as cores do fundo.

Teste realizado: inicialmente foram utilizadas cores mais escuras. Depois, uma das cores foi alterada para um tom de roxo mais forte.

Resultado: o degradê com roxo mais destacado combinou melhor com a identidade visual do SetupLab e foi mantido.

### 3. clamp()

Aplicada no tamanho do título principal.

Finalidade: permitir que o tamanho do título se adapte ao tamanho da tela.

Teste realizado: o título utilizava inicialmente um tamanho fixo de `40px`. Depois foi utilizado `clamp(28px, 5vw, 48px)`.

Resultado: o título passou a se adaptar melhor em diferentes tamanhos de tela e a propriedade foi mantida.

## Aprendizados

Durante o desenvolvimento do projeto foram utilizados recursos como Flexbox, modelo de caixa, hover, focus, transições, transformações e media query.

Também foram testadas novas propriedades CSS e realizadas alterações nos valores para observar seus efeitos na página.