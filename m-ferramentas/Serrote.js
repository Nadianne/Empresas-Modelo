import * as global from './global.js';
global.Serrote.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Serrote"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([4]);
    global.setImgAllPath(["../imagens-madereira/Serrote/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Serrote De Costa 14 Polegadas ',
        'Serrote Profissional Supercut',
        'Serrote Profissional 20 Polegadas',
        'Serrote Profissional 24 Polegadas',
        'Guarda-roupa Casal com Espelho 6 Portas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Serrote De Costa 14 Polegadas <span>VONDER</span>",
            "Serrote Profissional Supercut <span>Tramontina Master 22 polegadas</span>",
            "Serrote Profissional <span>Stanley 20 Polegadas</span>",
            "Serrote Profissional <span>Stanley 24 Polegadas</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Serrote de costa 14 VONDER Destaques e diferenciais: Cabo ergonômico de plástico rígido ABS recoberto com borracha termplástica Aplicações e dicas de uso: Indicado para fazer cortes precisos em madeiras e chapas derivadas.",
                "Comprimento de corte do serrote: 14 - 355 mm", "Comprimento de corte do serrote: 14 - 355 mm", " Material da lâmina do serrote: Aço temperado <br> Material do cabo do serrote: Plástico rígido ABS ",
            ],
            [
                "O Serrote Supercut Tramontina Master. Projetado para o corte de diferentes tipos de madeira, ele traz materiais de qualidade na sua composição. Com lâmina em aço, apresenta tripla afiação, que proporciona um corte mais preciso. Além disso, a lâmina vem com têmpera especial nos dentes, aumentando a resistência. Prezando também pelo conforto do usuário, ele traz cabo ergonômico. É uma ferramenta completa e essencial para você ter por perto.",
                "", "", "",
            ],
            [
                "Serrote profissional de 20 polegadas com 08 dentes por polegadas e Lâmina de aço temperado. Possui dentes travados e polidos e cabo de madeira.",
                "", "", "",
            ],
            [
                "Cabo em madeira tratada com Lâmina de aço SAE 1070 temperado e Dentes travados e polidos para um corte até 37% mais rápido. Possui Esquadro de 0° e 90° e Comprimento lâmina: 24 polegadas. ",
                "", "", "",
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