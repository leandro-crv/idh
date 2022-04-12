import inicio from "../../assets/imagens/inicio.png"
import bandeiras from "../../assets/imagens/bandeiras.PNG"
import primeiraJogada from "../../assets/imagens/primeiraJogada.png"
import jogada1 from "../../assets/imagens/jogada1.jpg"
import jogada2 from "../../assets/imagens/jogada2.PNG"
import fim from "../../assets/imagens/fim.png"
import informacao from "../../assets/imagens/informacao.jpg"
import imagemCard from "../../assets/imagens/imagemCard.PNG"
var infoComoJogar = [
    {
        titulo: 'Bem-vindo (a) ao Super Trunfo dos países',
        imagem:imagemCard,
        explicacao:'No jogo você vai receber várias cartas e escolhe o item da sua carta que acredita que vai vencer o adversário. Detalhe: você não sabe qual é a carta dele.  A cada rodada você escolhe entre IDH, expectativa de vida ao nascer, população ou área do país. As fontes das informações são ONU e Banco Mundial, são 188 cartas disponíveis, mas você joga com quantas quiser.',
        
    },
    {
        titulo:'Início do Jogo',
        imagem:inicio,
        explicacao:'Insira o número de cartas que você quer jogar. Em seguida, escolha quais cartas: Aleatoriamente - pega cartas de todo ranking de idh independentemente da posição; Mais altas - apenas as cartas de melhor posição no ranking; Mais baixas - ranking do IDH invertido. No exemplo são cinco cartas para cada jogador, distribuídas aleatoriamente entre os melhores países no ranking IDH. Caso nada seja selecionado, o jogo iniciará por padrão com 10 países sorteados aleatoriamente.',
       
    },
    {
        titulo:'Bandeiras',
        imagem:bandeiras,
        explicacao:'As bandeiras de todos os países que vão fazer parte do jogo aparecem em ordem alfabética. Quando uma carta já foi jogada, sua respectiva bandeira fica mais opaca.',
        
    },
    {
        titulo:'Primeira jogada',
        imagem:primeiraJogada,
        explicacao:'Sua carta está virada, mas você não sabe a carta do adversário. Escolha uma das quatro categorias disponíveis para jogar (Idh, expecativa de vida, população e área) clicando sobre o valor na sua carta.',
        
    },
    {
        titulo:'Resultado da rodada',
        imagem:jogada1,
        explicacao:'Após jogar, a carta do adversário vai ser mostrada e no meio da tela será indicado se você ganhou ou perdeu a rodada. Note que o placar foi alterado.',
       
    },
    {
        titulo:'Próxima rodada',
        imagem:jogada2,
        explicacao:'Agora você e seu adversário tem novas cartas. Embaixo do placar tem a indicação da rodada em que vocês estão. As bandeiras que já saíram do jogo estão opacas, é o caso da Noruega e Irlanda. Na mesa ainda estão as cartas restantes.'
    },
    {
        titulo:'Fim de jogo',
        imagem:fim,
        explicacao:'Quando todas as cartas forem jogadas, chegamos ao final do jogo. O resultado é exibido no placar. Clique em recomeçar e jogue novamente!',
        
    },
    {
        titulo:'Informações da categoria',
        imagem:informacao,
        explicacao:'Se você tiver dúvida do que significa cada item da sua carta, basta clicar sobre o ícone de informação e aparecerá uma explicação contendo a unidade de medida, um resumo e a fonte do dado.',
        
    }

]

export default infoComoJogar;