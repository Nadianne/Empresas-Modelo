import * as global from './global.js';
global.Grampos.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Grampos"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-madereira/Grampos/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Jogo De Grampos Multiuso Stanley',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Jogo De Grampos Multiuso <span>Stanley</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "- 2 peças do grampo 3<br>- 2 peças do grampo 2.1/2<br>- 4 peças do grampo 1.1/2<br>- 4 peças do grampo 1<br>- 4 peças do grampo 3/4",
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