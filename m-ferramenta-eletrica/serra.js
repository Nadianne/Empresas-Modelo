import * as global from './global.js';
global.serra.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Serra"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([5]);
    global.setImgAllPath(["../imagens-industria/serra/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Serra circular BLACK & DECKER ',
        'Serra Tico-Tico BLACK & DECKER ',
        'Serra Circular BLACK & DECKER ',
        'Serra Circular Com Mesa 10 Scd 1800',
        'Serra de fita vertical para madeira ',
       
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Serra circular <span>BLACK & DECKER 14 1500W 127v </span>",
            "Serra Tico-Tico <span>BLACK & DECKER 550w</span>",
            "Serra Circular <span>BLACK & DECKER  1400W 220V </span>",
            "Serra Circular Com Mesa <span>10 Scd 1800</span>",
            "Serra de fita vertical para madeira <span>375 Watts</span>",
               

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Serra circular 7 1/4; potência: 1.500w; rotações por minuto: 550 rpm; sapata com ajuste de profundidade e ajuste de cortes em ângulo de 0º a 45º; empunhadura ergonômica para máximo controle; acompanha: guia de corte, lâmina de 18 dentes e manual; peso: 3,7",
                "Potência: 1.500W","Rotação por minuto: 550 Rpm","Peso: 3,5KG <br> ",
            ],
            [
                "Serra Tico-Tico 550w com Ação Pendular Black Decker Este modelo de serra tico-tico possui velocidade variável e ação pendular. Sua velocidade de 550W de potência permite com que o seu trabalho seja agilizado com maior eficiência.",
                "Potência: 550W"," Velocidade: 3000 gpm<br>Interruptor: 2 Pinos"," Ação Pendular: Sim",
            ],
            [
                "Serra circular 7.1/4 é indicada para marceneiros, montadores de móveis e instaladores em geral. Possui sapata com ajuste de profundidade e ajuste de cortes em ângulo de 0º a 45º. Empunhadura ergonômica para máximo controle e conforto do usuário. ",
                " Tensão: 220V <BR> Peso: 3,5KG","Potência: 1.400W","Rotações por minuto: 550 RPM",
            ],
            [
                "Aplicações/dicas de uso: Indicada para cortar madeiras e derivados.Conteúdo da embalagem: 1 Serra circular de bancada. Acompanha: 1 lâmina de serra de 10 (16,0 mm), 1 chave allen, 1 chave de boca e 1 chave estrela.",
                "Modelo: SCD 1800","Potência: 1.800 W","Largura da mesa: 480,0 mm <br> Altura da mesa: 890,0 mm",
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
        global.setChecked(global.labelserra);
    }
});

function funcStart ()
{
    global.serra.dispatchEvent(new Event("change"));
}
funcStart();