import * as global from './global.js';
global.esteio.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Esteio"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([4]);
    global.setImgAllPath(["../imagens-industria/varao/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Eucalipto Esteio de 08 à 10 cm - 3,20 m',
        'Eucalipto Esteio de 08 à 10 cm - 4,00 m',
        'Eucalipto Esteio de 10 à 12 cm - 3,20 m',
        'Eucalipto Esteio de 10 à 12 cm - 4,00 m',
       
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Eucalipto Esteio <span>08 à 10 cm com 3,20 metros</span>",
            "Eucalipto Esteio <span>08 à 10 cm com 4,00 metros</span>",
            "Eucalipto Esteio <span>10 à 12 cm com 3,20 metros</span>",
            "Eucalipto Esteio <span>10 à 12 cm com 4,00 metros</span>",
       
            

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Varão de eucalipto de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Varão de eucalipto de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Varão de eucalipto de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Varão de eucalipto de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            
            
          
           
        ],
   
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
   // global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelmourao);
    }
});

function funcStart ()
{
    global.mourao.dispatchEvent(new Event("change"));
}
funcStart();