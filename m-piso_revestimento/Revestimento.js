import * as global from './global.js';
global.Revestimento.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Revestimento"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([9]);
    global.setImgAllPath(["../imagens-madereira/revestimento/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Revestimento HD Ômega  ',
        'Revestimento triunfo 33X57 ',
        'Revestimento Madrepérola  ',
        'Revestimento triunfo vintage ',
        'Revestimento Triunfo Alpes ',
        'Revestimento Triunfo Liblon ',
        'Revestimento Triunfo Unique  ',
        'Revestimento triunfo bello  ',
        'Revestimento HD Elegance ',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Revestimento HD Ômega <span> 33x57 - Triunfo</span>",
            "Revestimento triunfo 33X57  <span> HD VIDRIO</span>",
            "Revestimento de Parede  <span> Triunfo HD Madrepérola</span>",
            "Revestimento triunfo vintage <span> prata 33x57</span>",
            "Revestimento Triunfo Alpes  <span> 33x57 Brilhante </span>",
            "Revestimento Triunfo Liblon  <span> Plus 33x57 </span>",
            "Revestimento Triunfo Unique  <span> 33x57 HD</span>",
            "Revestimento triunfo bello  <span> 33x57 Bello</span>",
            "Revestimento HD  <span> 33x57 Elegance Extra</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "<br>Revestimento indicado para paredes internas e externas cobertas.",
                "<br>Marca: Triunfo", "Tipologia: Brilhante", "Formato: 33 x 57cm <br> Caixa: 2.50 metros",
            ],
            [
                "<br>Com um design HD Vidrio Bege, este revestimento oferece uma estética moderna e atemporal. Suas dimensões de 33x57 cm proporcionam uma cobertura eficiente de 2,50 metros quadrados por caixa, tornando-o uma opção prática e econômica para projetos de revestimento de interiores.",
                "Esperssura: 6,8 mm", "Material: Argila", "Formato: 33 x 57cm <br> Caixa: 2.50 metros",
            ],
            [
                "<br>Revestimento de parede bold 33x57cm HD Madrepérola Lyara branco e preto Triunfo.Fácil aplicação e conservação.Design em alta definição",
                "Marca: Triunfo", "Tipologia: Brilhante", "Formato: 33 x 57cm <br> Caixa: 2.50 metros",
            ],
            [
                "<br>Ideal para iluminação geral e decorativa em substituição às lâmpadas incandescentes, econômicas.",
                "Marca: Triunfo", "Tipologia: Brilhante", "Formato: 33 x 57cm <br> Caixa: 2.50 metros",
            ],
            [
                "<br>Revestimento de parede bold 33x57cm Alpes branco Triunfo. Fácil aplicação e conservação.",
                "Marca: Triunfo", "Tipologia: Brilhante", "Formato: 33 x 57cm <br> Caixa: 2.50 metros",
            ],
            [
                "<br>Revestimento 33x57 Leblon Plus RMA Extra TRIUNFO.",
                "Marca: Triunfo", "Tipologia: Brilhante", "Formato: 33 x 57cm <br> Caixa: 2.50 metros",
            ],
            [
                "<br>Revestimento 33x57 Unique HD Brilhante Extra TRIUNFO.",
                "Marca: Triunfo <br> Indicação de Uso: Área Interna", "Tipologia: Brilhante", "Formato: 33 x 57cm <br> Caixa: 2.50 metros",
            ],
            [
                "<br>O revestimento impressiona com seu design diferenciado que combina com diversos ambientes, deixando um ar moderno e contemporâneo. Os revestimentos são altamente resistentes.",
                "Marca: Triunfo", "Formato: 33 x 57cm", "Caixa: 2.50 metros",
            ],
            [
                "<br>Revestimento 33x57 Elegance HD Extra TRIUNFO.",
                "Marca: Triunfo", "Formato: 33 x 57cm", "Caixa: 2.50 metros",
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