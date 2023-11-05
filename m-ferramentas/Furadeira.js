import * as global from './global.js';
global.Furadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Furadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-madereira/Furadeira/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Escala Monfort 1MT ',
        'Escala Monfort 2MT ',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Escala Monfort 1MT <span> Madeira Natural</span>",
            "Furadeira Imp Bosch 127v<span>  Madeira Natural</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Ideal para medições de objetos menores. O material rígido auxilia a utilização. Escala de madeira em cor natural. Medidas em cm/pol.",
                "", "", "",
            ],
            [
                "Ideal para medições de objetos menores. O material rígido auxilia a utilização. Escala de madeira em cor natural. Medidas em cm/pol.",
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