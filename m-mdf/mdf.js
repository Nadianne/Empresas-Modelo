import * as global from './global.js';
global.mdf.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["mdf"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([9]);
    global.setImgAllPath(["../imagens-industria/mdf/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Áurea Imperial',
        'Áurea Imperial',
        'Café torrado',
        'Café torrado',
        'Caravela',
        'Caravela',
        'Pincel Trincha Pluma Tek 315/3 n:1 ',
        'Pincel atlas trincha pluma tek 315/7 n:3 ', 
        'Pincel atlas trincha seda 250/1 n:1/2',
        'Pincel atlas trincha pluma tek 315/6 n:2.1/2',
        'Pincel atlas trincha 395/7 n:3 ',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Áurea Imperial <span>06mm</span>",
            "Áurea Imperial <span>15mm</span>",
            "Café torrado <span> 06mm</span>",
            "Café torrado <span>15mm</span>",
            "Caravela <span> 06mm</span>",
            "Caravela<span>15mm</span>",
            "Pincel atlas trincha seda <span> 250/1 n:1/2</span>",
            "Pincel atlas trincha pluma tek <span>315/6 n:2.1/2</span>",            
            "Pincel atlas trincha pluma tek <span>395/7 n:3</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "O padrão Áurea Imperial homenageia a Lei Áurea, que refere-se a lei que pôs fim a forma desumana de exploração do trabalho no Brasil em 1888.",
                "","","",
            ],
            [
                "O padrão Áurea Imperial homenageia a Lei Áurea, que refere-se a lei que pôs fim a forma desumana de exploração do trabalho no Brasil em 1888.",
                "","","",
            ],
            [
                "De grãos selecionados e aroma encantador: O Café Torrado traz em sua essência uma tonalidade quente e atemporal, inspirada nos tons terrosos e cores doces. ",
                "","","",
            ],
            [
                "De grãos selecionados e aroma encantador: O Café Torrado traz em sua essência uma tonalidade quente e atemporal, inspirada nos tons terrosos e cores doces. ",
                "","","",
            ],
            [
                "Inspirado nos convés das antigas embarcações portuguesas que contam a história da colonização do nosso país, Caravela é um padrão de estrutura rústica que apresenta pequenas imperfeições sofridas por ações de intemperes durante pouco mais de 500 anos.  ",
                "","","",
            ],
            [
                "Inspirado nos convés das antigas embarcações portuguesas que contam a história da colonização do nosso país, Caravela é um padrão de estrutura rústica que apresenta pequenas imperfeições sofridas por ações de intemperes durante pouco mais de 500 anos.  ",
                "","","",
            ],
            [
                "A Trincha de Seda 250 1/2 da Atlas possui Cerdas 100% naturais de pelo de pônei, extra-macias.Indicado para verniz e stain com fino acabamento.",
                "Altura:11 MM", " Largura: 78 MM", "Comprimento: 238 MM <br> 250/1 n:1/2",
            ],
            [
                "A Trincha 2.1/2 da Atlas possui uma maior durabilidade com melhor acabamento, com a tecnologia Plumatek deixando fios com formato estrelado.",
                "Altura:11 MM", " Largura: 78 MM", "Comprimento: 238 MM <br> 315/6 n:2.1/2",
            ],
            [
                "Trincha com cerdas gris selecionadas. Excelente relação preço / qualidade.",
                "Altura:11 MM", " Largura: 78 MM", "Comprimento: 238 MM <br>395/7 n:3",
            ],
        ],
   
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
   // global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelmdf);
    }
});

function funcStart ()
{
    global.mdf.dispatchEvent(new Event("change"));
}
funcStart();