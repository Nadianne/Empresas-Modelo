import * as global from './global.js';
global.Colchão.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Colchão"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([5]);
    global.setImgAllPath(["../imagens-moveis/colchao/casal/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Colchão Casal Ortopédico',
        'Colchão Casal Viscomemory',
        'Colchão Ortobom Freedom',
        'Colchão Gold Ultra Gel Ortobom',
        'Colchão Exclusive Casal Ortobom',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Colchão Casal <span>Ortopédico Ortobom </span>",
            "Colchão Casal <span>com Espuma</span>",
            "Colchão Ortobom <span>Freedom</span>",
            "Colchão Gold <span>Ultra Gel</span>",
            "Colchão Exclusive Casal Ortobom<span>Ortobom</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Tecido com tratamento Aloe Vera aplicado nas fibras do tecido auxilia no processo de hidratação da pele, estimulando o crescimento de novas células de pele e removendo as células mortas, além de se composto de bálsamos e umidificantes.",
                "Dimensões:<br> Altura:0,27m", "Largura:1,38m", "Comprimento: 1,88m",
            ],
            [
                "Que tal o Colchão Viscomemory?Uma boa cama só está completa se você escolher o colchão certo para os seus momentos relax - e ele precisa ser certeiro para que o seu corpo se adapte de forma plena!",
                "Dimensões:<br> Altura: 28cm", "Largura: 138cm", "Profundidade: 188cm",
            ],
            [
                " Ortobom Freedom tem sua estrutura composta por Molas Superpocket ensacadas individualmente, que fazem o peso de um corpo não interferir no conforto do outro.",
                "Dimensões:<br> Altura: 0,32cm", "Largura: 1,38m", "Profundidade: 1,88m",
            ],
            [
                "Ultra Gel é o representante Super Premium dentre os produtos Ortobom. Sua estrutura é composta pelo molejo Superpocket (ensacadas individualmente) que fazem o peso de um corpo não interferir no conforto do outro.",
                "Dimensões:<br> Altura: 32cm", "Largura: 138cm", "Profundidade:  188cm",
            ],
            [
                "Novo Colchão Exclusive é um clássico entre os colchões de mola, sua estrutura é composta pelo avançado molejo Nanolastic que possui a menor molécula de carbono do mercado.",
                "Dimensões:<br> Altura: 0,30m", "Largura: 1,38m", "Profundidade: 1,88m",
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