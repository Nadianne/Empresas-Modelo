import * as global from './global.js';
global.Esmerilhadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Esmerilhadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-madereira/Esmerilhadeira/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Esmerilhadeira Skil 830w 127v',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Esmerilhadeira Skil 830w <span>127v</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                " Esmerilhadeira Angular Skil 9002, possui 700 Watts de potência e foi desenvolvida para cortes e desbastes em diversos materiais - sempre utilize o acessório correto - com discos de 4 1/2, para garantir maior durabilidade as engrenagens tem dentes helicoidais e é 100% rolamentada,além do interruptor liga/desliga ser selado contra pó. ",
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