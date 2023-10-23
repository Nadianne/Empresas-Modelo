import * as global from './global.js';
global.Serra.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Serra"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([5]);
    global.setImgAllPath(["../imagens-madereira/Serra/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Serra circular Bosh 1500w 127v',
        'Serra circular Bosh 2000w 127v',
        'Serra Mármore Discos 1500W 127v',
        'Serra Bosh tico-tico 450W 127v',
        'Serra circular Black Decker 127v 1500w',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Serra circular Bosh  <span> 1500w 127v</span>",
            "Serra circular Bosh  <span> 20-65 2000w 127v</span>",
            "Serra Mármore Discos <span> 1500 W Bosch</span>",
            "Serra Bosh tico-tico <span> 450W 127v</span>",
            "Serra circular Black Decker <span> 127v 1500w</span>",

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