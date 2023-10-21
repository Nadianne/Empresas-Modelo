import * as global from './global.js';
global.Assoalhado.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Assoalhado"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([4]);
    global.setImgAllPath(["../imagens-industria/Assoalhado/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Assoalho de compensado naval 18mm - 3,00 x 2,5 ',
        'Assoalho de compensado naval 18mm - 6,20 x 2,44',
        'Assoalho de compensado naval 18mm - 5,50 x 2,50', 
        'Assoalho de compensado naval 18mm - 6,50 x 2,50',
        'Assoalho de compensado naval 18mm - 7,50 x 2,44',
       
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Assoalho de compensado naval <span>18mm - 3,00 x 2,5 </span>",
            "Assoalho de compensado naval <span>18mm - 6,2 x 2,44 </span>",
            "Assoalho de compensado naval <span>18mm - 5,50 x 2,50 </span>",
            "Assoalho de compensado naval <span>18mm - 6,50 x 2,50 </span>",
            "Assoalho de compensado naval <span>18mm - 7,50 x 2,44 </span>",
               

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "O Compensado Naval Plastificado é recomendado para o uso externo em fôrmas para concreto, com necessidade de alto índice de aproveitamentos. Pode ser usado também para tapumes, bandejas, barracos, etc.",
                "Desempenho: Alta resistência à abrasão superficial e grande número de reutilizações.","Comprimentos: 2500/2440 mm; <br> Larguras: 1250/1220 mm;","Espessuras: 18mm.",
            ],
            [
                "O Compensado Naval Plastificado é recomendado para o uso externo em fôrmas para concreto, com necessidade de alto índice de aproveitamentos. Pode ser usado também para tapumes, bandejas, barracos, etc.",
                "Desempenho: Alta resistência à abrasão superficial e grande número de reutilizações.","Comprimentos: 2500/2440 mm; <br> Larguras: 1250/1220 mm;","Espessuras: 18mm.",
            ],
            [
                "O Compensado Naval Plastificado é recomendado para o uso externo em fôrmas para concreto, com necessidade de alto índice de aproveitamentos. Pode ser usado também para tapumes, bandejas, barracos, etc.",
                "Desempenho: Alta resistência à abrasão superficial e grande número de reutilizações.","Comprimentos: 2500/2440 mm; <br> Larguras: 1250/1220 mm;","Espessuras: 18mm.",
            ],
            [
                "O Compensado Naval Plastificado é recomendado para o uso externo em fôrmas para concreto, com necessidade de alto índice de aproveitamentos. Pode ser usado também para tapumes, bandejas, barracos, etc.",
                "Desempenho: Alta resistência à abrasão superficial e grande número de reutilizações.","Comprimentos: 2500/2440 mm; <br> Larguras: 1250/1220 mm;","Espessuras: 18mm.",
            ],
            [
                "A Serra de fita vertical para madeira 375 Watts capacidade de 100mm - RZ-SF10/M2 da Razi realiza cortes com muita precisão e qualidade garantidas da marca, que é especializada na comercialização de equipamentos para os setores moveleiro, madeireiro e metal mecânico, se consolidando como uma das principais empresas do segmento no Brasil.",
                "Motor 1/2CV – 220V monofásico ","Altura Máxima de Corte 100mm"," Largura máxima de corte 240mm ",
            ],
          
           
        ],
   
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
   // global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelAssoalhado);
    }
});

function funcStart ()
{
    global.Assoalhado.dispatchEvent(new Event("change"));
}
funcStart();