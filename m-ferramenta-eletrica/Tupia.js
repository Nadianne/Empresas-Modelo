import * as global from './global.js';
global.Tupia.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Tupia"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-industria/tupia/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Tupia Eletrônica Colunas - Stanley',
        'Plaina Desengrossadeira Orion 5,5CV',
        'Parafusadeira E Furadeira Stanley',
        'Parafusadeira Furadeira Black Decker',
        'Parafusadeira Furadeira Black Decker',
        'Bateria para Parafusadeira DeWALT',
        'Carregador Rápido Flexvolt DeWALT ',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Tupia Eletrônica Colunas - Stanley <span>1200w 127v</span>",
            "Plaina Desengrossadeira Orion <span>220/380V Trifásico</span>",
            "Parafusadeira E Furadeira <span>Stanley</span>",
            "Parafusadeira Furadeira <span>Black Decker</span>",
            "Parafusadeira Furadeira <span>Black Decker</span>",
            "Bateria para Parafusadeira <span>DeWALT</span>",
            "Carregador Rápido Flexvolt <span>DeWALT</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Tupia Eletrônica de Colunas - Stanley. Gatilho no punho com bloqueio para funcionamento contínuo. Punhos com superfície de agarre anti-deslizante de borracha, para maior segurança, precisão e comodidade durante o uso. Controle de profundidade com sistema de micro-ajuste.",
                "Rotações por Minuto: 8.000 - 27.000 RPM", "Mordaça: 6mm, 6,35mm e 8mm", "Potência: 1.200W",
            ],
            [
                "PA fabricação de móveis e esquadrias requer equipamentos profissionais e cada vez mais flexíveis. O acesso aos mais variados tipos de matéria-prima tem exigido máquinas versáteis, por isso a INMES desenvolveu a DG-505, que conta com um rápido sistema regulagem de espessura proporcionando flexibilidade no dia a dia.",
                "", "", "",
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
            [
                "alimenta toda linha de Ferramentas Dewalt 20 V - possibilitando que o usuário carregue várias ferramentas com a mesma carga de bateria. Tem duração prolongada, e possui indicador de carga. Bateria Compact XRde íons de lítio 20V MAX.*(bateria compacta XR 33% mais de capacidade que baterias normais).",
                "Ampère-hora: 2,0 Ah", "Tensão: 20V MAX.*", "Peso 0,400kg",
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