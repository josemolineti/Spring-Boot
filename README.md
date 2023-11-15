# Termo Spring Boot
A aplicação se refere a uma adaptação do jogo de navegador [`TERMO`](https://term.ooo/),

Onde o objetivo é tentar adivinhar uma palavra aleatória de 5 letras escondida, com apenas 5 chances.

## Como utilizar - 
Ao clonar o projeto, para acessa-lo, deve realizar os seguintes passos:
- Executar a classe main, para iniciar o servidor do Spring Boot;
- Acesse o link: `localhost:8080/termo` que foi definido na classe de Controller;
- Agora, basta tentar adivinhar a palavra.


## Tecnologias utilizadas - 
O projeto foi feito usando as seguintes tecnologias:
- Java: usado para iniciar o servidor do Spring Boot e controlar os templates HTML;
- HTML: usado para criar a página principal do jogo;
- CSS: usado para criar a estilização visual do jogo;
- JavaScript: usado para definir toda a lógica e funcionamento por trás do jogo.


## Funcionalidades - 
Ao digitar uma palavra e apertar a tecla enter, será feita uma validação, onde irá comparar cada letra da palavra digitada com a palavra escondida, seguindo as regras:
- Caso a letra exista na palavra e esteja exatamente na posição correta, ela irá ser alterada para a cor de fundo VERDE;
- Caso a letra exista na palavra, mas esteja em uma posição incorreta, ela irá ser alterada para a cor de fundo AMARELA;
- Caso a letra não exista na palavra, ela irá ser alterada para a cor de fundo cinza.


> [!NOTE]
> Há uma verificação que aceita cliques apenas nas teclas de `A - Z`, `Enter` e `Backspace`. Evitando com que números e outros caracteres sejam apertados.


## Apresentação:
![disposição](https://github.com/josemolineti/Termo_Spring_Boot/assets/99626071/2009bbbd-439a-4dec-9e54-624bbdbb913e)


## Ao acertar a palavra:
![palavra acertada](https://github.com/josemolineti/Termo_Spring_Boot/assets/99626071/97dd9c5d-6b86-4eb3-9388-d935f6cf6931)


## Ao errar a palavra:
![palavra errada](https://github.com/josemolineti/Termo_Spring_Boot/assets/99626071/9a4a6b10-2893-456a-bb31-9f18278ae617)


## Observações - 
Os scripts e Classes estão devidamente documentados, contendo as explicações referenciando todas as funções e métodos da aplicação.
