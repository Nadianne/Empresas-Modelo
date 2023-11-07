import * as global from './global.js';
global.serra.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Serra"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([15]);
    global.setImgAllPath(["../imagens-industria/serra/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Serra circular BLACK & DECKER ',
        'Serra Tico-Tico BLACK & DECKER ',
        'Serra Circular BLACK & DECKER ',
        'Serra Circular Com Mesa 10 Scd 1800',
        'Serra de fita vertical para madeira ',
        'Serra Mármore BLACK & DECKER  ',
        'Serra circular Bosh 1500w 127v',
        'Serra circular Bosh 2000w 127v',
        'Serra Mármore Discos 1500W 127v',
        'Serra Bosh tico-tico 450W 127v',
        'Serra Circular 7.1/4 127v DWT',
        'Serra mármore 127v DWT',
        'Serra Tico Tico Skil 400w',
        'Eixo para serra circular',
        'Serra Circular',
       
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Serra circular <span>BLACK & DECKER 14 1500W 127v </span>",
            "Serra Tico-Tico <span>BLACK & DECKER 550w</span>",
            "Serra Circular <span>BLACK & DECKER  1400W 220V </span>",
            "Serra Circular Com Mesa <span>10 Scd 1800</span>",
            "Serra de fita vertical para madeira <span>375 Watts</span>",
            "Serra Mármore Profissional 4.3/8 <span>Black+decker 1100w</span>",   
            "Serra circular Bosh  <span> 1500w 127v</span>",
            "Serra circular Bosh  <span> 20-65 2000w 127v</span>",
            "Serra Mármore Discos <span> 1500 W Bosch</span>",
            "Serra Bosh tico-tico <span> 450W 127v</span>",
            "Serra circular DWT <span> 7.1/4 127v</span>",
            "Serra mármore <span> 127v DWT</span>",
            "Serra Tico Tico Skil <span>127v 400w</span>",
            "Eixo para serra circular <span> 3/8 | 5/8 | 3/4</span>",
            "Serra Circular de Bancada <span>10 Pol. 1800W</span> "

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Serra circular 7 1/4; potência: 1.500w; rotações por minuto: 550 rpm; sapata com ajuste de profundidade e ajuste de cortes em ângulo de 0º a 45º; empunhadura ergonômica para máximo controle; acompanha: guia de corte, lâmina de 18 dentes e manual; peso: 3,7",
                "Potência: 1.500W","Rotação por minuto: 550 Rpm","Peso: 3,5KG <br> ",
            ],
            [
                "Serra Tico-Tico 550w com Ação Pendular Black Decker Este modelo de serra tico-tico possui velocidade variável e ação pendular. Sua velocidade de 550W de potência permite com que o seu trabalho seja agilizado com maior eficiência.",
                "Potência: 550W"," Velocidade: 3000 gpm<br>Interruptor: 2 Pinos"," Ação Pendular: Sim",
            ],
            [
                "Serra circular 7.1/4 é indicada para marceneiros, montadores de móveis e instaladores em geral. Possui sapata com ajuste de profundidade e ajuste de cortes em ângulo de 0º a 45º. Empunhadura ergonômica para máximo controle e conforto do usuário. ",
                " Tensão: 220V <BR> Peso: 3,5KG","Potência: 1.400W","Rotações por minuto: 550 RPM",
            ],
            [
                "Aplicações/dicas de uso: Indicada para cortar madeiras e derivados.Conteúdo da embalagem: 1 Serra circular de bancada. Acompanha: 1 lâmina de serra de 10 (16,0 mm), 1 chave allen, 1 chave de boca e 1 chave estrela.",
                "Modelo: SCD 1800","Potência: 1.800 W","Largura da mesa: 480,0 mm <br> Altura da mesa: 890,0 mm",
            ],
            [
                "A Serra de fita vertical para madeira 375 Watts capacidade de 100mm - RZ-SF10/M2 da Razi realiza cortes com muita precisão e qualidade garantidas da marca, que é especializada na comercialização de equipamentos para os setores moveleiro, madeireiro e metal mecânico, se consolidando como uma das principais empresas do segmento no Brasil.",
                "Motor 1/2CV – 220V monofásico ","Altura Máxima de Corte 100mm"," Largura máxima de corte 240mm ",
            ],
            [
                "A serra mármore BD115B2 é ideal para cortes e instalações e cortes de pisos, revestimentos, peças de mármore, granitos, azulejos e concretos. Possui motor de alta potência projetada para corte pesado. Conta com botão de segurança para evitar que o gatilho seja acionado acidentalmente.",
                "Potência: 1.100W","Velocidade: 13.000 RPM","Diâmetro do disco: 4-1/2 Pol.  <br>  Capacidade de corte a 90°: 34mm",
            ],
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
            ],
            
            [
                "A serra circular de bancada SCD 1800 possui 1800W de potência, lâmina de serra de 10” (254 mm) e mesa de corte espaçosa. Realiza cortes em diferentes ângulos, possui guia lateral, esquadro para ângulos, proteção da lâmina em acrílico e regulagem de ângulo e de altura da Serra. Ideal para cortar madeira e derivados, usada em marcenarias, construções, entre outros.<br>- Características:<br>Possui guia lateral, esquadro para ângulos, proteção da lâmina em acrílico e regulagem de ângulo e de altura da Serra<br>Realiza Cortes em diferentes ângulos e alturas<br>Mesa de Corte prática e espaçosa",
                "","",""
            ]
          
           
        ],
   
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
   // global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelserra);
    }
});

function funcStart ()
{
    global.serra.dispatchEvent(new Event("change"));
}
funcStart();