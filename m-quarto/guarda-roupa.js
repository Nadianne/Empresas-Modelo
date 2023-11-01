import * as global from './global.js';
global.guardaRoupa.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Guarda-roupa de Casal", "Guarda-roupa de Solteiro"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([16, 4]);
    global.setImgAllPath(["../imagens-moveis/guarda-roupa/casal/c", "../imagens-moveis/guarda-roupa/solteiro/s"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Guarda-Roupa Casal com Espelho',
        'Guarda-Roupa Casal com Espelho 3 Portas',
        'Guarda-Roupa Casal Creta 2 Portas',
        'Guarda-roupa Casal Oslos 6 Portas',
        'Guarda-roupa Casal com Espelho 6 Portas',
        'Guarda-Roupa Made Marcs Bergone',
        'Guarda-Roupa Casal 2 Portas 4 Gavetas',
        'Guarda-roupa Casal MDF 2 portas',
        'Guarda-Roupa Verona com 1 Espelho',
        'Guarda-roupa Casal MDF 2 Portas',
        'Guarda-roupa Casal com espelho',
        'Guarda Roupa Tuboarte',
        'Guarda Roupas Panan Blumenau',
        'Guarda Roupa Panan Cecilia ',
        'Guarda Roupas Casal 2 Portas ',
        'Roupeiro Madri 2,64m 3 Portas',
    ],
    [
        'Guarda-roupa Solteiro 2 portas',
        'Guarda-roupa Solteiro Isabela',
        'Guarda Roupa Royalli Baby',
        'Guarda Roupa Solteiro 3 portas',
    ]
    ]);
    
    global.setH1PopUpAll([
        [
            "Guarda-Roupa Casal <span>com Espelho</span>",
            "Guarda-Roupa Casal com Espelho <span>3 Portas</span>",
            "Guarda-Roupa Casal Creta <span>2 Portas</span>",
            "Guarda-roupa Casal Oslos<span>6 Porta</span>",
            "Guarda-roupa Casal com Espelho <span>6 Portas</span>",
            "Guarda-Roupa Made Marcs Bergone<span>6 Porta</span>",
            "Guarda Roupa Casal <span>2 Portas 4 Gavetas</span>",
            "Guarda-Roupa Casal <span>Bergone</span>",
            "Guarda-Roupa Verona com<span> 1 Espelho</span>",
            "Guarda-roupa Casal MDF <span>2 Portas</span>",
            "Guarda-roupa Casal <span>com espelho</span>",
            "Guarda Roupa <span>Tuboarte</span>",
            "Guarda Roupas Panan Blumenau <span>2 Portas e Espelho</span>",
            "Guarda Roupa Panan Cecilia  <span> Cinamomo/off White</span>",
            "Guarda Roupas Casal 2 Portas <span>3 Gavetas E Espelho</span>",
            "Roupeiro Madri 2,64m 3 Portas <span>de Correr com Espelho </span>"
        ],
        [
            "Guarda-roupa Solteiro <span>2 portas</span>",
            "Guarda-roupa Solteiro <span>Isabela</span>",
            "Guarda Roupa <span>Royalli</span>",
            "Guarda-Roupa Solteiro <span>3 portas</span>",
        ],
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "O Guarda-Roupa Móveis Europa é um móvel que irá superar todas as suas expectativas nos quesitos organização e beleza. Ele é moderno e funcional, por contar com espaços para guardar roupas e sapatos.",
                "Dimensões:<br> Altura: 235cm", "Largura: 275cm", "Profundidade: 63cm",
            ],
            [
                "Roupeiro 100% em MDF. Oferece beleza, durabilidade e resistência. Perfil puxador em alumínio na cor Bronze; sistema de rodízios de portas de correr que evita o descarrilamento e proporciona um deslizamento suave e silencioso",
                "Dimensões:<br> Altura: 235cm", "Largura: 228cm", "Profundidade: 56cm",
            ],
            [
                "O Guarda-Roupa Casal Creta 2 Portas 4 Gavetas 100% Mdf Brauna/Off White - Europa Móveis é produzido em 100% MDF na escala de brilho Semi-Brilho.",
                "Dimensões:<br> Altura: 235,00cm", "Largura: 251,00cm", "Profundidade: 64cm",
            ],
            [
                "O Guarda-Roupa Casal Oslo 6 Portas 4 Gavetas 100% Mdf Peroba/Off White - Madermaques é produzido em 100% mdf na escala de brilho Semi-Brilho",
                "Dimensões:<br> Altura: 235cm", "Largura: 210cm", "Profundidade: 50cm",
            ],
            [
                "O guarda-roupa possui o tamanho de casal, seu material é feito em MDF com revestimento em laca e acabamento em verniz UV na cor peroba e off-white.",
                "Dimensões:<br> Altura: 235cm", "Largura: 240cm", "Profundidade: 55cm",
            ],
            [
                "Guarda-Roupa Muito espaçoso e capaz de atender todas as necessidades de quem busca manter roupas e acessórios muito bem organizados e fáceis de localizar! ",
                "Dimensões:<br> Altura: 237cm", "Largura: 274cm", "Profundidade: 61cm",
            ],
            [
                "Guarda roupa verona com 1 espelho, ideal para quem precisa de organização com espaço.",
                "Dimensões:<br> Altura: 218cm", "Largura: 202cm", "Profundidade: 51cm",
            ],
            [
                "O Guarda roupa Casal Moscou é composto por duas portas de correr e todo fabricado em MDF. As portas deslizantes em trilho inferior de alumínio com roldanas com molas com sistema anti-descarrilhamento ,que permite sofisticação e maior facilidade de abertura.",
                "Dimensões:<br> Altura: 237cm", "Largura: 228cm", "Profundidade: 55,8cm",
            ],
            [
                "Guarda roupa Maranello da Europa vai levar qualidade e sofisticação para o seu quarto. Ele possui 3 portas de correr, tem espelho e um amplo espaço interno. ",
                "Dimensões:<br> Altura: 219,5cm", "Largura: 223,5cm", "Profundidade: 56,1cm",
            ],
            [
                "Roupeiro alba 6 portas a decor mobille apresenta design moderno é compactado  ideal para duas pessoas. Com espaços para ele é para ela.",
                "Dimensões:<br> Altura: 218,5cm", "Largura: 182,5cm", "Profundidade: 56,5cm"
            ],
            [
                "Já pensou em um móvel que seja bonito, durável e ainda ajude a organizar o ambiente? O guarda roupa Titanium 6 gavetas da D'Doro tem tudo isso.",
                "Dimensões:<br> Altura: 230cm", "Largura: 220cm", "Profundidade: 62cm",
            ],
            [
                "Na hora de mobiliar o seu quarto é importante pensar em peças que tragam aconchego e segurança, mas que também deixem a decoração com um toque leve e sofisticado.",
                "Dimensões:<br> Altura: 208cm", "Largura: 161cm", "Profundidade: 41,5cm",
            ],
            [
                "O guarda roupa Blumenau da Panan é perfeito, possui 243cm de largura e 55cm de profundidade, assim você tem espaço de sobra para guardar suas roupas e acessórios. O espelho na porta é fixado com cola especial e parafusos, para lhe proporcionar total segurança!",
                "Dimensões:<br> Altura: 208cm", "Largura: 161cm", "Profundidade: 41,5cm",
            ],
            [
                "Ele é espaçoso, moderno, planejado e super prático. Seu interior conta com prateleira, ideal para você organizar seu perfume, creme de pele e acessórios! As portas laterais tem o interior amplo com cabideiros e espaços para roupas longas como vestidos e palitós ",
                "Dimensões:<br> Altura: 231 cm", "Largura: 234 cm", "Profundidade: 55 cm",
            ],
            [
                "O guarda roupas casal 2 portas de correr 3 gavetas e espelho flexcolor ilhéus da panan é o guarda roupa ideal para o quarto, destacando por apresentar colmeias que permitem ampla organização, e sendo confeccionado com produtos de alta qualidade e maior durabilidade.",
                "Dimensões:<br> Altura: 210 cm", "Largura: 184 cm", "Profundidade: 55 cm",
            ],
            [
                "Feito em 100% MDF, esse roupeiro conta com o que há de melhor no mercado, com acabamento que só a panan consegue fazer, esse produto vai renovar o seu quarto, com design clean e uma aparencia linda. Conta com 3 portas de correr e gavetas internas com corrediças telescópicas para mais conforto.",
                "Dimensões:<br> Altura: 240 cm", "Largura: 264 cm", "Profundidade: 62 cm",
            ],
        ],
        [
            [
                "Guarda-roupa Solteiro Kiev 2 Portas 4 Gavetas 100% Mdf Brauna/preto - Europa Móveis é Produzido Em 100% Mdf Na Escala De Brilho Semi-brilho.",
                "Dimensões:<br> Altura: 240 cm", "Largura: 243 cm", "Profundidade: 55,1 cm",
            ],
            [
                "Guarda-roupa solteiro isabela 2 portas 4 gavetas off white - pnr móveis é produzido em mdf na escala de brilho semi-brilho",
                "Dimensões:<br> Altura: 235cm", "Largura: 170cm", "Profundidade: 56cm",
            ],
            [
                "Royalli.",
                "Dimensões:<br> Altura: 205cm", "Largura: 124cm", "Profundidade: 54cm",
            ],
            [
                "Guarda-Roupa Solteiro Moval Lima 3 Portas 2 Gavetas Se você procura um Guarda-Roupa Solteiro com design moderno e compacto e excelente distribuição interna, o modelo Lima da marca Moval é uma excelente opção!",
                "Dimensões:<br> Altura: 182cm", "Largura: 82cm", "Profundidade: 47cm",
            ],

        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelGuardaRoupa);
    }
});

function funcStart ()
{
    global.guardaRoupa.dispatchEvent(new Event("change"));
}
funcStart();