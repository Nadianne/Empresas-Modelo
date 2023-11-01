import * as global from './global.js';
global.KitCozinha.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Kit Cozinha"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([15]);
    global.setImgAllPath(["../imagens-moveis/kit/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Armário De Cozinha 8 Portas  ',
        'Cozinha Compacta 6 Portas',
        'Cozinha Kits Paraná 12 Portas com 4 Prateleiras',
        'Cozinha intense compacta 10 portas',
        'Cozinha Modulada 05 Peças Freijó Off White',
        'Cozinha Completa Ferrara Nogueira',
        'Cozinha Modulada MGM Freijó/Off White',
        'Cozinha Modulada 10 Portas Kits Paraná',
        'Cozinha Compacta 6 Portas Poquema',
        'Armário de Cozinha 8 Portas',
        'Armário De Cozinha Freijó Gris ',
        'Cozinha Urbane Kits Paraná',
        'Armário De Cozinha Completa 10 Portas',
        'Cozinha Compacta 8 Portas Poquema',
        'Kit para Cozinha Barbara Capuccino'
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Armário De Cozinha 8 Portas <span>2 Gavetas 1 Nicho </span>",
            "Cozinha Compacta 6 Portas <span>Sabrina</span>",
            "Cozinha Kits Paraná <span>Versalhes</span>",
            "Cozinha intense compacta <span> 10 portas</span>",
            "Cozinha Modulada 05 Peças <span>Freijó Off White</span>",
            "Cozinha completa <span>Ferrara Nogueira / Off White</span>",
            "Cozinha Modulada MGM Divina <span>Freijó/Off White</span>",
            "Cozinha Modulada 10 Portas <span>Kits Paraná</span>",
            "Cozinha Compacta 6 Portas <span>Poquema</span>",
            "Armário de Cozinha 8 Portas <span>Kits Paraná</span>",
            "Armário De Cozinha Freijó Gris <span>6 Portas 1 Gaveta</span>",
            "Cozinha Urbane <span>Kits Paraná</span>",
            "Armário De Cozinha Completa 10 Portas <span>Freijó/vanilla</span>",
            "Cozinha Compacta 8 Portas 1 Gaveta <span>Coral Poquema</span>",
            "Kit para Cozinha Barbara Capuccino <span>Poquema</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Armário de cozinha 8 portas 2 gavetas 1 nicho para forno bruna angelin/off white. Kit cozinha bruna possui nicho superior, adega arramada para dar um toque de beleza e praticidade para acomodar seus vinhos. ",
                "Dimensões:<br> Altura: 200,00cm", "Largura: 180,00cm", "Peso do Produto: 76,36 Kg",
            ],
            [
                "Para que você mantenha seu produto sempre em ótimo estado, recomendamos que use apenas um pano seco ou levemente umedecido, sem o uso de quaisquer produtos abrasivos.",
                "Dimensões:<br> Altura: 200,00cm", "Largura: 146,50cm", "Profundidade: 43,00cm",
            ],
            [
                "A Cozinha e Balcao Versalhes trazem a praticidade e funcionalidade que voce precisa, suas portas superiores se tornam o diferencial do produto pelo vidro espelhado, trazendo o destaque para a cozinha.",
                "Dimensões:<br> Altura: 193,00cm", "Largura: 250,7cm", "Profundidade: 42,3cm",
            ],
            [
                "O Armário de Cozinha Intense, amplo e versátil veio para garantir praticidade em seu dia a dia! Possui 10 portas e 2 gavetas espaçosas com corrediças telescópicas que oferecem um deslizar suave das gavetas.",
                "Dimensões:<br> Altura: 204,5cm", "Largura: 222,2cm", "Profundidade: 46,8cm",
            ],
            [
                "Acabamento em Pintura uv. 09 Portas com dobradiças de amortecimento sendo 02 com pistão à gás e 02 com detalhes frisados. 02 Gavetas com corrediças telescópicas. Prateleiras internas e nichos com amplo espaço. 01 Nicho para eletrodoméstico. Pés e puxadores de plástico. Bancada Gourmet",
                "Dimensões:<br> Altura: 224 cm", "Largura: 270 cm", "Profundidade: 47 cm",
            ],
            [
                "Cozinha Ferrara traz a tona todo o conceito de amplitude e organização para o ambiente, amplas repartições e nichos compõe a peças para melhor dispor de objetos e afins, contém também espaço para forno ou micro, trazendo a praticidade de ter tudo em um só produto. Além de respeitar o meio ambiente a cozinha Ferrara vem com o acabamento com pintura fosca e textura sensível ao toque.",
                "Dimensões:<br> Altura: 198 cm", "Largura: 180,2 cm", "Profundidade: 38,8 cm",
            ],
            [
                "Elegante, sofisticada e moderna. Sua cozinha vai ficar super charmosa com a cozinha Modulada Divina da MGM! Ela é feita com a melhor qualidade em 100% MDF e possui puxadores em ABS na cor gold.",
                "Dimensões:<br> Altura: 224 cm", "Largura: 427 cm", "Profundidade: 47 cm",
            ],
            [
                "Elegante, sofisticada e moderna. Sua cozinha vai ficar super charmosa com a cozinha Modulada Divina da MGM! Ela é feita com a melhor qualidade em 100% MDF e possui puxadores em ABS na cor gold.",
                "Dimensões:<br> Altura: 217 cm", "Largura: 320 cm", "Profundidade: 53,3 cm",
            ],
            [
                "A cozinha compacta coral vai se enquadrar perfeitamente na composição do seu ambiente, com 6 portas e 1 gaveta para trazer funcionalidade junto com um toque moderno. Estruturada em mdp com acabamento em pintura uv. características: estrutura em mdp pintura uv 6 portas 1 gaveta corrediças metálicas.",
                "Dimensões:<br> Altura: 172 cm", "Largura: 90 cm", "Profundidade: 35 cm",
            ],
            [
                "Sua cozinha merece mais espaço e organização. O Armário Compacto 8 Portas Golden é ideal para ajudar nesta tarefa. Produzido em MDP, madeira reconstituída retirada de reservas manejadas é ecologicamente correto. Com suas oito portas sendo duas das portas com vidros é sem dúvida muito espaço para os utensílios da cozinha. Conta ainda com duas amplas gavetas. Lembrando que as corrediças e dobradiças são 100% metálicas para um abrir e fechar de portas e gavetas macio e com muita segurança. O espaço interno é bem distribuído com prateleiras",
                "Dimensões:<br> Altura: 173.5cm", "Largura: 121.4cm", "Profundidade: 36.3cm",
            ],
            [
                "Esse Magnifico Armário irá se tornar o charme da sua cozinha, seu design diferenciado. Dispõe nicho superior que pode ser utilizado para decoração, 6 portas todas com dobradiças metálicas, 1 gaveta e um grande espaço para acomodar micro-ondas ou forno elétrico. Puxadores em ergonômico plástico metalizado, Pés reguláveis em plástico resistente, Acabamento em pintura fosca e textura. Aproveite e Leve para a sua casa!",
                "Dimensões:<br> Altura: 176 cm ", "Largura: 121,5 cm", "Profundidade: 36.3cm",
            ],
            [
                "A cozinha urbane é um exemplo de elegância e sofisticação na decoração de cozinhas. Seus armários superiores recuados são um dos seus principais diferenciais, com tendência de design para mobiliários de alto padrão, esses armários apresentam portas sem puxadores, com sistema de abertura avançado, onde as portas são maiores que a estrutura do armário, garantindo uma abertura confortável e um visual mais clean ao mobiliário da cozinha, outro diferencial dessa cozinha é o módulo especial para forno elétrico ou microondas, com portas superiores que oferecem amplo espaço interno. Além disso, abaixo do forno elétrico ou microondas, o módulo inferior possui espaço ainda maior, com capacidade para guardar todos os utensílios que o cliente precisa para o dia a dia na cozinha. ",
                "Dimensões:<br> Altura: 217 cm", "Largura: 260 cm", "Profundidade: 31,3 cm",
            ],
            [
                "O Armário de Cozinha Intense, amplo e versátil, foi projetado para garantir praticidade no seu dia a dia! Possui 10 portas e 2 gavetas espaçosas com corrediças telescópicas que oferecem um deslizar suave das gavetas.",
                "Dimensões:<br> Altura: 204,5 cm", "Largura: 222,2 cm", "Profundidade: 46,8 cm",
            ],
            [
                "A cozinha compacta coral contém 8 portas e 1 gaveta para se enquadrar perfeitamente no seu ambiente. Com sua estrutura em mdp e acabamento em pintura uv trás funcionalidade e modernidade para a sua cozinha. características: estrutura em mdp pintura uv 8 portas 1 gaveta corrediças.",
                "Dimensões:<br> Altura: 172 cm", "Largura: 120 cm", "Profundidade: 35 cm",
            ],
            [
                "Chegou a hora de inovar sua cozinha e procura por armários de qualidade e com preços baixos, aqui você encontra. Apresentamos o Kit para Cozinha da linha Barbara desenvolvida pela Poquema pensando em você que não tem muito espaço, mas não abre mão da organização e modernidade, conta com lindo design na cor Capuccino Off White, amplo espaço interno com repartições para melhor organizar seus utensílios, fabricado com materiais de ótimas qualidades proporcionando maior durabilidade ao móvel.",
                "Dimensões:<br> Altura: 1830 mm", "Largura: 1600 mm", "Profundidade: 400 mm",
            ],
        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias([]);
    if (this.checked) {
        global.setChecked(global.labelFruteira);
    }
});