var brazil = {
    //os campos abaixo são os dados da variavel
    nome: "Brasil",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  var turquia = {
    //os campos abaixo são os dados da variavel
    nome: "Turquia",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  var alemanha = {
    //os campos abaixo são os dados da variavel
    nome: "Alemanha",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  var coreia = {
    //os campos abaixo são os dados da variavel
    nome: "Coreia do Sul",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  
  brazil.pontos = calculaPontos(brazil)
  turquia.pontos = calculaPontos(turquia)
  alemanha.pontos = calculaPontos(alemanha)
  coreia.pontos = calculaPontos(coreia)
  
  function calculaPontos(jogador){
      var pontos = jogador.vitorias * 3 + jogador.empates
    return pontos
  //return: o valor retorna a variavel escolhida
  }
  
  var jogadores = [brazil, turquia, alemanha, coreia]
  
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i = 0; i < jogadores.length; i++){
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
    console.log("Clicou no botão Vitória")
  }
  
  function adicionarEmpate(i){
      var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
    console.log("Clicou no botão Empate")
  }
  function adicionarDerrota(i){
      var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
    console.log("Clicou no botão Derrota")
  }