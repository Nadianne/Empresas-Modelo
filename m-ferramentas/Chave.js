import * as global from './global.js';
global.Chave.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Chave"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([11]);
    global.setImgAllPath(["../imagens-madereira/Chave/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Chave fixa 14x15mm',
        'Chave de fenda 1/4x6. ',
        'Chave fixa 18x19 ',
        'Chave Fixa 20 x 22mm  ',
        'Chave fixa 16x17mm ',
        'Chave fixa 8x9mm ',
        'Chave fixa 10x11mm',
        'Chave fixa 12x13mm',
        'Chave de fenda 3/16x3',
        'Chave de fenda 3/16x4',
        'Chave biela em L',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Chave fixa 14x15mm <span>cromada vonder</span>",
            "Chave de fenda vonder estrela <span> 1/4x6</span>",
            "Chave fixa 18x19 <span> cromada vonder</span>",
            "Chave Fixa 20 x 22mm  <span> cromada vonder</span>",
            "Chave fixa 16x17mm <span> cromada vonder </span>",
            "Chave fixa 6x7mm <span>cromada vonder </span>",
            "Chave fixa 8x9mm <span>cromada vonder</span>",
            "Chave fixa 10x11mm <span> cromada vonder </span>",
            "Chave fixa 12x13mm <span>cromada vonder</span>",
            "Chave de fenda vonder estrela <span>3/16x3</span>",
            "Chave de fenda vonder estrela <span> 1/16x4</span>",
            "Chave biela em L <span>Vonder</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Chave fixa é indicada para apertar e soltar porcas e parafusos sextavados. Produzida em aço cromo vanádio, proporciona maior resistência e durabilidade.",
                "Medida da chave: 14mm x 15mm", "Medida da chave: 14mm x 15mm", "Acabamento: Cromado fosco <br> Comprimento: 148,5mm",
            ],
            [
                "Aplicações e dicas de uso: Indicada para fixar e soltar parafusos com fenda simples Destaques e diferenciais: Produzida em aço cromo vanádio, proporcionando maior resistência e durabilidade. Possui acabamento niquelado que confere maior resistência contra oxidação/corrosão.",
                "Largura da ponta (B): 1/4″ – 6,3 mm", "Comprimento da haste (L1): 4″ – 101 mm ", "Material da haste: Aço cromo vanádio (CRV)",
            ],
            [
                "Chave fixa encartelada, ideal apertar e soltar porcas e parafusos. Indicada tanto para uso profissional como domestico.  Ferramenta fabricada em aço cromo vanádio, proporcionando qualidade e durabilidade. Seu acabamento cromado oferece proteção contra corrosão e oxidação. Design atraente possui pontas estreitas, facilita o uso em locais de difícil acesso.",
                "Tamanho: 18 x 19mm", "Comprimento: 221mm", "Material: Aço cromado vanádio",
            ],
            [
                "Indicada para apertar ou afrouxar porcas e parafusos de perfil quadrado ou sextavado, possui cabeças estreitas e com medidas diferentes em cada extremidade.",
                "Fabricado em aço gedore-vanádio", "Acabamento niquelado e cromado", "Medidas: 20 x 22mm",
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
            [
                "Chave Biela L Material Em Aço Carbono <br> Modelos Disponível:",
                "09mm<br>10mm<br>11mm", "12mm<br>13mm<br>14mm<br>", "",
            ],
           
        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias([]);
    if (this.checked) {
        global.setChecked(global.labelPincel);
    }
});