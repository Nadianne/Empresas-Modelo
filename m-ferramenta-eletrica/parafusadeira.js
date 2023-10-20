import * as global from './global.js';
global.parafusadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Parafusadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([5]);
    global.setImgAllPath(["../imagens-industria/Parafusadeira/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Parafusadeira / furadeira Black Decker',
        'Parafusadeira e Furadeira Black Decker',
        'Parafusadeira E Furadeira Stanley',
        'Parafusadeira Furadeira Black Decker',
        'Parafusadeira Furadeira Black Decker',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Parafusadeira / furadeira <span>Black Decker</span>",
            "Parafusadeira e Furadeira <span>Black Decker</span>",
            "Parafusadeira E Furadeira <span>Stanley</span>",
            "Parafusadeira Furadeira <span>Black Decker</span>",
            "Parafusadeira Furadeira <span>Black Decker</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Empunhadura 100% emborrachada e ergonômica para uma maior comodidade com Led para visualização em lugares de difíceis acesso e Luz com identificação do nível da bateria",
                "Bateria Ions Litio - 12V", "Velocidade Variável e Reversível", "Carregador Bivolt e manual",
            ],
            [
                "Parafusadeira/Furadeira 12V Black&Decker C/ 13 Acessórios e Caixa Transparente - LD12SP-BRA Furadeira Parafusadeira 3/8 bateria 12 volts com 13 acessórios LD12SP da Black Decker é Ideal para uso em trabalhos rotineiros, instalações, montagens e manutenções. Perfura: metal, madeira e gesso. Acompanha a Furadeira Parafusadeira LD12SP: caixa plástica com tampa transparente, 10 bits, 2 brocas, 1 extensor magnético e carregador.",
                "Perfuração: Metal 6,5mm", "Perfuração:  Madeira 15mm", "Perfuração:  Capacidade de perfuração Aço (mm):6,5",
            ],
            [
                "Parafusadeira Furadeira Stanley SCD700C2K 1/2 Maleta e 2 Baterias 20V Max Íon Parafusadeira/Furadeira de Impacto 20V Max Íon de Lítio. ",
                "Potência: 20V", "Tamanho (AxLxP): 31x33x13", "Peso: 3,68Kg",
            ],
            [
                "Parafusadeira/furadeira 20V ìon Lítio sendo ideal para para fixações de parafusos diversos e perfuração em aço e madeira 1 velocidade mecânica Velocidade variável 0-600 RPM Empunhadura emborrachada para melhor ergonomia 11 posições de torque para trabalhos leves e pesados Alto torque de 37Nm para uma excelente performance.",
                "Bateria 20V Íon Lítio 1.5Ah", "Velocidade 0-600 RPM", "Mandrill 3/8 (10mm) sem chave",
            ],
            [
                "A Parafusadeira/furadeira 20V ìon é indicada para fixações de parafusos diversos e perfuração em aço, madeira e alvenaria. São 2 velocidades mecânica. Ela conta com empunhadura emborrachada para melhor ergonomia. Além disso a Furadeira Parafusadeira tem 11 posições de torque para trabalhos leves e pesados.",
                "Bateria 20V Íon Lítio 1.5 Ah", "Mandril 3/8 (10 mm) sem chave", "Tamanho Aproximado (AxLxP): 22 X 8 X 28 cm",
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