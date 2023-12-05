import * as global from './global.js';
global.Sofa.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Sofá"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([9]);
    global.setImgAllPath(["../imagens-moveis/sofa/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Sofá 3 Lugares',
        'Sofás 2 e 3 Lugares',
        'Fruteira Balcão',
        'Sofá Retrátil',
        'Sofá Retrátil',
        'Sofá 3 Lugares',
        'Sofá Retrátil',
        'Conjunto de sofá',
        'Sofá 2 Lugares',
    
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Sofá 3 Lugares <span>Troia FortBello</span>",
            "Sofás 2 e 3 Lugares <span>Suede Cinza</span>",
            "Balcão De Cozinha <span>Com Fruteira</span>",
            "Sofá Retrátil Reclinável <span>1.80m Veludo Tabaco</span>",
            "Sofá Retrátil Reclinável <span>2Primor 2.00 m Gelo</span>",
            "Sofá 3 Lugares <span>Linho Rústico Grigio 190 cm</span>",
            "Sofá Lanus <span> Retrátil e Reclinável 250cm</span>",
            "Conjunto de estofados <span> 2 e 3 lugares</span>",
            "Estofado Imperador <span> 2 lugares Retratil Bege</span>",

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
                "O encosto é feito com poliéster siliconado o que proporciona mais conforto. Além disso, as catracas são de ferro e com várias posições de inclinação. O assento é feito com percintas Italiana, molas bonnel eespuma D-28.O revestimento é em veludo. O veludo é um tecido que tem um superfícies extremamente macia devido a pequenos fios armados e delicados.",
                "Dimensões:<br> Altura: 1.05m", "Largura: 180,00cm", "",
            ],
            [
                "Nosso Sofá Retrátil Reclinável Master Cinza é um produto moderno, com design elegante que combina com qualquer ambiente e deixa sua sala ainda mais linda e aconchegante. O assento retrátil contem espuma Fibra de silicone, percinta elástica, que proporcionam uma acomodação extremamente confortável.",
                "Dimensões:<br> Altura: 1,10m", "Largura:  200,00cm", "Profundidade: 1,65m",
            ],
            [
                " Com 3 lugares, este sofá possui encosto feito por almofadas preenchidas em fibra de silicone e assento com espuma HR33, que apresenta alta adaptabilidade e ótimo poder de retorno ao estado inicial.",
                "Dimensões:<br> Altura: 90,00cm", "Largura: 190,00cm", "Profundidade: 92,00cm",
            ],
            [
                "Perfeito para sua sala de estar dispondo de 6 posições de ajuste, com assento retrátil e o encosto articulado. O Sofá Lanus 250cm é produzido com madeira de reflorestamento e com espuma D26 certificada e sua estrutura em Madeira de Eucalipto. Ter um sofá aconchegante e com encosto articulado em sua sala, é ter descanso garantido.",
                "Dimensões:<br> Altura: 96,00cm", "Largura: 250,00cm", "Profundidade: 101,00cm",
            ],
            [
                "Apresentamos o Estofado Florença 2 e 3 Lugares Tecido 514 Bege da marca Zeep, uma combinação perfeita de elegância, conforto e qualidade. Com um design sofisticado e contemporâneo, este estofado é a opção ideal para elevar o charme da sua sala de estar.O Estofado Florença possui estrutura robusta e é fabricado com materiais de alta qualidade, garantindo durabilidade e resistência ao longo dos anos. Seu estofamento em tecido de cor bege adiciona um toque de leveza e versatilidade ao ambiente, combinando facilmente com diferentes estilos de decoração.",
                "", "", "",
            ],
            [
                "Os móveis da Zeep vão deixar sua casa mais bonita e decorada. O sofá Estofado Imperador 2 lugares é retrátil, ideal para quem gosta de conforto nas suas horas de lazer. Feito em madeira e eucalipto. Isso sem falar que é super confortável com revestimento lindo. O que garante a beleza e qualidade do produto. ",
                "Dimensões:<br> Altura: 93,00cm", "Largura: 194,00cm", "Profundidade: 90,00cm",
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