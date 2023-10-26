import * as global from './global.js';
global.Tupia.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Tupia"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-madereira/Tupia/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Tupia De Coluna Skil',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Tupia De Coluna Skil <span>1.100w 6mm</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "A tupia é uma ferramenta ótima pra dar acabamento na madeira, viu? Com ela, você pode fazer detalhes lindos, como molduras, bordas arredondadas, encaixes e até mesmo desenhos!",
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