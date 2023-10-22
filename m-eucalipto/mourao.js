import * as global from './global.js';
global.mourao.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Mourão"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([20]);
    global.setImgAllPath(["../imagens-industria/eucalipto/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Mourão De Eucalipto Tratado de 12 à 14 cm - 6,00 m',
        'Mourão De Eucalipto Tratado de 14 à 16 cm - 2,50 m',
        'Mourão De Eucalipto Tratado de 12 à 14 cm - 2,50 m',
        'Mourão De Eucalipto Tratado de 12 à 14 cm - 4,50 m',
        'Mourão De Eucalipto Tratado de 14 à 16 cm - 3,20 m',
        'Mourão De Eucalipto Tratado de 14 à 16 cm - 5,00 m',
        'Mourão De Eucalipto Tratado de 14 à 16 cm - 6,00 m',
        'Mourão De Eucalipto Tratado de 16 à 18 cm - 2,00 m',
        'Mourão De Eucalipto Tratado de 16 à 18 cm - 2,50 m', 
        'Mourão De Eucalipto Tratado de 16 à 18 cm - 2,80 m',
        'Mourão De Eucalipto Tratado de 16 à 18 cm - 3,20 m',
        'Mourão De Eucalipto Tratado de 16 à 18 cm - 4,00 m',
        'Mourão De Eucalipto Tratado de 18 à 20 cm - 4,00 m',
        'Mourão De Eucalipto Tratado de 18 à 20 cm - 5,00 m',
        'Mourão De Eucalipto Tratado de 18 à 20 cm - 2,50 m',
        'Mourão De Eucalipto Tratado de 18 à 20 cm - 2,80 m',
        'Mourão De Eucalipto Tratado de 18 à 20 cm - 3,20 m',
        'Mourão De Eucalipto Tratado de 18 à 20 cm - 6,00 m',
        'Mourão De Eucalipto Tratado de 22 à 24 cm - 5,00 m',
        'Mourão De Eucalipto Tratado de 32 à 42 cm - 6,40 m',

       
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Mourão De Eucalipto Tratado <span>12 à 14 cm com 6,00 metros</span>",
            "Mourão De Eucalipto Tratado <span>14 à 16 cm com 2,50 metros</span>",
            "Mourão De Eucalipto Tratado <span>12 à 14 cm com 2,50 metros</span>",
            "Mourão De Eucalipto Tratado <span>12 à 14 cm com 4,00 metros</span>",
            "Mourão De Eucalipto Tratado <span>14 à 16 cm com 3,20 metros</span>",
            "Mourão De Eucalipto Tratado <span>14 à 16 cm com 5,00 metros</span>",
            "Mourão De Eucalipto Tratado <span>14 à 16 cm com 6,00 metros</span>",
            "Mourão De Eucalipto Tratado <span>16 à 18 cm com 2,00 metros</span>",
            "Mourão De Eucalipto Tratado <span>16 à 18 cm com 2,50 metros</span>",
            "Mourão De Eucalipto Tratado <span>16 à 18 cm com 2,80 metros</span>",
            "Mourão De Eucalipto Tratado <span>16 à 18 cm com 3,20 metros</span>",
            "Mourão De Eucalipto Tratado <span>16 à 18 cm com 4,00 metros</span>",
            "Mourão De Eucalipto Tratado <span>18 à 20 cm com 4,00 metros</span>",
            "Mourão De Eucalipto Tratado <span>18 à 20 cm com 5,00 metros</span>",
            "Mourão De Eucalipto Tratado <span>18 à 20 cm com 2,50 metros</span>",
            "Mourão De Eucalipto Tratado <span>18 à 20 cm com 2,80 metros</span>",
            "Mourão De Eucalipto Tratado <span>18 à 20 cm com 3,20 metros</span>",
            "Mourão De Eucalipto Tratado <span>18 à 20 cm com 6,00 metros</span>",
            "Mourão De Eucalipto Tratado <span>22 à 24 cm com 5,00 metros</span>",
            "Mourão De Eucalipto Tratado <span>32 à 42 cm com 6,40 metros</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
                "","","",
            ],
            [
                "Mourão de eucalipto tratado de alta qualidade, ideal para cercas, pomares, pastagens e outras aplicações rurais. Com resistência e durabilidade superiores, nossos mourões são tratado de forma sustentável e respeitando as normas técnicas. ",
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