import * as global from './global.js';
global.Talhadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Talhadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-madereira/Talhadeira/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Lavadora Talhadeira 25x254MM Stanley ',
        'Talhadeira 19x305MM 3/4x12 Stanley'
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Talhadeira 25x254MM <span>1x10 Stanley</span>",
            "Talhadeira 19x305MM 3/4x12 <span>Stanley</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Fabricado em aço cromo vanádio para maior resistência e durabilidade. Acabamento de alta visibilidade. Aço temperado seguindo especificações de segurança",
                "", "", "",
            ],
            [
                "Fabricado em aço cromo vanádio para maior resistência e durabilidade. Acabamento de alta visibilidade. Aço temperado seguindo especificações de segurança",
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