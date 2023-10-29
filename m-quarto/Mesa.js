import * as global from './global.js';
global.Mesa.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Mesa"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([15]);
    global.setImgAllPath(["../imagens-moveis/Mesa_quarto/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Escrivaninha com Estante ',
        'Escrivaninha Intelectual Zanzini',
        'Escrivaninha Em L Industrial',
        'Mesa Escrivaninha com gaveta',
        'Escrivaninha Tuboarte Silvia',
        'Escrivaninha com 2 Gavetas',
        'Mesa Escrivaninha 02 Gavetas ',
        'Mesa Escrivaninha Bari 1 Gaveta ',
        'Mesa Gamer Tecno Mobili',
        'Mesa Tecno Mobili De Canto',
        'Mesa para Computador com rodinhas',
        'Escrivaninha 1 Gaveta Permóbili',
        'Mesa Para Computador Melissa',
        'Mesa para Escritório com 3 Gavetas ',
        'Escrivaninha 2 Gavetas Max Zanzini '
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Escrivaninha com Estante <span>Elisa Permobili</span>",
            "Escrivaninha Intelectual <span>Zanzini</span>",
            "Escrivaninha Em L <span>Dalla Costa Freijó/preto</span>",
            "Mesa Escrivaninha<span> Com Gaveta</span>",
            "Escrivaninha Tuboarte Silvia <span> com 2 Gavetas e Nicho Colmeia</span>",
            "Escrivaninha com 2 Gavetas <span>Escrivaninha com 2 Gavetas</span> ",     
            "Mesa Escrivaninha 02 Gavetas <span>Nogal Tecnomobili</span> ",         
            "Mesa Escrivaninha Bari<span>1 Gaveta </span> ",     
            "Mesa Gamer Ideal Para 2 Monitores Preto/verde <span>Tecno Mobili</span> ",
            "Mesa Tecno Mobili De Canto <span>3 Gavetas</span> ",   
            "Mesa para Computador com <span> rodinhas- Dalla Costa Branco</span>",
            "Escrivaninha 1 Gaveta <span>Cléo Permóbili Café II</span>",
            "Mesa Para Computador Melissa<span>  Permobili</span>",
            "Mesa para Escritório com 3 Gavetas <span> Tecno Mobili</span>",
            "Escrivaninha 2 Gavetas Max Zanzini <span>Natura/off White</span>"
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Um móvel moderno e funcional para complementar seu ambiente. Pode ser utilizada como bancada de estudos ou Mesa de computador. Possui 2 gavetas com corrediça metálica e nichos para livros e objetos diversos além de espaço para impressora. Se necessário, a prateleira acima do gaveteiro pode ser removida para colocação de CPU. Possui tampo resistente com 2,5cm de espessura. para maior segurança, o tampo e algumas prateleiras possuem cantos arredondados.",
                "Dimensões:<br> Altura: 138 cm", "Largura: 138 cm", "Profundidade: 54 cm",
            ],
            [
                "Escrivaninha Intelectual deixara seu ambiente de estudos ou trabalho mais charmoso. Seu design permite harmonia com outros moveis do ambiente independentemente do tipo de decoraçao. Com tampo e latarais produzidos em MDP de 25mm que proporcionam maior resistencia e estabilidade, tambem tem duas gavetas com corrediças metalicas e bom espaço para cadeira. Produzido com madeira de reflorestamento e com certificado FSC",
                "Dimensões:<br> Altura: 74,5cm", "Largura: 108cm", "Profundidade: 44,5cm",
            ],
            [
                "Escrivaninha em l 100% mdf industrial dalla costa freijó/preto. A pradel traz a mesa de canto para escritório f22 jpf, na cor freijó com preto fosco. O móvel conta com estrutura em canto de 135cm por 157,5cm, proporcionando um espaço amplo e confortável para trabalhar ou estudar, além de promover a otimização do espaço físico do seu escritório. A mesa de canto para escritório possui estrutura 100% mdf e pintura uv, com um excelente acabamento, proporcionando uma maior durabilidade ao móvel. ",
                "Dimensões:<br> Altura: 73cm", "Largura: 157cm", "Profundidade: 68cm",
            ],
            [
                "A escrivaninha é ideal para seu ambiente de trabalho, possui design moderno e prático. Além de possuir uma gaveta para armazenamento interno, esta mesa é perfeita para seus afazeres!",
                "Dimensões:<br> Altura: 75cm", "Largura: 118cm", "Profundidade: 53cm",
            ],
            [
                "Apresentamos a Escrivaninha Tuboarte Silvia, muito espaço e praticidade para você estudar e acomodar livros, PCs ou Notebooks! Produzida com estrutura em 100% MDF e pintura U.V. Touch com 7 camadas de proteção, a Escrivaninha Silvia dispõe de 2 gavetas e nicho tipo colmeia para acomodar itens de decoração e estudo, além do requinte e sofisticação dos exclusivos puxadores com acabamento em cor bronze! ",
                "Dimensões:<br> Altura: 151 cm", "Largura:  135,4 cm", "Profundidade: 44,5 cm",
            ],
            [
                "A Mesa de Computador Turim Amêndoa é composta em 100% MDP com acabamento Finish Foil, sua altura ergonômica permite que você possa trabalhar confortavelmente no dia-a-dia, possui 2 gavetas com corrediças metálicas para acondicionar os acessórios. Puxadores ergonômicos e modernos em material plástico.",
                "Dimensões:<br> Altura: 75cm", "Largura: 122cm", "Profundidade: 45,2cm",
            ],
            [
                "Criativa e imponente a linha Office da Tecnomobili foi desenvolvida para entregar o que há de mais prático e simples nas rotinas do dia a dia. Surpreendente em suas linhas e sua proposta minimalista, entrega tudo o que você precisa em uma única linha. Cheia de conforto e estilo a linha combina com tudo e qualquer tipo de ambiente, seja um office mais rústico ou uma pegada mais descolada.",
                "Dimensões:<br> Altura: 74,5cm", "Largura: 127 cm", "Profundidade: 60cm",
            ],
            [
                "O(a) Mesa Escrivaninha Bari 1 Gaveta Amêndoa/Off White - Móveis Sul é produzido em MDP na escala de brilho Brilhante, e possui um grau de dificuldade de montagem: Médio. Seu revestimento/acabamento é: Brilho e Pintura UV.",
                "Dimensões:<br> Altura: 76cm", "Largura: 84cm", "Comprimento: 45cm",
            ],
            [
                "O(a) Mesa Gamer Ideal para 2 Monitores Me4153 Preto/Azul - Tecno Mobili é produzido em MDP na escala de brilho Fosco, e possui um grau de dificuldade de montagem: Fácil. Seu revestimento/acabamento é: Pintura BP.",
                "Dimensões:<br> Altura: 89,5cm", "Largura: 136cm", "Profundidade: 60cm",
            ],
            [
                "A Mesa para Escritório Tecno Mobili me 4106 com design em l, possui 3 gavetas para organizar os seus pertences, além de oferecer um toque todo especial ao seu ambiente de trabalho ou estudo. Confira!",
                "Dimensões:<br> Altura: 74,5 cm", " Largura: 155,0 cm", "Profundidade: 125,0 cm",
            ],
            [
                "Bonita e versátil, a mesa para computador Dalla Costa desponta por ser uma peça que consegue somar um belo design a um inteligente aproveitamento do espaço. Sua cor neutra é outra vantagem, pois facilita na hora de harmonizar a decoração do ambiente. A mesa para computador Dalla Costa é confeccionada em mdf, com pintura em alto brilho, que dá ainda mais vida ao móvel. A peça dispõe também de rodízios em plástico, que dão mais mobilidade e praticidade na hora da limpeza, por exemplo. A preocupação com a qualidade é constante, começando na chegada da matéria prima e estendendo ao consumidor. Desta forma a Dalla Costa torna-se conhecida em todo o país pela qualidade e beleza dos móveis.",
                "Dimensões:<br> Altura: 78 cm", " Largura: 80 cm", "Profundidade: 45 cm",
            ],
            [
                "Escrivaninha 1 Gaveta Cléo Permóbili CaféTransforme o seu ambiente de estudo ou trabalho com a Escrivaninha Cleo. Ela possui um gavetão, além de tampo com amplo espaço. Aumente sua produtividade, tenha um espaço confortável e adequado para você realizar suas tarefas do dia a dia.",
                "Dimensões:<br> Altura: 76 cm", " Largura: 98 cm", "Profundidade: 46,5 cm",
            ],
            [
                "Produto prático e moderno, pode ser utilizada como mesa de estudos. Possui 1 gaveta com corrediça metálica e 1 porta de abrir com espaço para guardar seus objetos. Um móvel funcional para complementar seu ambiente de quarto ou escritório.",
                "Dimensões:<br> Altura: 76 cm", " Largura: 120 cm", "Profundidade: 46,5 cm",
            ],
            [
                "Para conseguir trabalhar bem é preciso de um canto dedicado a isso, e ele precisa ter tudo o que você necessita, além de ser funcional. Uma Mesa para Escritório é um item obrigatório para desenvolver suas atividades do dia a dia. A Mesa para Escritório ideal precisa ser bastante espaçosa e permitir que todas os seus objetos caibam nela. para isso, o modelo da Tecno Mobili possui três gavetas que ajudam na arrumação e separação de diversos itens. para dar o toque final, os puxadores prateados combinam perfeitamente com a cor carvalho. Preparada para se desenvolver ainda mais, a Tecno Mobili está atenta a novas tecnologias e designs modernos que possam deixar os móveis bonitos e úteis por mais tempo. Mesas para estudo ou trabalho, racks, armários e demais modelos com foco no aproveitamento de espaços fazem parte da expertise da marca.",
                "Dimensões:<br> Altura: 74.5 cm", " Largura: 155 cm", "Profundidade: 60 cm",
            ],
            [
                "Escrivaninha 2 gavetas max zanzini natura/off white. a escrivaninha max é moderna, versátil e harmoniza com vários ambientes, desde um local para estudos até um home office. Ela tem duas gavetas espaçosas com corrediças telescópicas que permite maior amplitude de abertura, tampo e laterais com mdp de 25mm que proporcionam maior resistência e estabilidade. ",
                "Dimensões:<br> Altura: 75 cm", " Largura: 126 cm", "Profundidade: 53 cm",
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