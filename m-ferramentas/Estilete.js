import * as global from './global.js';
global.Estilete.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Estilete"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-madereira/Estilete/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Estilete Profissional Emborrachado' ,
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Estilete Profissional com Emborrachado Lâminas Aço" ,

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Estilete profissional, possui o corpo emborrachado que proporciona conforto durante a utilização, e sistema de autotravamento que garante segurança e otimiza o desempenho. Além disso, vem com 3 lâminas. Estilete para cortes em geral.",
                "",  "",  "",
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