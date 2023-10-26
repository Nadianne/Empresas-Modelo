import * as global from './global.js';
global.Serra.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Serra"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([9]);
    global.setImgAllPath(["../imagens-madereira/Serra/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Serra circular Bosh 1500w 127v',
        'Serra circular Bosh 2000w 127v',
        'Serra Mármore Discos 1500W 127v',
        'Serra Bosh tico-tico 450W 127v',
        'Serra circular Black Decker 127v 1500w',
        'Serra Circular 7.1/4 127v DWT',
        'Serra mármore 127v DWT',
        'Serra Tico Tico Skil 400w',
        'c ',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Serra circular Bosh  <span> 1500w 127v</span>",
            "Serra circular Bosh  <span> 20-65 2000w 127v</span>",
            "Serra Mármore Discos <span> 1500 W Bosch</span>",
            "Serra Bosh tico-tico <span> 450W 127v</span>",
            "Serra circular Black Decker <span> 127v 1500w</span>",
            "Serra circular DWT <span> 7.1/4 127v</span>",
            "Serra mármore <span> 127v DWT</span>",
            "Serra Tico Tico Skil <span>127v 400w</span>",
            "Eixo para serra circular <span> 3/8 | 5/8 | 3/4</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Acessível mas confiável: Qualidade Bosch a um preço acessível, a primeira e melhor opção para profissionais orientados para o preço. Facilidade de uso: - A mira de corte visível na placa de base aumenta a precisão do corte - A empunhadeira adicional robusta proporciona estabilidade no corte. Prática e excelente ergonomia: - Compacta, robusta, mais potente mas leve - O design ergonômico e material robusto aumentam sua durabilidade.",
                "", "", "",
            ],
            [
                "Acessível mas confiável: Qualidade Bosch a um preço acessível, a primeira e melhor opção para profissionais orientados para o preço. Facilidade de uso: - A mira de corte visível na placa de base aumenta a precisão do corte - A empunhadeira adicional robusta proporciona estabilidade no corte. Prática e excelente ergonomia: - Compacta, robusta, mais potente mas leve - O design ergonômico e material robusto aumentam sua durabilidade.",
                "", "", "",
            ],
            [
                "A serra mármore Bosch GDC 150 TITAN, é a única ferramenta do mercado que alcança espaços que as outras não alcançam, além de ser leve e compacta, possui placa-base de fácil ajuste e remoção, alto torque e maior velocidade nas diversas aplicações. Conta com 1500 Watts de potência para mais eficiência e agilidade no trabalho e peso de 2.6 kg. A serra mármore Bosch acompanha: 1 chave allen, 1 chave de boca, 1 manual de instruções e 2 discos. Garantia 2 anos Bosch.",
                "", "", "",
            ],
            [
                "A Serra Tico-Tico Bosch gst 650, com potência de 450 w, é a ferramenta de entrada para quem procura por um produto profissional com excelente preço. Selecione a velocidade que quer trabalhar com a função de velocidade variável e a de pré seleção de velocidade. Troque lâminas de maneira simples e fácil através de um parafuso tipo allen, com suporte e cursor de lâmina robusto. Sua placa base possibilita regulagem de inclinação de até 45º – para a esquerda e para a direita – e é reforçada para os trabalhos mais rotineiros, acompanha 1 lâmina básica para madeira, e é indicada para uso profissional.",
                "", "", "",
            ],
            [
                "Ideal tanto para uso profissional como doméstico, a CS1024 conta com 1500W de potência e velocidade de 550 rpm. Com a lâmina de Wídia de 7 1/4 (184mm) e com 18 dentes, você serra facilmente qualquer tipo de madeira. Possui empunhador ergonômica para máximo controle e sapata com ajuste de profundidade e ajuste de cortes em ângulo de 0° a 45°. Alcança profundidade de corte de até 62 mm para um corte de 90º e 46mm para 45º. Tenha liberdade pra se movimentar com o cabo de 2m de comprimento.",
                "", "", "",
            ],
            [
                "Serra circular é indicada para cortar somente madeiras e derivados. Possui ajuste de profundidade de corte e regulagem de ângulo de até 45º.",
                "Tensão: 220V", "Potência: 1400W", "Rotação: 5.000rpm",
            ],
            [
                "Serra mármore indicada para granito, concreto, alvenaria, telha, tijolo, ardósia, pedras em geral e madeira, ideal para uso na construção civil. Possui base com regulagem de profundidade que confere cortes mais precisos e melhor acabamento, com dispositivo de segurança no interruptor, evitando acionamentos involuntários, e motor com dupla isolação garantindo maior segurança ao operador.",
                "Potência: 1.300W","Tensão: 110V","Frequência: 50 Hz/60 Hz",
            ],
            [
                "A Serra Tico-Tico Skil 4400, com potência de 400 Watts, é a ferramenta que oferece varias posições de pega e por ter partes da carcaça emborrachada traz melhor ergonomia mesmo nos trabalhos onde for gerado poeira. Selecione a velocidade que quer trabalhar com a função de velocidade variável e a de pré seleção de velocidade. Troque lâminas de maneira simples e fácil através de um parafuso tipo allen, com suporte e cursor de lâmina robusto. Sua placa base possibilita regulagem de inclinação de até 45º (15º, 30º e 45º) para a esquerda e para a direita - e é reforçada para os trabalhos mais rotineiros e para trabalhos continuos o botão trava foi desenvolvido para ser acionado por destro ou canhoto com maior facilidade.",
                "","",""
            ],
            [
                "Eixo para serra circular. Aplicação: Marcenaria marmorarias, construção civil, industrias e outros <br> 3/8 <br> 5/8 <br> 3/4",
                "","",""
            ]
           
        ],
   
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
   // global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelPincel);
    }
});

function funcStart ()
{
    global.Pincel.dispatchEvent(new Event("change"));
}
funcStart();