import * as global from './global.js';
global.Piso.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Piso"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([11]);
    global.setImgAllPath(["../imagens-madereira/piso/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Piso Cerbras Quartzo',
        'Piso Rox Dakar ',
        'Piso Triunfo Bali ',
        'Piso Ravello Pietra ',
        'Piso Ravello Naturalle  ',
        'Piso Hd Vulcano Ocre',
        'Porcelanato Esmaltado  ',
        'Piso Ravello Vetro  ',
        'Piso Ravello Mar Grigio ',
        'Piso Ravello decorato  ',
        'Piso Ravello Pavimento',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Piso Cerbras Quartzo <span> Branco </span>",
            "Piso Rox Dakar <span> 57×57 (Cx. 2,30m²) </span>",
            "Piso Triunfo Bali <span>57x57 Cx:3.30 metros</span>",
            "Piso Ravello Pietra<span> Grigio 45x45</span>",
            "Piso Ravello Naturalle <span> Bianco 45x45 Mix</span>",
            "Piso Hd Vulcano Ocre <span> 62x62 Granilha Triunfo 81m²</span>",
            "Porcelanato Esmaltado Brilhante <span> 58x58 Cm Retificado Bianco </span>",
            "Piso Ravello Vetro Grigio  <span> 45x45cm A</span>",
            "Piso Ravello Mar Grigio  <span> 45x45cm</span>",
            "Piso Ravello Vetro Grigio  <span> 45x45 A</span>",
            "Piso Ravello decorato <span>  Nobile 45x45 Mix</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "A Cerâmica Tipo A Quartzo Branco Cerbras tem tonalidade branca com acabamento lateral Bold (borda ).",
                "Dimensões:57 x 57cm", " Espessura:7,8mm", "Caixa: 2.62m",
            ],
            [
                "Os Pisos Cerâmicos Colorado possuem a medida de 57x57cm e fazem parte da nossa coleção Natura. Sua superfície com relevo e acabamento acetinado é normalmente indicado para pisos em quartos, salas, cozinhas, banheiros e garágens com médio tráfego agregando muito mais estilo e conforto em seu ambiente.",
                "Dimensões:57 x 57cm", "Caixa: 2.30m",""
            ],
            [
                "O piso cerâmico é sem dúvida um dos pisos mais versáteis encontrados no mercado, podendo ser utilizado em ambientes internos e externos. Fácil de limpar.                .",
                "Dimensões:57 x 57cm", "Caixa: 3.30m",""
            ],
            [
                "Os pisos granilhados Ravello são as ótimas opções para áreas de lazer, como piscina, e áreas de serviço, pois garantem segurança antiderrapante. ",
                "Dimensões:57 x 57cm <br> Material: Cerâmico", "Caixa: 2.30m <br> Uso Indicado: Ambientes externos molhados", "Espessura: 0.5 mm"
            ],
            [
                "O Piso Naturalle Bianco é indicado para Ambientes Residencias Internos com Baixo e Médio Tráfego. Conta com maior praticidade no assentamento, design moderno e elegante. ",
                "Dimensões:45 x 45cm <br> Material: Cerâmico", "Caixa: 2.30m <br> Acabamento da Superfície: Brilho", "Cor: Branco",
            ],
            [
                "O Piso Triunfo Vulcano Ocre Granilhado 62x62cm possui um design que deixará seu ambiente com um aspecto atual e mais bonito.",
                "Dimensões:62 x 62cm ", "Caixa: 2.70m <br>", "",
            ],
            [
                "O Porcelanato Esmaltado Brilhante Bianco Lux da Pamesa é uma escolha sofisticada e elegante para revestimento de espaços interiores. Com um acabamento brilhante que adiciona um toque de luminosidade e estilo, este porcelanato apresenta uma tonalidade Bianco Lux,",
                "Dimensões:58 x 58cm <br> Acabamento lateral: Retificado", "Caixa: 1.68 metros ", "Acabamento: Brilhante",
            ],
            [
                "O Piso Ravello Vetro Grigio 45x45 da Série A é uma escolha elegante e contemporânea para revestimento de espaços interiores.",
                "Tamanho:45 x 45cm", "Caixa: 2.00 metros", "",
            ],
            [
                "O  Piso Mar Grigio é Indicado para Indicado para Ambientes Externos com Médio/Alto Tráfego. Conta com maior praticidade no assentamento, design moderno e elegante. É um Piso com acabamento Granilhado, Desenvolvido para proporcionar maior Durabilidade, Alta Resistência e Sofisticação ao Ambiente.",
                "Tamanho:45 x 45cm", "Caixa: 2.00 metros", "Cor: Multicolor",
            ],
            [
                "Com um design decorativo distintivo, este piso acrescenta um toque de estilo e personalidade ao ambiente. Suas dimensões de 45x45 cm proporcionam uma área de cobertura eficiente, tornando-o uma escolha prática para transformar espaços com charme e sofisticação. ",
                "Tamanho:45 x 45cm", "Caixa: 2.00 metros", "Acabamento: Amadeirado Brilhante",
            ],
            [
                "Com um design decorativo distintivo, este piso acrescenta um toque de estilo e personalidade ao ambiente. Suas dimensões de 45x45 cm proporcionam uma área de cobertura eficiente, tornando-o uma escolha prática para transformar espaços com charme e sofisticação. ",
                "Tamanho:45 x 45cm", "Caixa: 2.00 metros", "Modelo: Pavimento Nobile Mix",
            ],
        ],
   
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
   // global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelPiso);
    }
});

function funcStart ()
{
    global.Piso.dispatchEvent(new Event("change"));
}
funcStart();