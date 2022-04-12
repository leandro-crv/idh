import bd from "./bancoDeDados/bancoDeDados.js"

var state = {

    mesa: Array.from({ length: bd.length }, (v, k) => k + 1),
    mandante: {
      carta: null,
      visivel: false,
      placar: 0,
      ultimaJogada: null
    },
    visitante: {
      carta: null,
      visivel: false,
      placar: 0
    },
    resultado: {
      texto: null,
      visivel: false,
    },
    jogoEmAndamento: false,
    bandeiras: false,
    cartasEmTransicao:false,
    informacaoNoCard:false,
    rodada:0,
    rodadasTotais:0,
    quaisCartas:null,
    comoJogar:false,
    mostrarFontes:false
}


export default state;  