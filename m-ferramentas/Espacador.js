import * as global from './global.js';
global.Espacador.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Espaçador"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-madereira/Espacador/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Espaçador Cinza para Bloco de Vidro' ,
        'Espaçador Juntapiso - 100 Unidades',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Espaçador Cinza para Bloco de Vidro <span>com 10 Unidades - CORTAG</span>" ,
            "com 100 Unidades - CORTAG <span>com 100 Unidades - CORTAG</span> ",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Espaçador para bloco de vidro de cor cinza, fabricado em poliestireno alto impacto. Esse produto permite o perfeito alinhamento e espaçamento entre blocos ou tijolos de vidro de 19 x 19 x 8 cm, com distanciamento de 10mm entre os blocos. Fabricado em poliestireno de alto impacto e de cor cinza.",
                " Espaçador para bloco ou tijolo de vidro", "Poliestireno alto impacto", "",
            ],
            [
                "Fabricado em polipropileno Proporcionando assentamento alinhado e Reduzindo o tempo de colocação do revestimento. Funciona como anti-dilatador, evitando o possível deslocamento das peças cerâmicas",
                "Disponível nas larguras: <br>1,5mm <br>1mm<br>2mm<br>3mm<br>5mm", "", "",
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