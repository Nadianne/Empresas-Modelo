import * as global from './global.js';
global.Lixadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Lixadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([4]);
    global.setImgAllPath(["../imagens-madereira/Lixadeira/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Lixadeira Orbital Parede 127v',
        'Lixadeira Black Decker Orbital 127v',
        'Lixadeira de Palma Oscilante Skil',   
        'Lixadeira Politriz 127v Stanley ',

    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Lixadeira Orbital Parede<span> Bosh 127v</span>",
            "Lixadeira Black Decker Orbital  <span> 127v </span>",
            "Lixadeira de Palma <span>Oscilante Skil 127v </span>",
            "Lixadeira Politriz 7 <span>1300w 127v Stanley</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "A Lixadeira Orbital de Palma Bosch GSS 140, com 220 W de potência, é a junção de rendimento e conforto que cabe na palma da sua mão. Com uma base de alumínio e borracha resistente é ideal para lixar paredes e conta com revestimento de alta qualidade que proteje a ferramenta contra o pó. Possui clip prendedor de lixa para facilitar a colocação do acessório, e seu botão liga-desliga de fácil acesso torna a utilização da GSS 140 muito mais fácil e confortável. A empunhadura ergonômica possibilita sua utilização em diversas posições, o que faz com que o trabalho seja menos cansativo. Vem pronta para usar, pois acompanha 3 lixas.",
                "Peso: 1,2 kg", "Número de rotações em vazio: 14.000 r.p.m.", "Número de oscilações em vazio: 28.000 o.p.m.",
            ],
            [
                "Lixadeira orbital 200W 1/4 de lixa Black Decker BS200 é perfeita para uso hobby e doméstico, pois conta com um potente motor de 200w; própria para lixamentos em madeira e metal, podendo ser aplicada em Janelas, Portas, Móveis e Prateleiras; Por ser compacta e contar com design ergonômico, a BS200 da Black + Decker é ideal para trabalhos em locais de difícil acesso;",
                "Potência: 200W;", "Orbitas por Minuto: 14.000 opm;", "Comprimento da base: 112mm;",
            ],
            [
                "A Lixadeira de Palma 7232 de 1⁄4 polegadas da Skil é a solução ideal para facilitar o trabalho de quem procura ferramentas com alto desempenho. Esse modelo oferece condições essenciais para que o profissional possa desenvolver um trabalho de qualidade excelente com menos esforço e maior rapidez. Ela possui um potente motor que produz oscilação de 14.000 opm e design compacto e ergonômico.",
                "Potência: 1.300W", "Voltagem da Bateria: 127 V", "",
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