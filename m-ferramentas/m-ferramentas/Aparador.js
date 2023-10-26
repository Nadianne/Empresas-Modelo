import * as global from './global.js';
global.Aparador.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Aparador"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-madereira/Aparador/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Aparador De Grama 20v DeWalt',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Aparador De Grama 20v <span>DeWalt</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Diâmetro de corte de 330mm. <br>É sem fio. Seu motor tem uma velocidade de 6000rpm. Tipo de energia: bateria. <br>Pesa 5kg. Mantém a grama arrumada, chegando a todos os cantos necessários.",
                "", "", "",
            ],
            [
                "Lixadeira orbital 200W 1/4 de lixa Black Decker BS200 é perfeita para uso hobby e doméstico, pois conta com um potente motor de 200w; própria para lixamentos em madeira e metal, podendo ser aplicada em Janelas, Portas, Móveis e Prateleiras; Por ser compacta e contar com design ergonômico, a BS200 da Black + Decker é ideal para trabalhos em locais de difícil acesso;",
                "Potência: 200W;", "Orbitas por Minuto: 14.000 opm;", "Comprimento da base: 112mm;",
            ],
            [
                "A Lixadeira de Palma 7232 de 1⁄4 polegadas da Skil é a solução ideal para facilitar o trabalho de quem procura ferramentas com alto desempenho. Esse modelo oferece condições essenciais para que o profissional possa desenvolver um trabalho de qualidade excelente com menos esforço e maior rapidez. Ela possui um potente motor que produz oscilação de 14.000 opm e design compacto e ergonômico.",
                "Potência: 1.300W", "Voltagem da Bateria: 127 V", "",
            ],
            
            
        ],
   
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
   // global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelPincel);
    }
});

function funcStart ()
{
    global.Pincel.dispatchEvent(new Event("change"));
}
funcStart();