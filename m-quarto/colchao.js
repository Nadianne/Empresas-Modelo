import * as global from './global.js';
global.Colchão.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Colchão","Colchão de Solteiro", "Colchão para berço"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([8,7,2]);
    global.setImgAllPath(["../imagens-moveis/colchao/casal/","../imagens-moveis/colchao/solteiro/","../imagens-moveis/colchao/berco/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Colchão Casal Ortopédico',
        'Colchão Casal Viscomemory',
        'Colchão Ortobom Freedom',
        'Colchão Gold Ultra Gel Ortobom',
        'Colchão Exclusive Casal Ortobom',
        'Colchão Elegant Superpocket Ortobom',
        'Colchão Gold Ultra Gel Casal',
        'Colchão Light Superpocket Ortobom',
        
    ],
    [
        'Colchão Solteiro Ortobom ',
        'Colchão Solteiro de Mola',
        'Colchão Solteiro Ortobom ',
        'Colchão Solteiro Ortobom',
        'Colchão Solteiro Ortobom',
        'Colchão Solteiro Light Ortobom ',
        'Colchão Solteiro Espuma Ortobom'
        
    ],
    [
        'Colchão Baby Physical ',
        'Colchão Ortobom Baby',
        
    ],
   
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Colchão Casal <span>Ortopédico Ortobom </span>",
            "Colchão Casal <span>com Espuma</span>",
            "Colchão Ortobom <span>Freedom</span>",
            "Colchão Gold <span>Ultra Gel</span>",
            "Colchão Exclusive Casal <span>Ortobom</span>",
            "Colchão Elegant Superpocket <span>Ortobom</span>",
            "Colchão Gold Ultra Gel Casal <span>Ortobom</span>",
            "Colchão Light Superpocket <span>Ortobom</span>",
        ],
        [
            "Colchão Solteiro Ortobom <span>Nanolastic Elegant</span>",
            "Colchão Solteiro Ortobom de Mola <span> Light Elegant Superpocket</span>",
            "Colchão Solteiro Ortobom <span>Cannes Espuma</span>",
            "Colchão Solteiro Ortobom <span> Light Saúde Liso</span>",
            "Colchão Solteiro Ortobom <span>Light Espuma D45 Até 120kg</span>",
            "Colchão Solteiro Light  <span>Ortobom</span> ",
            "Colchão Solteiro Espuma <span>Ortobom</span> "
        ],
        [
            "Colchão Solteiro Ortobom <span>Nanolastic Elegant</span>",
            "Colchão Ortobom Baby <span> Light Espuma </span>",
        ],
    
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Tecido com tratamento Aloe Vera aplicado nas fibras do tecido auxilia no processo de hidratação da pele, estimulando o crescimento de novas células de pele e removendo as células mortas, além de se composto de bálsamos e umidificantes.",
                "Dimensões:<br> Altura:0,27m", "Largura:1,38m", "Comprimento: 1,88m",
            ],
            [
                " Que tal o Colchão Viscomemory?Uma boa cama só está completa se você escolher o colchão certo para os seus momentos relax - e ele precisa ser certeiro para que o seu corpo se adapte de forma plena!",
                "Dimensões:<br> Altura: 28cm", "Largura: 138cm", "Profundidade: 188cm",
            ],
            [
                " Ortobom Freedom tem sua estrutura composta por Molas Superpocket ensacadas individualmente, que fazem o peso de um corpo não interferir no conforto do outro.",
                "Dimensões:<br> Altura: 0,32m", "Largura: 1,38m", "Profundidade: 1,88m",
            ],
            [
                "Ultra Gel é o representante Super Premium dentre os produtos Ortobom. Sua estrutura é composta pelo molejo Superpocket (ensacadas individualmente) que fazem o peso de um corpo não interferir no conforto do outro.",
                "Dimensões:<br> Altura: 32cm", "Largura: 138cm", "Profundidade:  188cm",
            ],
            [
                "Novo Colchão Exclusive é um clássico entre os colchões de mola, sua estrutura é composta pelo avançado molejo Nanolastic que possui a menor molécula de carbono do mercado.",
                "Dimensões:<br> Altura: 0,30m", "Largura: 1,38m", "Profundidade: 1,88m",
            ],
            [
                "Novo Colchão Elegant Superpocket é revestido em Bambú Fresh em Malha de Poliéster com Viscose que oferece um toque muito mais refrescante e confortável, sua lateral é em Camurça. Tem sua estrutura em molas Superpocket ensacadas individualmente, que reduzem a vibração ao longo de sua superfície, garantindo mais conforto e perfeita acomodação, além de permitir que uma pessoa se movimente sem incomodar quem está ao lado. Possui Ortopillow com camada extra de conforto e bordado em matelassê, que maximiza a sensação de maciez. O Elegant Superpocket recebe tratamento antialérgico e antiácaro, preocupação extra com sua saúde. Devido a tecnologia No Turn, o Elegant Superpocket não precisa ser virado.",
                "Dimensões:<br> Altura: 28,00 cm", "Largura: 138,00 cm", "Profundidade: 188,00 cm",
            ],
            [
                "Colchão Gold Ultra Gel Casal (138x188x32) - Espuma Viscogel D45, molas Pocket - Ortobom sobre O produto Gold Ultra Gel é o representante Super Premium dentre os produtos Ortobom. Sua estrutura é composta pelo molejo Superpocket (ensacadas individualmente) que fazem o peso de um corpo não interferir no conforto do outro. Possui em sua camada de conforto a inovadora espuma Viscogel D45, que é a espuma com a mais alta tecnóloga do mercado e que se adapta como nenhuma outra a temperatura e contornos do seu corpo. Possui Malha Belga Super Soft de alta qualidade no tampo, que proporciona conforto e uma beleza sem igual, sua lateral é confeccionada em Camurça 3D que apresenta um visual único ao produto. ",
                "Dimensões:<br> Altura: 0,32m", "Largura: 1,38m", "Profundidade: 1,88m",
            ],
            [
                "Colchão Light Superpocket tem sua estrutura em molas ensacadas que reduzem a vibração ao longo de sua superfície, garantindo mais conforto e perfeita acomodação, além de permitir que uma pessoa se movimente sem incomodar quem está ao lado.",
                "Dimensões:<br> Altura: 26 cm ", "Largura: 138 cm ", "Profundidade: 188 cm ",
            ],
           
        ],
        [
            [
                "Colchão Elegant Nanolastic Solteiro (88x188x27) - Molas Nanolastic, Ortopillow - Ortobom sobre O produto Colchão Elegant Nanolastic é revestido em Malha Ecobambú, que possui um toque muito mais refrescante e confortável, tem sua estrutura composta pelo exclusivo molejo Nanolastic que tem a menor e mais concentrada molécula de carbono do mercado, oferecendo maior resistência ao produto. Possui Ortopillow, que é uma camada extra de conforto com bordado em matelassê que maximiza a sensação de maciez. O tecido lateral é em Suede, apresentando requinte e beleza ao produto. Conta com tratamento anti ácaro e anti alérgico. Devido a tecnologia No Turn, o Elegant Nanolastic não precisa ser virado. características Estrutura composta pelo exclusivo molejo Nanolastic.",
                "Dimensões:<br> Altura: 0,27m", "Largura: 0,88m", "Comprimento: 1,88m",
            ],
            [
                "O Colchão Solteiro Elegant Superpocket da linha Light Ortobom é revestido em Bambú Fresh em Malha de Poliéster com Viscose que oferece um toque muito mais refrescante e confortável, sua lateral é em Camurça. Tem sua estrutura em molas Superpocket ensacadas individualmente, que reduzem a vibração ao longo de sua superfície, garantindo mais conforto e perfeita acomodação, além de permitir que uma pessoa se movimente sem incomodar quem está ao lado. Possui Ortopillow com camada extra de conforto e bordado em matelassê, que maximiza a sensação de maciez.",
                "Dimensões:<br> Altura: 28cm", "Largura: 88cm", "Profundidade: 188cm",
            ],
            [
                "Elaborado com material de qualidade, o Colchão Solteiro Ortobom Cannes Espuma D28 14x78x188 cm - Cinza/Preto possui tecido 100% poliéster para assegurar a maciez do item, laterais com tecidos bordados de alta resistência, espuma 100% poliuretano densidade 28 selada que permite ainda mais conforto, estampas modernas, excelente resistência e altíssima durabilidade para suprir as necessidades do seu cotidiano.",
                "Dimensões:<br> Altura: 14cm", "Largura: 1,38m", "Profundidade: 1,88m",
            ],
            [
                "Elaborado com material de qualidade, o Colchão Solteiro Ortobo tecido 100% poliéster para assegurar a maciez do item, laterais com tecidos bordados de alta resistência, espuma 100% poliuretano densidade 28 selada que permite ainda mais conforto, estampas modernas, excelente resistência e altíssima durabilidade para suprir as necessidades do seu cotidiano.",
                "Dimensões:<br> Altura: 12cm", "Largura: 78cm", "Profundidade:  188cm",
            ],
            [
                "Os colchões proporcionam muito mais conforto e vantagens para a saúde. Resultado de constantes pesquisas, a linha acompanha as tendências mundiais, atualizando e inovando o design e tecnologia a cada lançamento. Os produtos atendem as características dos mais variados biotipos, adequando-se às pressões exercidas pelo corpo, proporcionando maior conforto e qualidade de vida.",
                "Dimensões:<br> Altura: 17cm", "Largura: 88cm", "Profundidade: 188cm",
            ],
            [
                "O Colchão Ortobom Light D33 é altamente resistente e confortável, ideal para pessoas com até 100 quilos. Composto por Espuma D33 Pró Aditivada de Alta Performance, proporciona melhor sustentação e durabilidade ao produto, o tampo é bordado em Matelassê, que entrega uma camada extra de conforto. Seu revestimento é em Viscopoli com tratamento antialérgico e antiácaro.",
                "Dimensões:<br> Altura: 14cm", "Largura: 88cm", "Profundidade: 188cm",
            ],
            [
                "O Colchão Ortobom Light D33 é altamente resistente e confortável, ideal para pessoas com até 100 quilos. Composto por Espuma D33 Pró Aditivada de Alta Performance, proporciona melhor sustentação e durabilidade ao produto, o tampo é bordado em Matelassê, que entrega uma camada extra de conforto. Seu revestimento é em Viscopoli com tratamento antialérgico e antiácaro.",
                "Dimensões:<br> Altura: 28cm", "Largura: 108cm", "Profundidade: 198cm",
            ],
           
        ],
        [
            [
                "O Baby Physical D18 é impermeável e possui tratamento antialérgico e antiácaro, além da proteção total contra a instalação de fungos e bactérias.",
                "Dimensões:<br> Altura: 10cm", "Largura: 70cm", "Comprimento: 130cm",
            ],
            [
                "Colchão Ortobom Baby Light Espuma D18 Selada Antialérgico E Antiácaro 60X130X12 é ideal para recém nascidos e bebês até 3 anos, pois tem plástico Cristal que protege contra a penetração de urinas e outros líquidos, dando uma higienização perfeita. O bordado é em matelassê dando mais beleza ao colchão e conforto ao seu bebê. Além disso possui tratamento antialérgico e antiácaro.",
                "Dimensões:<br> Altura: 12cm", "Largura: 60cm", "Profundidade: 130cm",
            ],
          
        ],
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias(["Casal", "Solteiro", "Berço"]);
    if (this.checked) {
        global.setChecked(global.labelGuardaRoupa);
    }
});