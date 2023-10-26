import * as global from './global.js';
global.Soprador.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Soprador"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-madereira/Soprador/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Soprador Térmico Skill',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Soprador Térmico <span>Skill</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Soprador térmico 8003, com potência de 1800 W, une eficiência, segurança e custo benefício. Com 3 níveis de temperatura (50º, 400º e 570ºC respectivamente), ela realiza o trabalho em diversas aplicações, além de permitir sua utilização de maneira estacionária. É muito durável e tem proteção extra contra sobreaquecimento garantindo sua segurança especialmente em caso de obstrução do fluxo de ar. O anel dianteiro pode ser removido para trabalhos em locais de difícil acesso. ",
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