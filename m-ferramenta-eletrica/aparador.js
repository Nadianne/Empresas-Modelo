import * as global from './global.js';
global.aparador.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Apardor"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-industria/aparador/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Aparador grama 20v DeWALT',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Aparador grama 20v <span>DeWALT a bateria </span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Seu design leve e compacto proporciona melhor conforto minimizando esforços. O equipamento possui sistema GEAR DRIVE™ o qual garante maior potência para o corte. Sua faixa de corte é 300mm utilizando fios de 2mm. Além disso, o novo Aparador de Grama possui motor sem escovas de carvão o que garante uma melhor performance e autonomia do produto.",
                "Largura do produto:25 cm", "Peso do produto:5.22 Kg", "Comprimento do produto:89 cm",
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