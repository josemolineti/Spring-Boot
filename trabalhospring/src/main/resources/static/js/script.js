//Variáveis referente ao tamanho do tabuleiro;
var boardHeight = 6;
var boardWidth = 5;

// Variaveis referente a posição do jogar no tabuleiro;
var playerRow = 0;
var playerCol = 0;

// Variavel referente a situação do jogador;
var gameOver = false;

// Variavel referente a palavra que deve ser adivinhada;
var palavra = "";

// Função que inicia a aplicação. Ao carregar a página, executa a função sortearPalavra(), assim, definindo na variavel palavra;
// Em seguida, a função init();
window.onload = function () {
    palavra = sortearPalavra(palavras);
    init();
}

// Função que sorteia uma palavra aleatória dentro do vetor palavras[] e retorna;
function sortearPalavra(palavras) {
    var palavraSorteada = Math.floor(Math.random() * palavras.length);
    return palavras[palavraSorteada];
}

// Função que tem como objetivo montar o tabuleiro dinamicamente e executar os eventos de clique no teclado;
// Utiliza uma matriz para montar o tabuleiro, utilizando as variaveis boardHeight e boardWidth para definir quantas colunas e linhas terão;
function init() {
    // Cria vários elementos span, que seria cada letra do tabuleiro;
    // E vai definindo os ids usando códigos, como "0-0, 0-1" etc...
    for (let r = 0; r < boardHeight; r++) {
        for (let c = 0; c < boardWidth; c++) {
            let letra = document.createElement("span");
            letra.id = r.toString() + "-" + c.toString();
            letra.classList.add("letra");
            letra.innerText = "";
            document.getElementById("board").appendChild(letra);

        }
    }

    // Aguarda para que o usuário clique em alguma tecla no teclado;
    // Faz uma verificação inicial se o usuário perdeu ou não o jogo;
    // Em seguida usa if else para verificar as teclas apertadas;
    document.addEventListener("keyup", (e) => {
        console.log(e.code)
        if (gameOver) return;
        // Aqui limita apenas as letras de A até Z;
        // Coloca a letra apertada pelo usuário no tabuleiro, usando os ids "0-0, 0-1" etc;
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (playerCol < boardWidth) {
                let = letraAtual = document.getElementById(playerRow.toString() + '-' + playerCol.toString());
                if (letraAtual.innerText == "") {
                    letraAtual.innerText = e.code[3];
                    playerCol += 1;
                }
            }
        }
        
        // Verifica se o usuário apertou a tecla "Backspace";
        // Ao apertar, apaga uma letra digitada no tabuleiro;
        else if (e.code == "Backspace") {
            if (0 < playerCol && playerCol <= boardWidth) {
                playerCol--;
            }
            let = letraAtual = document.getElementById(playerRow.toString() + '-' + playerCol.toString());
            letraAtual.innerText = "";

        }

        // Verifica se o usuário apertou a tecla "Enter";
        // Ao apertar, chama a função verif() e pula uma linha no tabuleiro;
        else if (e.code == "Enter" || e.code == "") {
            if (playerCol == boardWidth) {
                verif();
                playerRow++;
                playerCol = 0;
            }
        }

        // Verifica se o usuário chegou ao final do tabuleiro sem acertar;
        // Anuncia a derrota e mostra a palavra escondida;
        if (!gameOver && playerRow == boardHeight) {
            gameOver = true;
            document.getElementById("label-resposta").innerText = "Você PERDEU! A resposta é: "
            document.getElementById("resposta").innerText = palavra;
            document.getElementById("resposta").style.color = '#3aa394';
        }
    })
}

// Essa função fará a verificação da palavra digitada pelo usuário com a palavra escondida;
// Usa um for para pegar cada letra digitada na linha, comparando com cada letra da palavra escondida;
function verif() {
    let correct = 0;
    for (let c = 0; c < boardWidth; c++) {
        let = letraAtual = document.getElementById(playerRow.toString() + '-' + c.toString());
        let letra = letraAtual.innerText;

        // Se a letra estiver na posição exata, muda o fundo para verde;
        if (palavra[c] == letra) {
            letraAtual.classList.add("correct");
            correct++;
        }
        // Se a letra existir na palavra, mas não na posição exata, muda a cor do fundo para amarelo;
        else if (palavra.includes(letra)) {
            letraAtual.classList.add("contains");
        } 
        // Se a letra não existir na palavra, muda o fundo para cinza;
        else {
            letraAtual.classList.add("not-contains");
        }

        // Verifica se o usuário acertou a palavra, definindo como vitória;
        if (correct == boardWidth) {
            gameOver = true;
            document.getElementById("label-resposta").innerText = "Você ACERTOU! A resposta é: "
            document.getElementById("resposta").innerText = palavra;
            document.getElementById("resposta").style.color = '#a33a3a';
        }

    }



}



// Vetor de palavras para adivinhar;

var palavras = [
      "ACESSO",
      "ANEXO",
      "AMPLO",
      "BAIXO",
      "BENCA",
      "BRAVO",
      "BRISA",
      "BRUTO",
      "BUSCA",
      "CABAL",
      "CAMPO",
      "CANTO",
      "CASAR",
      "CASTA",
      "CERCA",
      "CERTA",
      "CHAOS",
      "CHATA",
      "CIVEL",
      "CLARA",
      "COITA",
      "COMUM",
      "CORDA",
      "CORPO",
      "CRUEL",
      "DANCA",
      "DEVER",
      "DIZER",
      "DOLOR",
      "DOMAR",
      "DOURA",
      "DROPS",
      "DURAR",
      "EFETO",
      "EMBAR",
      "EMOCA",
      "EMOTE",
      "EMPOL",
      "ENSOL",
      "ENTAO",
      "ERETO",
      "ESCOL",
      "ESTAR",
      "FABOR",
      "FACIL",
      "FALAR",
      "FARSA",
      "FELIZ",
      "FICAR",
      "FIRME",
      "FLORA",
      "FOLHA",
      "FOLIA",
      "FORCA",
      "FORRO",
      "FORTO",
      "FOSSA",
      "FOSSO",
      "FRACO",
      "FUGIR",
      "GABAR",
      "GEMER",
      "GENRO",
      "GRAVA",
      "GRUPO",
      "GUETO",
      "GURIA",
      "HARAS",
      "HASTE",
      "HEROI",
      "HINOS",
      "HORAS",
      "HUMOR",
      "IDIOM",
      "IMUNE",
      "INDIO",
      "IRMAO",
      "JAZER",
      "JEJUM",
      "JIRAU",
      "JOGAR",
      "JULIA",
      "JUNCO",
      "JUNTA",
      "KAFKA",
      "LARGA",
      "LEITE",
      "LEITO",
      "LENDA",
      "LENTA",
      "LEVAR",
      "LIVRO",
      "LOCUS",
      "LOGRO",
      "LUMPO",
      "MALTO",
      "MANGA",
      "MANGA",
      "MANIA",
      "MASSA",
      "MATAR",
      "MELAO",
      "MENTE",
      "MESMA",
      "METIE",
      "MEXER",
      "MINHA",
      "MINHA",
      "MISER",
      "MISTO",
      "MODAL",
      "MORTE",
      "MOSTO",
      "MOTIM",
      "MOURO",
      "MUNDO",
      "MUSEU",
      "NACAO",
      "NEGRO",
      "NENEM",
      "NESSA",
      "NOITE",
      "NOSSE",
      "NOVEN",
      "NUNCA",
      "OASIS",
      "OCELO",
      "ODEIA",
      "OLHAR",
      "OPACO",
      "OSSOS",
      "OUTRO",
      "OUVIR",
      "OXALA",
      "PAJEM",
      "PAPIR",
      "PARVO",
      "PEITO",
      "PENDO",
      "PESCA",
      "PESTE",
      "PIADA",
      "PINHO",
      "PISAR",
      "PLANO",
      "PLUMO",
      "POEMA",
      "POETA",
      "POTRO",
      "PRATO",
      "PUDOR",
      "PUGNA",
      "PUIDO",
      "PUNHA",
      "QUASE",
      "RAIVA",
      "RANCO",
      "RAPAZ",
      "RAZAO",
      "REFEM",
      "REGRA",
      "RELVA",
      "REVER",
      "REVER",
      "REVES",
      "RIRAM",
      "RISCO",
      "RISOS",
      "RITMO",
      "ROCHA",
      "ROGAR",
      "ROUPA",
      "RUINA",
      "RURAL",
      "SABER",
      "SABIA",
      "SABIA",
      "SADIO",
      "SALVO",
      "SANGA",
      "SANHA",
      "SARAU",
      "SARCA",
      "SAUDA",
      "SECAR",
      "SEITA",
      "SEIVA",
      "SELAR",
      "SEMIR",
      "SENIL",
      "SENTO",
      "SERIA",
      "SERVO",
      "SETOR",
      "SEXTO",
      "SILVO",
      "SINAL",
      "SISMA",
      "SONHO",
      "SORTA",
      "SOSIA",
      "SOTAL",
      "SUAVE",
      "SUPOR",
      "TANGE",
      "TARDE",
      "TEMER",
      "TEMOR",
      "TEMPO",
      "TENHA",
      "TERMO",
      "TERNO",
      "TERRA",
      "TESTE",
      "TEXTO",
      "TIRAR",
      "TOCAR",
      "TORCO",
      "TORPE",
      "TOSCO",
      "TRAIR",
      "TRETA",
      "TRIBO",
      "TROCA",
      "TRUCO",
      "TUMBA",
      "UMIDO",
      "UNIAO",
      "URDIR",
      "URGIR",
      "USUAL",
      "VADIO",
      "VAGAR",
      "VALIA",
      "VALOR",
      "VARAO",
      "VASTA",
      "VASTO",
      "VAZAO",
      "VAZIO",
      "VELAR",
      "VELHA",
      "VELHO",
      "VELOZ",
      "VERAO",
      "VERBA",
      "VERBO",
      "VERDE",
      "VERSO",
      "VETOR",
      "VIGIA",
      "VIGOR",
      "VINHA",
      "VIRAO",
      "VIRAR",
      "VISAO",
      "VISTA",
      "VITAL",
      "VIVER",
      "VOLTA",
      "VORAZ",
      "VOSSO",
      "VULTO",
      "XUCRO",
      "ZELAR"
    ]
  
  