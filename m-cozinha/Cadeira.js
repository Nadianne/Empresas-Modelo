import * as global from './global.js';
global.Cadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Cadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-moveis/cadeira/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Cadeira Carraro Neo ',
        'Cadeiras Sala Jantar',
        'Armário Utilitário Multiuso',
        'Armário Multiuso Com Chave',
        'Armário Multiuso Ariel',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Cadeira Carraro Neo <span>Grafite E Preto</span>",
            "Cadeiras Sala Jantar <span>Cromado/Courano Preto</span>",
            "Armário Utilitário<span>Multiuso</span>",
            "Armário Multiuso <span>Com chave</span>",
            "Armário Multiuso Ariel <span>2 Portas</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "A cadeira conta com uma estrutura rica em sofisticação com seu assento estofado e o lindo encosto em MDP com tela sintética que proporciona o aconchego que você e sua família merecem para curtir aquela deliciosa refeição juntos.",
                "Dimensões:<br> Altura: 90cm ", "Largura: 48cm", "Comprimento:  56,50cm",
            ],
            [
                "Cadeira Sala de Jantar Cromado/Preto - Carraro",
                "Dimensões:<br> Altura: 98,00cm", "Largura: 37,00cm", "Profundidade: 50,00cm",
            ],
            [
                "O Armário Utilitário Multiuso Carraro é a peça ideal para ser utilizada em qualquer cômodo da casa, ajudando a manter todos os objetos em ordem e assim facilitando as tarefas do dia a dia.",
                "Dimensões:<br> Altura: 174cm", "Largura: 56m", "Profundidade: 38m",
            ],
            [
                "O Armário Multiuso 2 Portas com Chave Max Plus da Zanzini é ideal para quem procura um móvel que se destaca no ambiente, possuindo a função multiuso, ou seja, pode ser considerado um produto para cozinha, escritório, área de serviço e afins.",
                "Dimensões:<br> Altura:  187cm", "Largura: 60,9cm", "Profundidade: 37,3cm",
            ],
            [
                "O Armário Multiuso Ariel Móveis Sul, 2 Portas é perfeito para quem busca otimização de espaço e beleza em um único item, ele possui 2 portas com puxadores em plástico, rodapés e 4 prateleiras internas.",
                "Dimensões:<br> Altura: 180,00cm", "Largura: 56,60cm", "Profundidade: 33,00cm",
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