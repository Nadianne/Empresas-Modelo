import * as global from './global.js';
global.Comoda.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Cômoda"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([7]);
    global.setImgAllPath(["../imagens-moveis/comoda/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Cômoda Madri Plus',
        'Cômoda Com 5 Gavetas ',
        'Cômoda 4 Gavetas',
        'Cômoda 5 Gavetas',
        'Cômoda 4 Gavetas',
        'Cômoda 6 Gavetas',
        'Cômoda 4 Gavetas '
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Cômoda Madri Plus <span>5 gavetas</span>",
            "Cômoda Com 5 Gavetas<span>Requinte Com Pé</span>",
            "Cômoda 4 Gavetas<span>Colmeia E Chave Branco</span>",
            "Cômoda 5 Gavetas<span> Seul Móveis Sul</span>",
            "Cômoda 4 Gavetas <span> Malu Panan</span>",
            "Cômoda 6 Gavetas <span>Mademarques</span>",
            "Cômoda 4 Gavetas <span>Europa</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Que tal a Cômoda Madri Plus?Aliada da organização do seu dormitório, a Cômoda Madri Plus é a peça que faltava para garantir um dia a dia mais otimizado e um ambiente bem decorado.",
                "Dimensões:<br> Altura: 107cm", "Largura: 95cm", "Profundidade: 43cm",
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
            [
                "A cômoda é um móvel prático e super funcional! A Cômoda Malu da Panan é grande, possui gavetas espaçosas e uma porta com prateleiras para melhor acomodar suas peças! As gavetas contam com corrediça telescópica, proporciona abertura suave, total e segura! Produzida com materiais de qualidade trazendo durabilidade ao móvel!",
                "Dimensões:<br> Altura: 110 cm", "Largura: 121,1 cm", "Profundidade: 46,7 cm",
            ],
            [
                "A Cômoda Sevilha 6 Gavetas Peroba/off White - Mademarques é a escolha perfeita para quem busca organização e estilo em um único móvel. Com seu corpo em MDF e acabamento em verniz, ela oferece durabilidade e resistência, além de um visual elegante na cor bege.",
                "Dimensões:<br> Altura: 128 cm", "Largura: 80 cm", "Profundidade: 45 cm",
            ],
            [
                "A Cômoda Comoda Londres 4 Gavetas Confeccionada Com Matérias De Qualidade, Pode Te Ajudar A Dar Um Toque De Modernidade Ao Seu Quarto E Auxiliar Na Organização De Roupas Além De Dispor De Um Tampo Que Pode Ser Utilizado Para Objetos Decorativos. A Cômoda Possui 04 Gavetas Com Corrediças Telescópicas E Puxadores Em Alumínio Com Ponteira Em Abs. Fabricada Em Mdp.",
                "Dimensões:<br> Altura: 95 cm", "Largura: 90 cm", "Profundidade: 41 cm",
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