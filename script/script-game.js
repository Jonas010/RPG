const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

//esses de baixo são parte do meu código.

const nome = new URLSearchParams(location.search).get('nome');

var classe = new URLSearchParams(location.search).get('class');

const char = document.querySelector('.story');

if (classe == "mago") {
  var item = "Bastão lendário";

  var end = "Você usa seu Bastão lendário contra o DRAGÂO PRATEADO,"+
  "após muita dor e agonia, o dragão finalmente morre...FIM.";

  var img = document.createElement('img');
  img.src="img/mago.png";
  img.style.width="270px";
  char.appendChild(img);
};

if (classe == "arqueiro") {
  var item = "Arco elfico";

  var end = "Você usa seu Arco elfico contra o dragão,e assim,"+
  "o fazendo dormir para todo o sempre,até o seu suspiro final... fim.";

  var img = document.createElement('img');
  img.src="img/archer.png";
  img.style.width="270px";
  char.appendChild(img);
};

if (classe == "guerreiro") {
  var item = "Porrete";

  var end = "Você dá uma porretada no dragão com tanta força,"+
  "que ele some dá face da terra e com isso,você se torna um rei demônio.";

  var img = document.createElement('img');
  img.src="img/warrior.png";
  img.style.width="270px";
  char.appendChild(img);
};

if (classe == null) {
  classe = "camponês comum";
  var item = "Livro do conhecimento";

  var end = " Você usa do livro do conhecimento para fazer o dragão entender sua língua "+
  "e assim,você se torna um menbro do clã draconiano,Fim.";

  var img = document.createElement('img');
  img.src="img/campones.png";
  char.appendChild(img);
};

//o resto o do cara brilhante que criou essa maravilha.

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: nome+',hein... Nome interessante para um '+classe+'.',
    //ao longo do caminho vou ter que colocar as constantes dessa forma
    //não muda muita coisa no projeto em si,mas pode ser que quem vá ler
    // não goste muito dos "pequenos ajustes" que eu fiz.
    options: [
      {
        text: 'Próximo',
        //setState: { sim: true },
        nextText: 2
      }
    ]
  }, // coloca uma virgula para indicar que acabou.
  {
    id: 2,
    text: 'Deixa eu te explicar umas coisas por aqui...',
    options: [
      {
        text: 'Próximo',
        nextText: 'explicacao1',
      },
      {
        text: 'Não estou a fim...',
        nextText: 'malEducado',
      }
    ],
  },

  {
    id: 'explicacao1',
    text: 'Bom ver que é alguém educado,vejamos...para resumir a história,você é um '
    +classe+ ' que quer acabar com um mal em comum de todos; o DRAGÂO PRATEADO!',
    options: [
      {
        text: 'entendi...',
        nextText: 'explicacao2',
      },
    ]
  },
  {
    id: 'explicacao2',
    text: 'E para chegar até ele,você precisará ir até a caverna onde ele mora,e encontrar um baú com um itém espécial para '+
    'matalo com sucesso...então,boa sorte em sua jornada',
    options: [
      {
        text: '...',
        nextText: 'fase1',
      },
      {
        text: 'obrigado(a)',
        nextText: 'fase1',
      },
    ]
  },

  // mal educado

  {
    id: 'malEducado',
    text: 'Não seja tão mal educado com quem quer te ajudar.',
    options: [
      {
        text: '...',
        nextText: 'fase1',
      },
    ]
  },

  //fase 1

  {
    id: 'fase1',
    text: 'Chegando na caverna,você avista três possiveis entradas,'+
    'qual você escolhe?',
    options: [
      {
        text: 'Primeira passagem',
        nextText: 'PrimeiraPassagem',
      },
      {
        text: 'Segunda passagem',
        nextText: 'SegundaPassagem',
      },
      {
        text: 'Terceira passagem (e mais rápida)',
        nextText: 'passagemRapida',
      },
    ]
  },

  //fase 1 - passagens

  {
    id: 'PrimeiraPassagem',
    text: 'Entrando na primeira passagem,você se depara com uma grande parede...',
    options: [
      {
        text: 'voltar.',
        nextText: 'fase1',
      },
    ]
  },
  {
    id: 'SegundaPassagem',
    text: 'Após muito andar, e achar que está perdido,você encontra uma sala,'+
    'e nesta sala,um baú com um '+item+'.',
    options: [
      {
        text: 'Próximo sala',
        nextText: 'fase2',
      },
    ]
  },
  {
    id: 'passagemRapida',
    text: 'Na vida não existe uma passagem rápida para a vitória...',
    options: [
      {
        text: 'voltar',
        nextText: 'fase1',
      },
    ]
  },

  //fase 2

  {
    id: 'fase2',
    text: 'Após adquirir o '+item+',você se dirige a segunda sala,onde vê mais duas passagens...'+
    'o que vai fazer?',
    options: [
      {
        text: 'Primeira passagem',
        nextText: 'passagem1',
      },
      {
        text: 'Segunda passagem',
        nextText: 'passagem2',
      },
    ]
  },

  //fase 2 - passagens

  {
    id: 'passagem1',
    text: 'Ao entrar,você se depara com um grande portão prateado...e quando você o abre,o GRANDE DRAGÂO PRATEADO'+
    ' lhe espera.',
    options: [
      {
        text: 'Entrar', 
        nextText: 'boss',
      },
    ]
  },
  {
    id: 'passagem2',
    text: 'Após ter entrado na segunda passagem e ter andado por mais um tempo,'+
    'você se depara com uma grande sala guardando o tesouro do dragão...',
    options: [
      {
        text: 'pegar tudo para si',
        nextText: 'badEnd',
      },
      {
        text: 'voltar para matar o dragão',
        nextText: 'passagem1',
      },
    ]
  },
  //bad end
  {
    id: 'badEnd',
    text: 'Você tenta pegar o máximo possível do ouro,e em sua pressa causada pela cobiça '+
    'atrai o dragão,que vem até você e te mata.',
    options: [
      {
        text: 'Próximo',
        nextText: 'badEnd2',
      }
    ]
  },
  {
    id: 'badEnd2',
    text: 'Parabéns,você foi morto pela sua cobiça',
    options: [
      {
        text: 'Recomeçar',
        nextText: 2,
      },
    ]
  },

  //boss 

  {
    id: 'boss',
    text: 'O GRANDE DRAGÂO PRATEADO te encara,'+
    'um olhar que você sente no fundo da alma.',
    options: [
      {
        text: 'Próximo',
        nextText: 'bossBattle1',
      },
    ]
  },
  {
    id: 'bossBattle1',
    text: 'Você lança palavras intimidadoras contra o dragão,'+
    'mas ele é um dragão,além de não entender,ele não liga pra ti.',
    options: [
      {
        text: 'Batalhar',
        nextText: 'bossBattle2',
      },
    ]
  },
  {
    id: 'bossBattle2',
    text: 'Você se lembra do seu '+item+',e o usa contra o dragão...',
    options: [
      {
        text: 'Acabar com isso',
        nextText: 'bossBattleEnd',
      },
    ]
  },
  {
    id: 'bossBattleEnd',
    text: end,
  },

]
startGame()
