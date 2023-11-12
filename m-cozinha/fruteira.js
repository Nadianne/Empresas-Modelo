import * as global from './global.js';
global.Fruteira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Fruteira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([8]);
    global.setImgAllPath(["../imagens-moveis/fruteira/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Fruteira Multiuso',
        'Armário Fruteira',
        'Fruteira Balcão',
        'Fruteira 2 Cestos',
        'Fruteira Armario',
        'Fruteira Luna Amendoa',
        'Armário Fruteira',
        'Multiuso Fruteira',
    
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Fruteira Multiuso  <span>Bahrein </span>",
            "Armário Fruteira <span>Lyon Móveis</span>",
            "Balcão De Cozinha <span>Com Fruteira</span>",
            "Fruteira 2 Cestos <span> Tampo Em Granito</span>",
            "Fruteira Armario <span>2 Portas</span>",
            "Fruteira Luna <span> 3 cestas metálicas</span>",
            "Armário Fruteira <span>1 Porta 2 Cestas </span>",
            "Armário Fruteira <span>com tampo granito </span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "A Fruteia Multiuso Móveis Sul Bahrein vai deixar sua cozinha ainda mais bela e sofisticada! ",
                "Dimensões:<br> Altura: 117,00cm", "Largura: 69cm", "Profundidade: 45,00cm",
            ],
            [
                "O multiuso fruteira possui nichos para forno/micro, assim como espaços para acondicionar e organizar objetos, sendo ideal para compor ambientes como cozinhas. ",
                "Dimensões:<br> Altura: 117,00cm", "Largura: 68,00cm", "Profundidade: 42,00cm",
            ],
            [
                "Balcão para cozinha com fruteira, com estrutura em mdp de 15mm, pintura com acabamento em uv (brilho). ",
                "Dimensões:<br> Altura: 76cm", "Largura: 61cm", "Profundidade: 41cm",
            ],
            [
                "Fruteira 2 cestos tampo em granito madri aço coelho preto martelado. Fruteira madri da marca aço coelho, fabricada em aço no tubo de 7/8 com pintura epóxi.",
                "Dimensões:<br> Altura: 85,00cm", "Largura: 40,00cm", "Profundidade: 35,00cm",
            ],
            [
                "Armário Multiuso Prático se adapta a todos os espaços, organizando e decorando ambientes como cozinha.",
                "Dimensões:<br> Altura: 87,00cm", "Largura:  87,00cm", "Profundidade: 42,00cm",
            ],
            [
                "Balcão Fruteira Luna possui tampo com suporte para Forno/Micro, assim como espaços para acondicionar e organizar objetos, sendo ideal para compor ambientes como cozinhas. Possui puxador plástico na cor Bronze e 3 cestas metálicas, ideal para pequenos ambientes.",
                "Dimensões:<br> Altura: 74,00cm", "Largura:  62,00cm", "Profundidade: 45,00cm",
            ],
            [
                "O Multiuso Fruteira Lyon Branco possui nichos para Forno/Micro, assim como espaços para acondicionar e organizar objetos, sendo ideal para compor ambientes como cozinhas. Possui puxador plástico na cor Bronze, pés plásticos, e aramados metálicos como detalhes . Produto em MDP com acabamento em Pintura UV.",
                "Dimensões:<br> Altura: 117,00cm", "Largura:  68,00cm", "Profundidade: 42,00cm",
            ],
            [
                "A Rack Multiuso Aspen é versátil, pode ser utilizado conforme sua necessidade, seja para apoiar o forno micro-ondas, o bebedouro, os eletros portáteis em geral e até armazenar as frutas e os vegetais. Fabricado em aço, com tampo em Granito e cestas removíveis, tudo mais higiênico e fácil de limpar.",
                "Dimensões:<br> Altura: 95,00cm", "Largura:  65,00cm", "Profundidade: 40,00cm",
            ],
           
        ],
   
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
   // global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelFruteira);
    }
});

function funcStart ()
{
    global.Fruteira.dispatchEvent(new Event("change"));
}
funcStart();