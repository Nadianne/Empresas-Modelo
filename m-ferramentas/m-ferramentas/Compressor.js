import * as global from './global.js';
global.Compressor.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Compressor"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-madereira/Compressor/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Compressor Ar Direto Red ',
        'Compressor De Ar Pressure Vortez',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Compressor Ar Direto Red <span>Bivolt</span>",
            "Compressor De Ar Pressure Vortez <span>Bivolt</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Torne o seu dia-a-dia ainda mais prático. Por ser leve, portátil, seguro e de fácil utilização, ele irá atender às suas necessidades de forma rápida e eficiente nos serviços doméstico como: pintar, envernizar, encher, calibrar, pulverizar e secar. Possui sistema de trabalho por membrana, isento de óleo, motor monofásico Bivolt com chave seletora de tensão 110/220V, válvula de segurança e filtro de ar.",
                "", "", "",
            ],
            [
                "Registro para agilizar a troca de óleo<br>Design inovador<br>Anéis de segmento com a garantia e qualidade mahle<br>Novo sistema quem não permite formação de resíduos de óleo no suspiro<br>Melhor ventilação do cárter devido a quantidade e posicionamento das aletas<br>Motor com qualidade weg",
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