import * as global from './global.js';
global.Torno.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Torno"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-madereira/Torno/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Torno Morsa De Bancada',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Torno Morsa De Bancada <span>Schulz</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "O Torno de bancada fixo Lider da Somar by Schulz é robusto, preciso. Seu projeto inovador proporciona elevada resistência ao impacto e durabilidade. O novo conjunto fuso-manípulo forjado com rosca trapezoidal permite rápida abertura e maior vida útil do equipamento. Os mordentes em aço temperado e cementado de alta dureza garantem a fixação da peça com perfeito fechamento.",
                "Número: 05", "Número: 08", "",
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