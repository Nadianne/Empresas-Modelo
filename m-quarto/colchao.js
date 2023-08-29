import * as global from './global.js';
global.Colchão.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Colchão"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([4]);
    global.setImgAllPath(["../imagens-moveis/colchao/casal/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Colchão Casal',
        'Cômoda Com 5 Gavetas ',
        'Cômoda 4 Gavetas',
        'Cômoda 5 Gavetas',
        'Guarda-roupa Casal com Espelho 6 Portas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Colchão Casal <span>Ortopedico Ortobom </span>",
            "Cômoda Com 5 Gavetas<span>Requinte Com Pé</span>",
            "Cômoda 4 Gavetas<span>Colmeia E Chave Branco</span>",
            "Cômoda 5 Gavetas<span> Seul Móveis Sul</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Tecido com tratamento Aloe Vera aplicado nas fibras do tecido auxilia no processo de hidratação da pele, estimulando o crescimento de novas células de pele e removendo as células mortas, além de se composto de bálsamos e umidificantes.",
                "Dimensões:<br> Altura:0,27m", "Largura:1,38m", "Comprimento: 1,88m",
            ],
            [
                "A Cômoda Requinte é um produto espaçoso pensado para o armazenamento de uma maneira funcional e prática, para isto ela conta com 5 gavetas, todas com corrediças telescópicas, mais duráveis e funcionais.",
                "Dimensões:<br> Altura: 110cm", "Largura: 90cm", "Profundidade: 47cm",
            ],
            [
                "Cômoda New Primordial Com 4 Gavetas Zanzini Branco Árticoa Cômoda New Primordial É Uma Ótima Opção Para Organizar Tudo O Que Você Precisa.",
                "Dimensões:<br> Altura: 129,3cm", "Largura: 61,3cm", "Profundidade: 46,3cm",
            ],
            [
                "Cômoda Seul possui 5 gavetas com corrediças metálicas sendo ideal para acondicionar e organizar objetos, indicado para compor ambientes em seu quarto ou closet.",
                "Dimensões:<br> Altura: 67,5cm", "Largura: 91,5cm", "Profundidade:  37,7cm",
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