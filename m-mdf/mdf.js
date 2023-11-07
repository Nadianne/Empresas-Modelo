import * as global from './global.js';
global.mdf.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["MDF Placas do Brasil"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([62]);
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
        'Carvalho Caeté 06mm',
        'Carvalho Caeté 15mm',     
        'Cupuaçu 06mm',
        'Cupuaçu 15mm',
        'Freijó 06mm',
        'Freijó 15mm',    
        'Guaraná 06mm',
        'Guaraná 15mm',   
        'Ingá 06mm',
        'Ingá 15mm',
        'Macanaíba 06mm',
        'Macanaíba 15mm',  
        'Nogueira Arroio 06mm',
        'Nogueira Arroio 15mm',    
        'Nogal Terena 06mm',
        'Nogal Terena 15mm',  
        'Vila Velha 06mm',
        'Vila Velha 15mm',  
        'Nogueira Carajás 06mm',
        'Nogueira Carajás 15mm',
        'Pimenta do Reino 06mm',
        'Pimenta do Reino 15mm',
        'Nogueira Goiatacá 06mm',
        'Nogueira Goiatacá 15mm',
        'Nogueira Caiapó 06mm',
        'Nogueira Caiapó 15mm',
        'Tapioca 06mm',
        'Tapioca 15mm',
        'Hortência 06mm',
        'Hortência 15mm',      
        'Alva 06mm',
        'Alva 15mm',
        'Carvalho Arandu 06mm',
        'Carvalho Arandu 15mm',
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
            "Carvalho Caeté<span> 06mm</span>",
            "Carvalho Caeté<span> 15mm</span>",               
            "Cupuaçu<span> 06mm</span>",
            "Cupuaçu<span> 15mm</span>", 
            "Freijó<span> 06mm</span>",
            "Freijó<span> 15mm</span>", 
            "Guaraná<span> 06mm</span>",
            "Guaraná<span> 15mm</span>",
            "Ingá<span> 06mm</span>",
            "Ingá<span> 15mm</span>",       
            "Macanaíba<span> 06mm</span>",
            "Macanaíba<span> 15mm</span>",
            "Nogueira Arroio<span> 06mm</span>",
            "Nogueira Arroio<span> 15mm</span>", 
            "Nogal Terena 06mm",
            "Nogal Terena 15mm ",
            "Vila Velha<span> 06mm</span>",
            "Vila Velha<span> 15mm</span>",  
            "Nogueira Carajás<span> 06mm</span>",
            "Nogueira Carajás<span> 15mm</span>",   
            "Pimenta do Reino<span> 06mm</span>",
            "Pimenta do Reino<span> 15mm</span>",   
            "Nogueira Goiatacá<span> 06mm</span>",
            "Nogueira Goiatacá<span> 15mm</span>",  
            "Nogueira Caiapó<span> 06mm</span>",
            "Nogueira Caiapó<span> 15mm</span>",
            "Tapioca<span> 06mm</span>",
            "Tapioca<span> 15mm</span>",
            "Hortência<span> 06mm</span>",
            "Hortência<span> 15mm</span>",
            "Alva<span> 06mm</span>",
            "Alva<span> 15mm</span>",
            "Carvalho Arandu<span> 06mm</span>",
            "Carvalho Arandu<span> 15mm</span>",

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
            [
                "<br>Os Caetés foram um povo indígena brasileiro, oriundo do estado de Alagoas, no século XVI. Carvalho Caeté, apresenta-se como uma estrutura marcante e extremamente linheira, trazendo na sua tonalidade as madeiras cinzas e versatilidade na sua aplicação horizontal ou vertical. Um padrão para atender aqueles que buscam criar ambientes sofisticados, porém com uma proposta mais atualizada.",
                "","","",
            ],
            [
                "<br>Os Caetés foram um povo indígena brasileiro, oriundo do estado de Alagoas, no século XVI. Carvalho Caeté, apresenta-se como uma estrutura marcante e extremamente linheira, trazendo na sua tonalidade as madeiras cinzas e versatilidade na sua aplicação horizontal ou vertical. Um padrão para atender aqueles que buscam criar ambientes sofisticados, porém com uma proposta mais atualizada.",
                "","","",
            ],
            [
                "<br>Cupuaçu é um fruto originário da Amazônia. Um padrão de tonalidade suave com textura que convida ao toque. Inspirado na tendência e nas estruturas dos tecidos feito à mão, proporciona frescor, leveza e sofisticação. Sua cor clara transmite a sensação de aconchego aos ambientes e móveis.",
                "","","",
            ],
            [
                "<br>Cupuaçu é um fruto originário da Amazônia. Um padrão de tonalidade suave com textura que convida ao toque. Inspirado na tendência e nas estruturas dos tecidos feito à mão, proporciona frescor, leveza e sofisticação. Sua cor clara transmite a sensação de aconchego aos ambientes e móveis.",
                "","","",
            ],
            [
                "<br>Freijó, madeira brasileira de estrutura clássica e tendência memorável em virtude da sua atemporalidade e infinitas composições com outros elementos e cores. Disposição de suaves movimentos, catedrais alongadas, veios enegrecidos e tonalidade variando do mel ao dourado, ideal para trazer a naturalidade da terra para o acabamento. Características tão particulares tornam esse padrão inconfundível e de aposta assertiva.",
                "","","",
            ],
            [
                "<br>Freijó, madeira brasileira de estrutura clássica e tendência memorável em virtude da sua atemporalidade e infinitas composições com outros elementos e cores. Disposição de suaves movimentos, catedrais alongadas, veios enegrecidos e tonalidade variando do mel ao dourado, ideal para trazer a naturalidade da terra para o acabamento. Características tão particulares tornam esse padrão inconfundível e de aposta assertiva.",
                "","","",
            ],
            [
                "<br>O Guaraná é uma fruta típica da Amazônia. Inspirador, aconchegante e inovador, o padrão traz um bege aquecido em uma estrutura de tecido similar ao linho, com a trama um pouco mais aberta e uma pegada artesanal. Um acabamento convidativo e perfeito para utilizar como elemento surpresa nos mobiliários de outros ambientes, além dos dormitórios e closets. ",
                "","","",
            ],
            [
                "<br>O Guaraná é uma fruta típica da Amazônia. Inspirador, aconchegante e inovador, o padrão traz um bege aquecido em uma estrutura de tecido similar ao linho, com a trama um pouco mais aberta e uma pegada artesanal. Um acabamento convidativo e perfeito para utilizar como elemento surpresa nos mobiliários de outros ambientes, além dos dormitórios e closets. ",
                "","","",
            ],
            [
                "<br>É na Floresta Amazônica que se encontra a maior diversidade de espécies do Ingá. O padrão apresenta a delicadeza dos tecidos em uma mescla de tons acinzentados, com sua estrutura similar à lã, sua tonalidade fria traz um equilíbrio com sua rusticidade para o acabamento. Ideal para trazer conforto e aconchego para o ambiente.",
                "","","",
            ],
            [
                "<br>É na Floresta Amazônica que se encontra a maior diversidade de espécies do Ingá. O padrão apresenta a delicadeza dos tecidos em uma mescla de tons acinzentados, com sua estrutura similar à lã, sua tonalidade fria traz um equilíbrio com sua rusticidade para o acabamento. Ideal para trazer conforto e aconchego para o ambiente.",
                "","","",
            ],
            [
                "<br>Uma homenagem a clássica madeira regional do Espírito Santo, a Macanaíba vem de forma ressignificada e afetiva, isso faz com que o padrão fique muito mais leve, convidativo e aconchegante. A suavidade da madeira, com movimento uniforme, segue a tendência das estruturas ricas em detalhes naturais e dos tons escuros com um toque de dourado. Ideal para projetos que a intensão é trazer a nostalgia de forma sucinta. Quando combinado a tons claros e brilhantes, predomina seu lado natural, acolhedor e delicado.",
                "","","",
            ],
            [
                "<br>Uma homenagem a clássica madeira regional do Espírito Santo, a Macanaíba vem de forma ressignificada e afetiva, isso faz com que o padrão fique muito mais leve, convidativo e aconchegante. A suavidade da madeira, com movimento uniforme, segue a tendência das estruturas ricas em detalhes naturais e dos tons escuros com um toque de dourado. Ideal para projetos que a intensão é trazer a nostalgia de forma sucinta. Quando combinado a tons claros e brilhantes, predomina seu lado natural, acolhedor e delicado.",
                "","","",
            ],
            [
                "<br>A Nogueira Arroio trás detalhes e texturas que remetem o suave movimento dos riachos. Tem coloração marrom intenso, o que o torna mais uniforme e versátil, possibilitando seu uso em diversos tipos de acabamentos. Um painel de MDF que alinha no mesmo ambiente uma decoração moderna e sofisticada.",
                "","","",
            ],
            [
                "<br>A Nogueira Arroio trás detalhes e texturas que remetem o suave movimento dos riachos. Tem coloração marrom intenso, o que o torna mais uniforme e versátil, possibilitando seu uso em diversos tipos de acabamentos. Um painel de MDF que alinha no mesmo ambiente uma decoração moderna e sofisticada.",
                "","","",
            ],
            [
                "<br>O padrão Nogal Terena carrega a beleza da lâmina de madeira natural. É um convite à contemplação e à conexão com o primordial, oferecendo amplitude e equilíbrio aos ambientes.",
                "","","",
            ],
            [
                "<br>O padrão Nogal Terena carrega a beleza da lâmina de madeira natural. É um convite à contemplação e à conexão com o primordial, oferecendo amplitude e equilíbrio aos ambientes.",
                "","","",
            ],
            [
                "<br>Desembarcando em Vila Velha, onde inicia-se a colonização do solo espírito santense. O clássico desenho do carvalho com aspecto rústico, porém conectado totalmente com o momento atual que traz na sua coloração a madeira rosada. O padrão jovem, prático e versátil torna-se perfeito para cozinhas, dormitórios e ambientes de interiores, nos quais desejam o efeito de luz e amplitude. Sua tonalidade contrasta suavidade com sofisticação. Uma ótima opção para ambientes clássicos com um toque despojado. ",
                "","","",
            ],
            [
                "<br>Desembarcando em Vila Velha, onde inicia-se a colonização do solo espírito santense. O clássico desenho do carvalho com aspecto rústico, porém conectado totalmente com o momento atual que traz na sua coloração a madeira rosada. O padrão jovem, prático e versátil torna-se perfeito para cozinhas, dormitórios e ambientes de interiores, nos quais desejam o efeito de luz e amplitude. Sua tonalidade contrasta suavidade com sofisticação. Uma ótima opção para ambientes clássicos com um toque despojado. ",
                "","","",
            ],
            [
                "<br>O padrão Nogueira Carajás é inspirado nas belezas da fauna e da flora, e é originalmente extraído da nogueira, prevalecendo seus veios marcantes e catedrais sinuosas de tons terrosos, proporcionando naturalidade e aconchego para o ambiente.",
                "","","",
            ],
            [
                "<br>O padrão Nogueira Carajás é inspirado nas belezas da fauna e da flora, e é originalmente extraído da nogueira, prevalecendo seus veios marcantes e catedrais sinuosas de tons terrosos, proporcionando naturalidade e aconchego para o ambiente.",
                "","","",
            ],
            [
                "<br>A Pimenta do Reino é utilizada desde os tempos mais antigos, dando um sabor picante e apetitoso à comida brasileira. Padrão unicolor atemporal que compõe muito bem com todos os outros acabamentos. O cinza intenso, tem estilo urbano, despojado e contemporâneo. Perfeitamente para projetos com design industrial e jovem.",
                "","","",
            ],
            [
                "<br>A Pimenta do Reino é utilizada desde os tempos mais antigos, dando um sabor picante e apetitoso à comida brasileira. Padrão unicolor atemporal que compõe muito bem com todos os outros acabamentos. O cinza intenso, tem estilo urbano, despojado e contemporâneo. Perfeitamente para projetos com design industrial e jovem.",
                "","","",
            ],
            [
                "<br>Os Goitacazes, foram um grupo indígena brasileiro que habitou a região entre o Rio São Mateus, no atual estado do Espírito Santo e o Rio Paraíba do Sul, no atual estado do Rio de Janeiro, até os fins do século XVIII. Nogueira Goitacá, traz um padrão muito fiel a lâmina da madeira trabalhando perfeitamente a parte sensorial. Os tons de marrom e cinza permitem combinação com toda a paleta. O efeito perolizado e o brancal dão ainda mais naturalidade ao acabamento. ",
                "","","",
            ],
            [
                "<br>Os Goitacazes, foram um grupo indígena brasileiro que habitou a região entre o Rio São Mateus, no atual estado do Espírito Santo e o Rio Paraíba do Sul, no atual estado do Rio de Janeiro, até os fins do século XVIII. Nogueira Goitacá, traz um padrão muito fiel a lâmina da madeira trabalhando perfeitamente a parte sensorial. Os tons de marrom e cinza permitem combinação com toda a paleta. O efeito perolizado e o brancal dão ainda mais naturalidade ao acabamento. ",
                "","","",
            ],
            [
                "<br>Os Caiapós são índios, que vivem em uma extensa área localizada nos estados do Mato Grosso e do Pará, ao longo dos afluentes do rio Xingu. Nogueira Caiapó, remete a busca pelo essencial, uma diferenciação em relação às tendências sazonais e de curta duração. De tonalidade amendoada, busca ressaltar a naturalidade da madeira com nuances de catedrais e detalhes da estrutura linheira. A aparência autêntica desta nogueira, que assume uma posição mais discreta, mas com um reﬁnamento despojado garantindo seu encanto.",
                "","","",
            ],
            [
                "<br>Os Caiapós são índios, que vivem em uma extensa área localizada nos estados do Mato Grosso e do Pará, ao longo dos afluentes do rio Xingu. Nogueira Caiapó, remete a busca pelo essencial, uma diferenciação em relação às tendências sazonais e de curta duração. De tonalidade amendoada, busca ressaltar a naturalidade da madeira com nuances de catedrais e detalhes da estrutura linheira. A aparência autêntica desta nogueira, que assume uma posição mais discreta, mas com um reﬁnamento despojado garantindo seu encanto.",
                "","","",
            ],
            [
                "<br>Herança indígena, a tapioca é base de alguns dos mais famosos quitutes do receituário nacional. O padrão Tapioca, traz o branco na textura tear, deixando esse acabamento muito mais convidativo, confortável e aconchegante. O efeito sensorial agrega mais versatilidade aos projetos de pegada clean e minimalista.",
                "","","",
            ],
            [
                "<br>Herança indígena, a tapioca é base de alguns dos mais famosos quitutes do receituário nacional. O padrão Tapioca, traz o branco na textura tear, deixando esse acabamento muito mais convidativo, confortável e aconchegante. O efeito sensorial agrega mais versatilidade aos projetos de pegada clean e minimalista.",
                "","","",
            ],
            [
                "<br>A hortênsia traz um significado muito importante, simbolizando devoção, dignidade e pureza de sentimento. Reflete a valorização de um estilo de vida mais simplificado, transmitindo paz e harmonia.",
                "","","",
            ],
            [
                "<br>A hortênsia traz um significado muito importante, simbolizando devoção, dignidade e pureza de sentimento. Reflete a valorização de um estilo de vida mais simplificado, transmitindo paz e harmonia.",
                "","","",
            ],
            [
                "<br>Alva, a primeira luz do dia. Momento em que o sol nasce no horizonte, que celebra o despertar. A cada alva uma nova oportunidade de ser feliz. Iluminando e energizando a atmosfera dos projetos.",
                "","","",
            ],
            [
                "<br>Alva, a primeira luz do dia. Momento em que o sol nasce no horizonte, que celebra o despertar. A cada alva uma nova oportunidade de ser feliz. Iluminando e energizando a atmosfera dos projetos.",
                "","","",
            ],
            [
                "<br>Atendendo aos anseios naturais, Carvalho Arandu traz boas vibrações, leveza e atemporalidade. Sua suavidade explora a elegância das madeiras finas em tonalidade clara.",
                "","","",
            ],
            [
                "<br>Atendendo aos anseios naturais, Carvalho Arandu traz boas vibrações, leveza e atemporalidade. Sua suavidade explora a elegância das madeiras finas em tonalidade clara.",
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