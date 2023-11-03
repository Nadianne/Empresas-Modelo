import * as global from './global.js';
global.Martelo.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Martelo"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-madereira/Martelo/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Martelo Profissional Tamboreado' ,
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Martelo Profissional Tamboreado <span>Momfort</span>" ,

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Produzido em aço especial fundido, possui verniz para proteção contra ferrugem, cabo de madeira com acabamento lixado e encerado.",
                "Número: 23", "Número: 25", "Número: 27",
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