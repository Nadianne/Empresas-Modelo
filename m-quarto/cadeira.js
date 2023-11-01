import * as global from './global.js';
global.cadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Cadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([10]);
    global.setImgAllPath(["../imagens-moveis/Cadeira_quarto/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Cadeira Escritório Charles',
        'Cadeira Giratória Para Escritório',
        'Cadeira Giratória Presidente',
        'Cadeira Para Escritório com Rodinhas',
        'Cadeira Operativa Presidente Plus',
        'Cadeira Para Escritório Sem Braços',
        'Poltrona Diretor Kopenhagen Giratória ',
        'Cadeira Presidente Giratória Estofada',
        'Cadeira Executiva Escritório Kingdom',
        'Cadeira de Escritório Giratória',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Cadeira Escritório Charles <span>Presidente Preta</span>",
            "Cadeira Giratória Para Escritório <span>Unimóvel </span>",
            "Cadeira Giratória Presidente <span>Extensível com Mesas</span>",
            "Cadeira Para Escritório<span> Presidente</span>",
            "Cadeira Operativa Presidente Plus <span>Preto Cour</span>",
            "Cadeira Para Escritório Sem Braços <span>Azul / Preto</span> ",     
            "Poltrona Diretor Kopenhagen <span>Fratini Móveis</span> ",         
            "Cadeira Presidente Giratória Estofada <span>Fratini Móveis Fendi</span> ",     
            "Cadeira Executiva Escritório Kingdom <span>Gran Belo</span> ",
            "Cadeira de Escritório Giratória  <span>Com Regulagem</span> ",   
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "A cadeira charles eames presidente foi projetada para fornecer conforto e segurança. Ela é giratória, reclinável, possui regulagem de altura e rodízio: tudo isso para facilitar a sua movimentação no ambiente. Seu revestimento possui um design moderno, para agradar até os clientes mais exigentes. Com ela, o seu escritório ou home office ganha um ar elegante e sofisticado.   ",
                "Dimensões:<br> Altura: 49,00 cm", "Largura: 71,00 cm", "Peso do produto: 13,00 Kg",
            ],
            [
                "A cadeira giratória para escritório unimóvel tec 905 possui seu assento e encosto fabricado em chapa de madeira reconstituída aglomerada de 18 mm, com borda em pvc flexível preto de alta resistência. É ideal para diversos tipos de ambientes, casa escritório, salas de estudo e escolas.",
                "Dimensões:<br> Altura: 78,00 cm", "Largura: 47,00 cm", "Peso do produto: 6,80 Kg",
            ],
            [
                "A Cadeira Presidente Giratória oferece conforto e resistência acima da média. Com seu sistema relax e sua estrutura robusta essa cadeira é ideal para seu escritório ou home-office proporcionando todo o conforto e qualidade que você precisa.",
                "Dimensões:<br> Altura: 120 cm", "Largura: 58 cm", "",
            ],
            [
                "A Cadeira para escritório com rodízios presidente 821-unimóvela cadeira para escritório diretor 821 da unimóvel é o produto perfeito para você que busca por conforto e qualidade. O modelo possui estrutura em aço e é composta por espuma e tecido, garantindo maior conforto, possui ajuste de altura e rodízios para melhor movimentação do produto. Perfeito para diversos ambientes, o modelo é acompanhado de braços fixos e possui detalhes em costura, realçando a beleza do produto. ",
                "Dimensões:<br> Altura: 100 cm", "Largura: 59,00 cm", "Profundidade: 47,00 cm",
            ],
            [
                "A linha de cadeiras estofadas Operativa Plus Plaxmetal proporciona conforto ao usuário, e se adapta perfeitamente à diferentes ambientes e postos de trabalho.  A linha apresenta características e acabamentos que evidenciam a qualidade dos produtos Plaxmetal, e a preocupação com o conforto e o bem-estar de cada um de seus clientes. ",
                "Dimensões:<br> Altura do assento ao chão: 46 cm <br>Altura mínima: 108Cm <br>Altura Máxima: 119 cm", "Largura: 60 cm", "Profundidade: 65 cm",
            ],
            [
                "Cadeira para escritório sem braços 906-unimóvela cadeira para escritório 906 da unimóvel é ideal para você que busca por um produto com qualidade e conforto. O modelo secretaria possui estrutura em aço, possui enchimento em espuma e revestimento em tecido polipropileno, realçando a beleza e qualidade do produto. Com pés fixos, não possui braços e conta com assento fixo. ",
                "Dimensões:<br> Altura: 81,00 cm", "Largura: 43,00 cm", "Profundidade: 40,00 cm",
            ],
            [
                "A  cadeira Kopenhagen Diretor é toda revestida em couro ecológico e possui sua estrutura em madeira, o que a torna ótima por conta de seu design para salas de reuniões. Ela também possui o mecanismo relax, o que irá manter quem estiver sentado nela mais confortável, além de ser possível ajustar a altura do assento!",
                "Dimensões:<br> Altura: 93 cm", "Largura: 63 cm", "Profundidade: 61 cm",
            ],
            [
                "Cadeira Presidente Giratória Estofada Com Rodízios Manhattan Fratini Móveis Fendi Cadeira presidente giratória estofada com rodízios manhattan fratini móveis",
                "Dimensões:<br> Altura: 113,00 cm", "Largura: 91,00 Cm", "Profundidade: 268cm",
            ],
            [
                "A Cadeira executiva escritório kingdom pp preta – gran belo afim de proporcionar um maior conforto e elegância ao seu ambiente de trabalho a cadeira kingdom é um mix de qualidade tem em seu desenvolvimento um assento estofado revestido em polipropileno e resistência garantida com seus pés em aço cromado. ",
                "Dimensões:<br> Altura: 98 à 105 cm ", "Largura:  60,5 cm", "Profundidade: 60,00 cm",
            ],
            [
                "Cadeira de Escritório Giratória Com Regulagem de Altura Bandung Tela Preto - Gran Belo com seu design moderno, regulagem de altura do assento e sistema relax ideal para você se acomodar na medida certa. Fabricado por profissionais com matéria prima resistente e de longa durabilidade. Compre já a sua cadeira Tela e se surpreenda com o conforto e a qualidade!",
                "Dimensões:<br> Altura do Assento ao Chão: 43 à 51cm<br>Altura: 86 à 94cm", "Largura: 55 cm", "Profundidade: 60 cm",
            ],
           
        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias([]);
    if (this.checked) {
        global.setChecked(global.labelGuardaRoupa);
    }
});