import * as global from './global.js';
global.furadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Furadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([4]);
    global.setImgAllPath(["../imagens-industria/Furadeira/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Furadeira De Impacto Black Decker ',
        'Furadeira  127v Black Decker',
        'Furadeira de Impacto 550W Black Decker',
        'Furadeira De Impacto Black Decker 560W 110V ',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Furadeira De Impacto <span>Black Decker </span>",
            "Furadeira <span>Black Decker</span>",
            "Furadeira de Impacto 550W <span>Black Decker</span>",
            "Furadeira De Impacto <span>Black Decker 560W 110V</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Furadeira De Impacto 1/2 560w VVR 110v Black Decker Tm555brA Furadeira de Impacto ½” TM555BR Black Decker é fabricada com materiais de alta qualidade, proporcionando muita resistência e durabilidade da ferramenta. ",
                "Potência: 560W;", "Voltagem: 127;", "Velocidade: 0-2800/ min (rpm);",
            ],
            [
                "A Furadeira de Impacto Bosch GSB 450 RE, com potência de 450 W, é a melhor escolha para quem busca a confiança da marca Bosch por um preço arrasador. Mais confortável, com apenas 1,6 Kg, perfura alvenaria, madeira e metal, com e sem impacto, graças ao botão comutador. Realize, também, parafusamentos através da função de reversão e faça trabalhos contínuos com o auxílio do botão trava. Tudo isso com 1 ano de garantia e suporte da Assistência Técnica Bosch, que oferece o serviço mais rápido e barato que a concorrência.",
                "Potência nominal absorvida: 450 W", "Nº de rotações em vazio, 1ª velocidade: 0 – 3.100 r.p.m", "Mandril de encaixe do veio da broca: 3/8-24 UNF",
            ],
            [
                "Furadeira de impacto mandril de 1/2 ( 13mm ), Potência: 550W, Velocidade variável e reversível 0 - 2.800 RPM; Impactos por minuto: 0 - 45.000 IPM. Acompanha Maleta, Empunhadura lateral, limitador de profundidade, e chave de mandril.",
                "Tamanho: 18 x 19mm", "Comprimento: 221mm", "Material: Aço cromado vanádio",
            ],
            [
                "Furadeira De Impacto 1/2 560w VVR 127v Black Decker Tm555brA Furadeira de Impacto ½” TM555BR Black Decker é fabricada com materiais de alta qualidade, proporcionando muita resistência e durabilidade da ferramenta. ",
                "Potência: 560W;", "Voltagem: 127;", "Velocidade: 0-2800/ min (rpm);",
            ],
            [
                "Produzida em aço cromo vanádio, proporcionando maior resistência e durabilidade. Possui acabamento cromado fosco, que confere maior resistência contra oxidação/corrosão, e pontas estreitas, que possibilitam o uso em locais de difícil acesso. Indicada para apertar e soltar porcas e parafusos sextavados. Nunca utilizar prolongadores sobre a chave, pois isso aumentará o torque aplicado e diminuirá a vida útil da ferramenta.",
                "Medida da chave: 16 mm x 17 mm", "Comprimento aproximado da chave: 210,0 mm", "Massa aproximada (peso):0.159 kg",
            ],
            [
                "Produzida em aço cromo vanádio, proporcionando melhor qualidade e durabilidade. Possui acabamento cromado, que oferece maior proteção contra oxidação/corrosão. Possui pontas estreitas que possibilitam o uso em locais de difícil acesso.",
                "Material:Aço cromo vanádio", "Acabamento:Cromado", "Medida da chave:6 mm x 7 mm",
            ],
            [
                "Produzida em aço cromo vanádio, proporcionando maior resistência e durabilidade. Possui acabamento cromado fosco, que confere maior resistência contra oxidação/corrosão, e pontas estreitas, que possibilitam o uso em locais de difícil acesso.",
                "Medida da chave: 8 mm x 9 mm", "Comprimento aproximado da chave: 140,6 mm", "Massa aproximada (peso): 0.052 kg",
            ],
            [
                "Produzida em aço cromo vanádio, proporcionando maior resistência e durabilidade. Possui acabamento cromado fosco que confere maior resistência à oxidação/corrosão. Conta com pontas estreitas que possibilitam o uso em locais de difícil acesso.",
                "Medida da chave: 12 mm x 13 mm", "Comprimento aproximado da chave:  117,0 mm", "Massa aproximada (peso): 0.044 kg",
            ],
            [
                " Produzida em aço cromo vanádio, proporcionando maior resistência e durabilidade. Possui acabamento niquelado que confere maior resistência contra oxidação/corrosão. Conta com ponta magnetizada que facilita tanto a colocação quanto a retirada de parafusos em locais de difícil acesso. Indicada para fixar e soltar parafusos com fenda simples.",
                "Largura da ponta:3/16 - 4,7 mm", "Comprimento da haste:3 - 76 mm", "Material da haste:Aço cromo vanádio",
            ],
            [
                " Produzida em aço cromo vanádio, proporcionando maior resistência e durabilidade. Possui acabamento niquelado que confere maior resistência contra oxidação/corrosão. Conta com ponta magnetizada que facilita tanto a colocação quanto a retirada de parafusos em locais de difícil acesso. Indicada para fixar e soltar parafusos com fenda simples.",
                "Largura da ponta:3/16 - 4,7 mm", "Comprimento da haste:3 - 76 mm", "Material da haste:Aço cromo vanádio",
            ],
           
        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias([]);
    if (this.checked) {
        global.setChecked(global.labelserra);
    }
});