import * as global from './global.js';
global.Serrote.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Serrote"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-madereira/Serrote/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Serrote De Costa 14 Polegadas ',
        'Mesa de Jantar ',
        'Mesa Redonda Copa ',
        'Cômoda 5 Gavetas',
        'Guarda-roupa Casal com Espelho 6 Portas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Serrote De Costa 14 Polegadas <span>VONDER</span>",
            "Mesa de Jantar <span>Alvin </span>",
            "Mesa Redonda Copa <span>Carraro</span>",
            "Cômoda 5 Gavetas<span> Seul Móveis Sul</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Serrote de costa 14 VONDER Destaques e diferenciais: Cabo ergonômico de plástico rígido ABS recoberto com borracha termplástica Aplicações e dicas de uso: Indicado para fazer cortes precisos em madeiras e chapas derivadas.",
                "Comprimento de corte do serrote: 14 - 355 mm", "Comprimento de corte do serrote: 14 - 355 mm", " Material da lâmina do serrote: Aço temperado <br> Material do cabo do serrote: Plástico rígido ABS ",
            ],
            [
                " A mesa de jantar Alvin é opção certa para você! Com design moderno, ela possui a estrutura em aço e o tampo em vidro, o que é super moderno, elegante.",
                "Dimensões:<br> Altura: 63,00cm", "Largura: 63,00cm", "Profundidade: 90,00cm",
            ],
            [
                "A Mesa de Jantar 4 Lugares Vercelli da Carraro, é a melhor opção para quem busca Organização, Estilo e Elegância!",
                "Dimensões:<br> Altura: 76,50cm", "Largura: 100cm", "Profundidade: 100cm",
            ],
            [
                "Cômoda Seul possui 5 gavetas com corrediças metálicas sendo ideal para acondicionar e organizar objetos, indicado para compor ambientes em seu quarto ou closet.",
                "Dimensões:<br> Altura: 67,5cm", "Largura: 91,5cm", "Profundidade:  37,7cm",
            ],
           
        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias([]);
    if (this.checked) {
        global.setChecked(global.labelPincel);
    }
});