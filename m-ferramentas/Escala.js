import * as global from './global.js';
global.Escala.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Escala"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-madereira/Escala/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Escala Monfort 2 metros' ,
        'Escala Monfort 1 metro',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Escala Monfort<span> 2 metros</span>" ,
            "Escala Monfort<span> 1 metro</span> ",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Produto indicado para construção civil e carpintaria. Ideal para medição de superfícies menores, possui medidas em centímetros e polegadas.",
                "Composição: Madeira e Aço. ", "Escala de Madeira 2 Metros ", "",
            ],
            [
                "Produto indicado para construção civil e carpintaria. Ideal para medição de superfícies menores, possui medidas em centímetros e polegadas.",
                "Composição: Madeira e Aço. ", "Escala de Madeira 1 Metro ", "",
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