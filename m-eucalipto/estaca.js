import * as global from './global.js';
global.estaca.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Estaca"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([3]);
    global.setImgAllPath(["../imagens-industria/eucalipto/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Eucalipto Estaca de 06 à 08 cm - 2,20 m',
        'Eucalipto Estaca de 08 à 10 cm - 2,20 m',
        'Eucalipto Estaca de 10 à 12 cm - 2,20 m',
       
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Eucalipto Estaca <span>06 à 08 cm com 2,20 metros</span>",
            "Eucalipto Estaca <span>08 à 10 com 2,20 metros</span>",
            "Eucalipto Estaca <span>08 à 10 cm com 2,20 metros</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Aplicacoes: Cercas, construcao civil, mobiliario rustico, brinquedos, paisagismo e decoracao.",
                "","","",
            ],
            [
                "Aplicacoes: Cercas, construcao civil, mobiliario rustico, brinquedos, paisagismo e decoracao.",
                "","","",
            ],
            [
                "Aplicacoes: Cercas, construcao civil, mobiliario rustico, brinquedos, paisagismo e decoracao.",
                "","","",
            ],
           
        ],
   
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
   // global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelmourao);
    }
});

function funcStart ()
{
    global.mourao.dispatchEvent(new Event("change"));
}
funcStart();