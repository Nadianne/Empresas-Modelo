import * as global from './global.js';
global.Lavadora.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Lavadora"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-madereira/Lavadora/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Lavadora De Alta Pressão Black Decker',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Lavadora De Alta Pressão <span>Black Decker 1400w 127v</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                " Suas lavadoras de alta pressão são verdadeiras máquinas para limpar todos os tipos de sujeira. Sua adaptabilidade a diferentes superfícies e sua extensa durabilidade fazem a diferença entre seus produtos. Graças à sua pressão máxima de 1512 psi, esta lavadora de alta pressão permite que você lave de maneira fácil, rapidamente e com o menor esforço possível.",
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