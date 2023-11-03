import * as global from './global.js';
global.Marreta.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Marreta"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([3]);
    global.setImgAllPath(["../imagens-madereira/Marreta/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Marreta de borracha 40mm' ,
        'Marreta de borracha 60mm',
        'Marreta de borracha 60mm',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Marreta de borracha 40mm<span> branca azulejo</span>" ,
            "Marreta de borracha 60mm<span> preta</span> ",
            "Marreta de borracha 60mm<span> branca</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Marreta cabo madeira 40mm  cabeça em borracha branca azulejo",
                "", "", "",
            ],
            [
                "Marreta cabo madeira 60mm  cabeça em borracha preta",
                "", "", "",
            ],
            
            [
                "Marreta cabo madeira 60mm  cabeça em borracha branca",
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