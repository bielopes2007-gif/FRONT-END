// ===== 1. Seleção dos elementos =====
const campoNome = document.getElementById('nome');
const campoInteresse = document.getElementById('interesse');
const campoNivel = document.getElementById('nivel');
const botaoGerar = document.getElementById('btn-gerar');
const botaoTema = document.getElementById('btn-tema');
const areaResultado = document.getElementById('resultado');
const areaDetalhes = document.getElementById('detalhes');
const listaTarefas = document.getElementById('tarefas');
const listaCursos = document.getElementById('cursos');

// ===== 2. Dados: tarefas e cursos gratuitos por área =====
const trilhas = {
  html: {
    tarefas: ['Monte uma página com header, main e footer.', 'Crie um formulário com labels associados.', 'Valide o HTML e corrija os avisos.'],
    cursos: [
      { nome: 'MDN – Aprenda desenvolvimento Web', url: 'https://developer.mozilla.org/pt-BR/docs/Learn_web_development' },
      { nome: 'web.dev – Learn HTML', url: 'https://web.dev/learn/html' },
      { nome: 'freeCodeCamp em português', url: 'https://www.freecodecamp.org/portuguese/learn/' }
    ]
  },
  css: {
    tarefas: ['Refaça um cartão usando Flexbox.', 'Monte uma galeria com Grid.', 'Adicione uma media query para telas menores.'],
    cursos: [
      { nome: 'web.dev – Learn CSS', url: 'https://web.dev/learn/css' },
      { nome: 'Flexbox Froggy (jogo)', url: 'https://flexboxfroggy.com/#pt-br' },
      { nome: 'Grid Garden (jogo)', url: 'https://cssgridgarden.com/#pt-br' }
    ]
  },
  javascript: {
    tarefas: ['Faça um botão que muda um texto.', 'Valide um campo de formulário vazio.', 'Alterne uma classe CSS com classList.toggle().'],
    cursos: [
      { nome: 'The Modern JavaScript Tutorial', url: 'https://javascript.info/' },
      { nome: 'MDN – JavaScript', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
      { nome: 'freeCodeCamp em português', url: 'https://www.freecodecamp.org/portuguese/learn/' }
    ]
  }
};

const contagem = { html: 0, css: 0, javascript: 0 };

// ===== 3. Função que decide a mensagem (switch + if/else + template string) =====
function criarMensagem(nome, area, nivel) {
  let foco;
  switch (area) {
    case 'html':
      foco = 'tags semânticas, formulários e acessibilidade';
      break;
    case 'css':
      foco = 'cores, espaçamentos, Flexbox, Grid e responsividade';
      break;
    case 'javascript':
      foco = 'variáveis, eventos, condições e funções';
      break;
    default:
      foco = 'os fundamentos da Web';
  }
  let passo;
  if (nivel === 'avancado') {
    passo = 'Crie um mini projeto seu e publique no GitHub.';
  } else {
    passo = 'Estude 30 minutos por dia e faça exercícios curtos.';
  }
  return `Olá, ${nome}! Continue praticando ${foco}. ${passo}`;
}

// ===== 4. Mostra tarefas e links da área escolhida =====
function mostrarDetalhes(area) {
  listaTarefas.textContent = '';
  listaCursos.textContent = '';
  trilhas[area].tarefas.forEach(function (tarefa) {
    const item = document.createElement('li');
    item.textContent = tarefa;
    listaTarefas.appendChild(item);
  });
  trilhas[area].cursos.forEach(function (curso) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = curso.url;
    link.textContent = curso.nome;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    item.appendChild(link);
    listaCursos.appendChild(item);
  });
  areaDetalhes.hidden = false;
}

// ===== 5. Painel ao vivo =====
function atualizarPainel() {
  const total = contagem.html + contagem.css + contagem.javascript;
  document.getElementById('total').textContent = total;
  Object.keys(contagem).forEach(function (area) {
    document.getElementById('cont-' + area).textContent = contagem[area];
    const porcento = total === 0 ? 0 : (contagem[area] / total) * 100;
    document.getElementById('barra-' + area).style.width = `${porcento}%`;
  });
}

// ===== 6. Evento do botão Gerar orientação =====
botaoGerar.addEventListener('click', function () {
  const nome = campoNome.value.trim();
  const area = campoInteresse.value;
  const nivel = campoNivel.value;

  if (nome === '') {
    areaResultado.classList.remove('resultado--ok');
    areaResultado.classList.add('resultado--erro');
    areaResultado.textContent = 'Digite seu nome para receber a orientação.';
    areaDetalhes.hidden = true;
    campoNome.focus();
    return;
  }

  areaResultado.classList.remove('resultado--erro');
  areaResultado.classList.add('resultado--ok');
  areaResultado.textContent = criarMensagem(nome, area, nivel);
  mostrarDetalhes(area);
  contagem[area] += 1;
  atualizarPainel();
});

// ===== 7. Alternar tema com classList.toggle() =====
botaoTema.addEventListener('click', function () {
  const escuro = document.body.classList.toggle('tema-escuro');
  botaoTema.textContent = escuro ? 'Tema claro' : 'Tema escuro';
  botaoTema.setAttribute('aria-pressed', String(escuro));
});

// ===== 8. Terminal animado (digita sozinho em loop) =====
const conversas = [
  ['Por onde começo no front-end?', 'Pela estrutura: HTML. Depois CSS e JavaScript.'],
  ['Preciso saber inglês?', 'Ajuda, mas há ótimos conteúdos em português.'],
  ['Quanto tempo leva?', 'Com 30 minutos por dia, o básico em poucos meses.']
];
const termPergunta = document.getElementById('term-pergunta');
const termResposta = document.getElementById('term-resposta');
const esperar = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

async function rodarTerminal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    termPergunta.textContent = conversas[0][0];
    termResposta.textContent = conversas[0][1];
    return;
  }
  let i = 0;
  while (true) {
    const [pergunta, resposta] = conversas[i];
    termPergunta.textContent = '';
    termResposta.textContent = '';
    for (const letra of pergunta) {
      termPergunta.textContent += letra;
      await esperar(45);
    }
    await esperar(400);
    termResposta.textContent = resposta;
    await esperar(2500);
    i = (i + 1) % conversas.length;
  }
}
rodarTerminal();
