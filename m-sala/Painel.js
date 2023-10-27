import * as global from './global.js';
global.Painel.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Painel"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([14]);
    global.setImgAllPath(["../imagens-moveis/Painel/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Painel para TV até 52 polegadas',
        'Painel para TV até 43 polegadas',
        'Painel Para Tv Até 55 Polegadas',
        'Painel para TV até 65 Polegadas',
        'Painel Para Tv até 55 Polegadas',
        'Painel Para TV Até 42 Polegadas',
        'Painel Para TV Até 46 Polegadas',
        'Painel para TV até 49 Polegadas',
        'Painel para TV até 50 Polegadas',
        'Painel para TV até 60 Polegadas',
        'Painel para TV até 55 Polegadas',
        'Painel para TV até 65 Polegadas',
        'Painel para TV até 70 Polegadas',
        'Painel para TV até 70 Polegadas',

        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Painel para TV até 52' <span>Caraiva Off White e Freijó - Avelan Móveis</span>",
            "Painel para TV até 43' <span>Sabrina</span>",
            "Painel Para Tv Até 55' <span>Vênus</span>",
            "Painel para TV até 65' <span>Essence</span>",
            "Painel Para TV Até 55' <span>EDN </span>",
            "Painel Para TV Até 42' <span>FOX </span>",
            "Painel Para TV Até 46' <span>Torino </span>",
            "Painel para TV até 49' <span>Zanzini </span>",
            "Painel para TV até 49' + bancada <span>Zanzini </span>",
            "Painel para TV até 60'<span>Fabuloso </span> ",
            "Painel para TV até 55'<span>Vitória </span> ",
            "Painel para TV até 65'<span>Leoni </span> ",
            "Painel para TV até 70'<span>Marin </span> ",
            "Painel para TV até 70'<span>Treviso </span> ",

        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Que tal o Painel Caraiva?Para incrementar a sua sala de estar, nada melhor que o Painel Caraiva. Com tamanho ideal para receber uma TV de até 52 polegadas, ele deixa o aparelho na altura ideal para você e sua família sentarem no sofá e curtirem filmes e séries com mais comodidade e aconchego. Toda essa funcionalidade é somada ao design que combina coloração sóbria e acabamento amadeirado, simples de hBraçoonizar com qualquer estilo de decoração e dá um toque elegante ao ambiente. ",
                "Dimensões:<br> Altura: 200,00cm", "Largura: 180,00cm", "Peso do Produto: 76,36 Kg",
            ],
            [
                "Painel Suspenso Tuboarte Flávia para TVs de até 43' é a escolha perfeita para deixar seu ambiente completo e sofisticado! Fabricado em 100% MDF possui dois nichos com um amplo espaço para você dispor os aparelhos eletrônicos e decorações. E com tampo com efeito flutuante que traz ainda mais modernidade para o ambiente! Pode chamar a família toda e preparar a pipoca, a próxima sessão de filmes é por sua conta!",
                "Dimensões:<br> Altura: 90cm", "Largura: 120cm", "Profundidade: 33,20cm",
            ],
            [
                " Painel Suspenso Vênus com 1,36m é perfeito para sua sala de TV, seu design traz elegância e modernidade! Com espaço para TV de até 55 polegadas, e uma ampla prateleira para objetos de decoração, tem como diferencial sua prateleira versátil podendo ser usada tanto em cima quando abaixo da sua tv, ou se preferir otimizar espaço pode ser usado somente painel, proporciona um ambiente mais aconchegante para suas horas de descanso e de lazer com a família e amigos.",
                "Dimensões:<br> Altura:  108 cm", "Largura: 136 cm ", "Profundidade: 18 cm",
            ],
            [
                "OPainel para TV até 65 polegadas Sala de Estar Essence Nature/Off White - Frade Movelaria tem um design excepcional, sua estrutura é desenvolvida com matéria-prima de alta qualidade e durabilidade, com porta basculante que facilita a abertura com leveza e maciez, além disso, oferece espaços para itens decorativos e eletrônicos. Sua sala de estar vai ganhar um visual gracioso com a presença deste Painel Home Suspenso Essence",
                "Dimensões:<br> Altura: 150cm", "Largura: 180cm", "Profundidade: 34cm",
            ],
            [
                "O Painel Para TV 55 Polegadas 140cm Davos Edn é o móvel perfeito para acomodar sua televisão com estilo e praticidade. Com sua cor preto/cedro, ele se destaca como um elemento elegante e moderno na decoração da sua sala. Com uma profundidade de 26 cm e altura de 108 cm, ele oferece espaço suficiente para acomodar sua TV de até 55 polegadas com segurança.",
                "Dimensões:<br> Altura: 108cm", "Largura: 140cm", "Profundidade: 26cm",
            ],
            [
                "O Painel Fox New é o móvel que você procura para completar sua casa! Com seu design elegante, irá agregar muito mais charme e requinte ao seu ambiente. O painel possui espaço para TV de até 42 polegadas e nichos espaçosos para aparelhos eletrônicos, objetos de decoração. Perfeito para incrementar o ambiente e dar aquele toque especial.",
                "Dimensões:<br> Altura: 86cm", "Largura: 120cm", "Profundidade: 22cm",
            ],
            [
                "Painel tv 46 polegadas torino ll edn móveis o painel torino é o modelo ideal para você adicionar na decoração tanto da sua sala quanto do seu quarto, ou até mesmo naquela área de lazer onde você e os seus amigos se reúnem. o painel torino suporta tv de até 46 polegadas, possui sua estrutura em mdp, garantindo a durabilidade do seu móvel. Ele ainda conta com a tecnologia de acabamento em pintura uv, aumentando a resistência contra mofos. ",
                "Dimensões:<br> Altura: 160cm", "Largura: 120cm", "Profundidade: 28cm",
            ],
            [
                "O Painel New Clean proporciona beleza e modernidade ao ambiente. Ideal para tvs de até 49', contém três prateleiras com 25mm de espessura. Sofisticação e elegância para acomodar os aparelhos eletrônicos e expor os objetos de decoração deixando a sala ainda mais bonita e aconchegante. Fabricado com painéis de madeira reflorestada e certificada, garante a qualidade do produto e responsabilidade com nosso planeta",
                "Dimensões:<br> Altura: 90cm", "Largura: 160cm", "Profundidade: 28cm",
            ],
            [
                "Um conjunto dos sonhos. Linda solução para valorizar ainda mais a sala de estar",
                "Dimensões Rack montado:<br> Altura:  635 mm", "Largura: 1600 mm", "Profundidade: 1600 mm <br><br>  Dimensões do Painel montado: <br> Altura: 1160 mm<br>Largura: 1600 mm<br>Profundidade: 180 mm",
            ],
            [
                "Decore sua sala com charme e elegância utilizando o Home Suspenso Fabuloso. Com espaço para TV de até 60' ele também conta com duas prateleiras de 25mm para acomodar seus objetos de decoração e aparelhos eletrônicos, mais dois nichos fechados com portas basculantes, proporcionando ambiente ideal ",
                "Dimensões:<br> Altura:  183 cm", "Largura: 160 cm", "Profundidade: 38,7 cm ",
            ],
            [
                "Painel vitória 1,80m para TV 55O painel Vitória suporta TV de até 55 e possui detalhes que irão valorizar seu ambiente. O efeito da iluminação fica por conta do LED embutido na prateleira superior. Seu acionamento é feito através de interruptor pontual que é discreto e de fácil acesso.",
                "Dimensões:<br> Altura:  145 cm", "Largura: 180 cm", "Profundidade: 32 cm ",
            ],
            [
                "O Painel para TV até 65 Polegadas Leoni, foi desenvolvido para quem deseja deixar um estilo lindo e único em seu ambiente. Possui espaço para aparelhos eletrônicos, porta-retratos e enfeites. Possui também porta basculante para melhor organização de seus pertences, e ainda conta com pés de madeira maciça e um design incrível que complementam sua forma simples e elegante.",
                "Dimensões:<br> Altura:  70 cm", "Largura: 1,16 m", "Profundidade: 35 cm ",
            ],
            [
                "Procurando móveis para deixar sua Sala de Estar mais elegante? Apresentamos Painel para TV Bergamo na cor Griz Carvalho Nobre fabricado pela DJ Móveis, este lindo Painel para TV proporciona a você e sua família ótimos momentos para assistir filmes e séries suporta TV de até 55 polegadas, além de possuir amplo espaço para organizar seus objetos decorativos e aparelhos eletrônicos, não deixe esta oportunidade passar e peça já o seu. ",
                "Dimensões:<br> Altura:  154 cm", "Largura: 160 cm", "Profundidade: 32 cm ",
            ],
            [
                "O Painel Treviso é um produto que vai ser o destaque da sua sala de estar, com uma estética contemporânea e muito elegante. O painel central conta com charmosos cantos arredondados e iluminação em fitas de LED, que destacam os detalhes ripados atrás do painel central, sendo que este abriga TV's de até 70', garantindo o melhor do entretenimento para sua família. ",
                "Dimensões:<br> Altura:  180 cm", "Largura: 210 cm", "Profundidade: 32,5 cm ",
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