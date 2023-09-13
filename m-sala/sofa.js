import * as global from './global.js';
global.Sofa.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Sofá"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-moveis/sofa/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Sofá 3 Lugares',
        'Sofás 2 e 3 Lugares',
        'Fruteira Balcão',
        'Fruteira 2 Cestos',
        'Fruteira Armario',
    
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Sofá 3 Lugares <span>Troia FortBello</span>",
            "Sofás 2 e 3 Lugares <span>Suede Cinza</span>",
            "Balcão De Cozinha <span>Com Fruteira</span>",
            "Fruteira 2 Cestos <span> Tampo Em Granito</span>",
            "Fruteira Armario <span>2 Portas</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Sofá de 3 Lugares Troia com revestimento em linho e com percintas elásticas. Design moderno, ideal para salas e quartos.",
                "Dimensões:<br> Altura: 95cm", "Largura: 240cm", "Profundidade: 96cm",
            ],
            [
                "O Conjunto Sofás 2 e 3 Lugares Suede Cinza Silvaflex Dacar, tem linhas modernas que acompanham as tendências da decoração e oferece sofisticação, qualidade beleza em um único produto.",
                "Dimensões - 2 lugares <br> Altura: 82cm", "Largura: 160cm", "Profundidade: 80cm <br><br>  Dimensões - 3 lugares <br>  Altura:  82cm <br> Largura: 200cm <br> Profundidade: 80cm <br> "  ,
            ],
            [
                "Balcão para cozinha com fruteira, com estrutura em mdp de 15mm, pintura com acabamento em uv (brilho). ",
                "Dimensões:<br> Altura: 76cm", "Largura: 61cm", "Profundidade: 41cm",
            ],
            [
                "Fruteira 2 cestos tampo em granito madri aço coelho preto martelado. Fruteira madri da marca aço coelho, fabricada em aço no tubo de 7/8 com pintura epóxi.",
                "Dimensões:<br> Altura: 85,00cm", "Largura: 40,00cm", "Profundidade: 35,00cm",
            ],
            [
                "Armário Multiuso Prático se adapta a todos os espaços, organizando e decorando ambientes como cozinha.",
                "Dimensões:<br> Altura: 87,00cm", "Largura:  87,00cm", "Profundidade: 42,00cm",
            ],
           
        ],
   
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
   // global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelSofa);
    }
});

function funcStart ()
{
    global.Sofa.dispatchEvent(new Event("change"));
}
funcStart();