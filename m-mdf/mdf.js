import * as global from './global.js';
global.mdf.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["mdf"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([28]);
    global.setImgAllPath(["../imagens-industria/mdf/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Áurea Imperial 06mm',
        'Áurea Imperial 15mm',
        'Café torrado 06mm',
        'Café torrado 15mm',
        'Caravela 06mm',
        'Caravela 15mm',
        'Pitanga 06mm',
        'Pitanga 15mm',
        'Carvalho Aicanã 06mm',
        'Carvalho Aicanã 15mm', 
        'Carvalho Tupi 06mm',
        'Carvalho Tupi 15mm', 
        'Vitória-Régia 06mm',
        'Vitória-Régia 15mm',
        'Samba 06mm',
        'Samba 15mm',
        'Castanha Caju 06mm',
        'Castanha Caju 15mm',
        'Congo Capixaba 06mm',
        'Congo Capixaba 15mm',
        'Jacarandá 06mm',
        'Jacarandá 15mm', 
        'Tropicália 06mm',
        'Tropicália 15mm',
        'Elmo Aracruz 06mm',
        'Elmo Aracruz 15mm',    
        'Elmo Palmares 06mm',
        'Elmo Palmares 15mm',
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
            "Pitanga<span> 06mm</span>",
            "Pitanga<span> 06mm</span>",
            "Carvalho Aicanã<span> 06mm</span>",
            "Carvalho Aicanã<span> 15mm</span>",
            "Carvalho Tupi<span> 06mm</span>",
            "Carvalho Tupi<span> 15mm</span>",
            "Vitória-Régia<span> 06mm</span>",
            "Vitória-Régia<span> 15mm</span>",   
            "Samba<span> 06mm</span>",
            "Samba<span> 15mm</span>",
            "Castanha de Cajua<span> 06mm</span>",
            "Castanha de Caju<span> 15mm</span>",    
            "Congo Capixaba<span> 06mm</span>",
            "Congo Capixaba<span> 15mm</span>",    
            "Jacarandá<span> 06mm</span>",
            "Jacarandá<span> 15mm</span>",              
            "Tropicália<span> 06mm</span>",
            "Tropicália<span> 15mm</span>", 
            "Elmo Aracruz<span> 06mm</span>",
            "Elmo Aracruz<span> 15mm</span>",           
            "Elmo Palmares<span> 06mm</span>",
            "Elmo Palmares<span> 15mm</span>",    

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
                "Uma fruta nativa brasileira, de sabor agradável, que varia entre o doce e o adstringente: a Pitanga. Um rose adulto e empoderado com efeito perlucente, proporciona um aspecto de cor quente, elegante e com um toque de delicadeza e ousadia. Discreto e com personalidade que incorpora uma proposta de não rotular gênero e idade a cor. O padrão combina com qualquer espaço que tenha uma proposta mais sofisticada, contemporânea e divertida.",
                "","","",
            ],
            [
                "Uma fruta nativa brasileira, de sabor agradável, que varia entre o doce e o adstringente: a Pitanga. Um rose adulto e empoderado com efeito perlucente, proporciona um aspecto de cor quente, elegante e com um toque de delicadeza e ousadia. Discreto e com personalidade que incorpora uma proposta de não rotular gênero e idade a cor. O padrão combina com qualquer espaço que tenha uma proposta mais sofisticada, contemporânea e divertida.",
                "","","",
            ],
            [
                "Carvalho Aicanã, um padrão atemporal de madeira branca com suaves catedrais e detalhes da estrutura linheira, permite a criação de móveis e ambientes claros, com personalidade e distinção.",
                "","","",
            ],
            [
                "Carvalho Aicanã, um padrão atemporal de madeira branca com suaves catedrais e detalhes da estrutura linheira, permite a criação de móveis e ambientes claros, com personalidade e distinção.",
                "","","",
            ],
            [
                "O padrão traz a força, beleza e intensidade da tribo indígena.  Um carvalho bem natural com veios perfeitamente desenhados. Carvalho Tupi, alia modernidade ao clássico com detalhes que dão realismo ao padrão. Inspirado nas florestas negras, este acabamento é extremamente elegante, sofisticado e intenso. Harmoniza categoricamente com projetos de alto luxo e glamorosos.",
                "","","",
            ],
            [
                "O padrão traz a força, beleza e intensidade da tribo indígena.  Um carvalho bem natural com veios perfeitamente desenhados. Carvalho Tupi, alia modernidade ao clássico com detalhes que dão realismo ao padrão. Inspirado nas florestas negras, este acabamento é extremamente elegante, sofisticado e intenso. Harmoniza categoricamente com projetos de alto luxo e glamorosos.",
                "","","",
            ],
            [
                "<br>Lendária e nativa da região amazônica, uma das maiores plantas aquáticas do mundo e comestível. Com um aspecto exuberante e ornamental, Vitória-Régia traz a delicadeza e o frescor da coloração pistache, um verde claro acinzentado de tonalidade vintage e natural. A proposta do padrão é oferecer leveza e suavidade a casa, transformando o ambiente em um refúgio convidativo e agradável. Uma aposta de tonalidade tendenciosa para os dias atuais e próximos anos.",
                "","","",
            ],
            [
                "<br>Lendária e nativa da região amazônica, uma das maiores plantas aquáticas do mundo e comestível. Com um aspecto exuberante e ornamental, Vitória-Régia traz a delicadeza e o frescor da coloração pistache, um verde claro acinzentado de tonalidade vintage e natural. A proposta do padrão é oferecer leveza e suavidade a casa, transformando o ambiente em um refúgio convidativo e agradável. Uma aposta de tonalidade tendenciosa para os dias atuais e próximos anos.",
                "","","",
            ],
            [
                "<br>O Samba é considerado um dos elementos mais representativos da cultura popular do Brasil. A interpretação do aço corten no painel de MDF com uma alusão ao bronzeado e o dourado da mulata brasileira e a superfície com o efeito perlucente gera uma proposta metalizada as quais transmitem com perfeição o brilho do metal. Ideal para quem deseja criar um projeto despojado e moderno.",
                "","","",
            ],
            [
                "<br>O Samba é considerado um dos elementos mais representativos da cultura popular do Brasil. A interpretação do aço corten no painel de MDF com uma alusão ao bronzeado e o dourado da mulata brasileira e a superfície com o efeito perlucente gera uma proposta metalizada as quais transmitem com perfeição o brilho do metal. Ideal para quem deseja criar um projeto despojado e moderno.",
                "","","",
            ],
            [
                "<br>De aparência exótica e sabor singular, a Castanha de Caju é perfeita para enriquecer e diversificar pratos da culinária tropical. Padrão de tonalidade neutra encanta pela leveza e a possibilidade infinita de combinações. Sua textura única remete ao delicado toque do tecido e valoriza peças de mobiliário com desenho e acabamentos impecáveis. Cor extremamente versátil, discreta e elegante.",
                "","","",
            ],
            [
                "<br>De aparência exótica e sabor singular, a Castanha de Caju é perfeita para enriquecer e diversificar pratos da culinária tropical. Padrão de tonalidade neutra encanta pela leveza e a possibilidade infinita de combinações. Sua textura única remete ao delicado toque do tecido e valoriza peças de mobiliário com desenho e acabamentos impecáveis. Cor extremamente versátil, discreta e elegante.",
                "","","",
            ],
            [
                "<br>O Congo Capixaba é um gênero musical nascido no Espírito Santo. O ritmo vem dos tambores, cuícas e casacas. O padrão traz a originalidade do cimento queimado, alinhado ao estilo urbano e industrial, garantindo um visual contemporâneo ao ambiente. A Estrutura do concreto é versátil, rica em nuances, permitindo composições elegantes e despojadas com diferentes elementos.",
                "","","",
            ],
            [
                "<br>O Congo Capixaba é um gênero musical nascido no Espírito Santo. O ritmo vem dos tambores, cuícas e casacas. O padrão traz a originalidade do cimento queimado, alinhado ao estilo urbano e industrial, garantindo um visual contemporâneo ao ambiente. A Estrutura do concreto é versátil, rica em nuances, permitindo composições elegantes e despojadas com diferentes elementos.",
                "","","",
            ],
            [
                "<br>De uso generalizado no mobiliário do barroco brasileiro e bastante marcante nos móveis dos anos 60. O Jacarandá, vem de forma leve e ressignificada, perdendo um pouco sua seriedade e ganhando versatilidade. Um padrão clássico, sóbrio e de tonalidade terrosa suavemente avermelhada, que mesmo sozinho garante um clima nostálgico e elegante",
                "","","",
            ],
            [
                "<br>De uso generalizado no mobiliário do barroco brasileiro e bastante marcante nos móveis dos anos 60. O Jacarandá, vem de forma leve e ressignificada, perdendo um pouco sua seriedade e ganhando versatilidade. Um padrão clássico, sóbrio e de tonalidade terrosa suavemente avermelhada, que mesmo sozinho garante um clima nostálgico e elegante",
                "","","",
            ],
            [
                "<br>Os padrões de rochas naturais estão em alta permitindo versatilidade na aplicação em painéis, tampos, portas e corpo dos móveis. Tropicália, traz a sofisticação do mármore capixaba contrastando a tonalidade do cinza com o terroso entre veios brancos e rosados de forma harmônica e elegante. Uma composição assertiva para quem quer trazer um acabamento natural, clássico e contemporâneo para o ambiente.",
                "","","",
            ],
            [
                "<br>Os padrões de rochas naturais estão em alta permitindo versatilidade na aplicação em painéis, tampos, portas e corpo dos móveis. Tropicália, traz a sofisticação do mármore capixaba contrastando a tonalidade do cinza com o terroso entre veios brancos e rosados de forma harmônica e elegante. Uma composição assertiva para quem quer trazer um acabamento natural, clássico e contemporâneo para o ambiente.",
                "","","",
            ],
            [
                "<br>Aracruz é o único município capixaba que possui índios aldeados. Com a suavidade da madeira clara e uma estrutura extremamente linheira, o padrão Elmo Aracruz, oferece leveza, versatilidade e proporciona amplitude aos ambientes com a força e a beleza das tribos indígenas. Seu acabamento delicado e com um toque sutil de rose é perfeito para ambientes de estilos provençal e romântico.",
                "","","",
            ],
            [
                "<br>Aracruz é o único município capixaba que possui índios aldeados. Com a suavidade da madeira clara e uma estrutura extremamente linheira, o padrão Elmo Aracruz, oferece leveza, versatilidade e proporciona amplitude aos ambientes com a força e a beleza das tribos indígenas. Seu acabamento delicado e com um toque sutil de rose é perfeito para ambientes de estilos provençal e romântico.",
                "","","",
            ],
            [
                "<br>O Quilombo dos Palmares é considerado o maior símbolo de resistência contra a escravidão no Brasil. Elmo Palmares, um padrão madeirado de tonalidade clara e agradável que possui veios marcados proporcionando discrição e autenticidade ao mobiliário. Extremamente versátil e atemporal se encaixa perfeitamente dentro do nicho de padrões essencial.",
                "","","",
            ],
            [
                "<br>O Quilombo dos Palmares é considerado o maior símbolo de resistência contra a escravidão no Brasil. Elmo Palmares, um padrão madeirado de tonalidade clara e agradável que possui veios marcados proporcionando discrição e autenticidade ao mobiliário. Extremamente versátil e atemporal se encaixa perfeitamente dentro do nicho de padrões essencial.",
                "","","",
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