import * as global from './global.js';
global.Pistola.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Pistola"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-madereira/Pistola/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Pistola De Pintura Gravidade/retoque Arcdal 0.8',
        'Pistola De Pintura Gravidade/retoque Arcdal 1.5',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            " Pistola De Pintura Gravidade/retoque <span>Arcdal </span>",
            " Pistola De Pintura Gravidade/retoque <span>Arcdal </span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Desenvolvida para todas as tintas automotivas e industriais. Acabamento de alta qualidade. Bicos e agulhas em aço inoxidável, podendo ser utilizada com tintas a base de água.",
                "Bico: 1,2 mm", "Caneca plástica: 250 ml", "Consumo de ar: 4,5 PCM<br>Pressão de trabalho: 22-45 PSI<br>Compressor sugerido: 5,2 pés cúbicos<br>Entrada de Ar: 1/4",
            ],
            [
                "Desenvolvida para todas as tintas automotivas e industriais. Acabamento de alta qualidade. Bicos e agulhas em aço inoxidável, podendo ser utilizada com tintas a base de água.",
                "Capacidade: 600 ml", "Diâmetro do bico: 1.5mm", "Pressão de trabalho: 20 - 40lbs",
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