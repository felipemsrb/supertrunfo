var carta1 = {
    nome: "Xicrinho",
    imagem: "https://sm.ign.com/ign_br/game/c/cuphead/cuphead_rb5p.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  var carta2 = {
    nome: "Caneco",
    imagem: "https://www.1999.co.jp/itbig82/10820883.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  };
  var carta3 = {
    nome: "Cálice",
    imagem:"https://www.pngitem.com/pimgs/m/110-1108142_ms-chalice-cuphead-ms-chalice-hd-png-download.png",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  };
  var carta4 = {
    nome: "Diabo",
    imagem: "http://pm1.narvii.com/6618/d3ef209d1af4fd6b9343e30c128be610aa69d4d3_00.jpg",
    atributos: {
      ataque: 10,
      defesa: 1,
      magia: 10
    }
  };
  var carta5 = {
    nome: "Rei Dado",
    imagem: "https://1.bp.blogspot.com/-0SbHxAbrpR4/YMPwMwLvt4I/AAAAAAAAQjQ/MuccYbDv_-UhoWvDDp7H_TF_wF8_mIK0gCLcBGAsYHQ/s620/E7.jpg",
    atributos: {
      ataque: 2,
      defesa: 9,
      magia: 2
    }
  };
  var carta6 = {
    nome: "Flor",
    imagem: "http://pm1.narvii.com/6605/b255a2e249f6c3ed130c04afb700886e2a8cb0b6_00.jpg",
    atributos: {
      ataque: 4,
      defesa: 7,
      magia: 3
    }
  };
  
  var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
  var cartaMaquina
  var cartaJogador
  
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 7)
    cartaMaquina = cartas[numeroCartaMaquina]
  
  
  
    var numeroCartaJogador = parseInt(Math.random() * 7)
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 7)
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    
  
    exibirCartaJogador();
    
  }
  
  
  
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
       return radioAtributos[i].value 
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
     htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
       htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else  {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    
    var opcoesTexto = ""
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome} </p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
  }
  