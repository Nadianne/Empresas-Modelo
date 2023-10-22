import * as global from './global.js';
global.varao.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Varão"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([7]);
    global.setImgAllPath(["../imagens-industria/varao/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Eucalipto Varão de 06 à 08 cm - 7,00 m',
        'Eucalipto Varão de 06 à 08 cm - 6,00 m',
        'Eucalipto Varão de 08 à 10 cm - 5,00 m',
        'Eucalipto Varão de 08 à 10 cm - 6,00 m',
        'Eucalipto Varão de 08 à 10 cm - 7,00 m',
        'Eucalipto Varão de 10 à 12 cm - 5,00 m',
        'Eucalipto Varão de 10 à 12 cm - 7,00 m',

       
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Eucalipto Varão <span>06 à 08 cm com 7,00 metros</span>",
            "Eucalipto Varão <span>06 à 08 cm com 6,00 metros</span>",
            "Eucalipto Varão <span>08 à 10 cm com 5,00 metros</span>",
            "Eucalipto Varão <span>08 à 10 cm com 6,00 metros</span>",
            "Eucalipto Varão <span>08 à 10 cm com 7,00 metros</span>",
            "Eucalipto Varão <span>10 à 12 cm com 5,00 metros</span>",
            "Eucalipto Varão <span>10 à 12 cm com 7,00 metros</span>",
            

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