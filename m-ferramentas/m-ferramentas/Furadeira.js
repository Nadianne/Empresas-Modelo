import * as global from './global.js';
global.Furadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Furadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([8]);
    global.setImgAllPath(["../imagens-madereira/Furadeira/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Furadeira Black Decker 127v',
        'Furadeira Imp Bosch 127v',
        'Furadeira de Impacto Bosch 127v',
        'Furadeira IMP. Skil 570w  127v',
        'Furadeira Black Decker 127v',
        'Furadeira 450W Mandril DWT',
        'Parafusadeira furadeira Bosh 127v',
        'Martelete Perfurado Bosh 820W',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Furadeira Black Decker 127v<span> 550w</span>",
            "Furadeira Imp Bosch 127v<span> 650W</span>",
            "Furadeira de Impacto Bosch 127v<span> 450W</span>",
            "Furadeira IMP. Skil<span> 570w 127v</span>",
            "Furadeira Black Decker<span> 127v 560w </span>",
            "Furadeira 3/8 DWT<span> 127v 450W </span>",
            "Parafusadeira furadeira <span> Bosh 127v</span>",       
            "Martelete Perfurado Bosh <span>820W</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Com impacto. Mandril 3/8 (10mm). <br> Potência 560W. Rotações por minuto 0-2.800e impactos por minuto 0-45.000 IPM. Gatilho de dois dedos com trava para uso contínuo. Seletor de impacto ou rotação. Porta chave mandril no próprio cabo. Acompanha chave do mandril e manual",
                "", "", "",
            ],
            [
                "A Furadeira de Impacto Bosch GSB 13 RE possui 650W de potência, é super leve e compacta! Vem com empunhadeira emborrachada para o agarre seguro e confortável. Além disso, possui interruptor de velocidade variável e botão trava para trabalhos contínuos.",
                "Potência nominal absorvida: 650W", "Amplitude de aperto, min./máx: 1,5 – 13 mm", "",
            ],
            [
                "A Furadeira de Impacto Bosch GSB 450 RE, com potência de 450 W, é a melhor escolha para quem busca a confiança da marca Bosch por um preço arrasador. Mais confortável, com apenas 1,6 Kg, perfura alvenaria, madeira e metal, com e sem impacto, graças ao botão comutador. Realize, também, parafusamentos através da função de reversão e faça trabalhos contínuos com o auxílio do botão trava. Tudo isso com 1 ano de garantia e suporte da Assistência Técnica Bosch, que oferece o serviço mais rápido e barato que a concorrência.Botão comutador para perfurações com e sem impacto e botão-trava que facilita os trabalhos contínuos.",
                "Tamanho do mandril: 10 mm", "", "",
            ],
            [
                "Design ergonômico e compacta, permite aplicações em lugares de difícil acesso. 2 Velocidades, duas velocidades de giro do motor, uma velocidade mais lenta e outra mais alta. A mais leve da categoria!",
                "Potência: 570 W", "Mandril: 10 mm", "Peso: 1.2 kg",
            ],
            [
                "Furadeira de Impacto com 9 Brocas 1/2 13mm 220V 560W Black+Decker ferramentas BLACK+DECKER oferecem tudo que o usuário precisa: praticidade, variedade, confiança e ótimo custo-benefício. ",
                "Potência: 560W <br> Velocidade: 0-2800 RPM", "Impactos:  0-45.000 IPM <br> Mandrill 3/8 (10mm) <br> Peso 1,50Kg ", "Voltagem 220V",
            ],
            [
                "Furadeira de impacto é indicada para metal e madeira na função sem impacto e, na função com impacto, para concreto e alvenaria. Recomenda-se utilizar a ferramenta com acessórios adequados. Possui interruptor eletrônico com pré-seleção de velocidade, o qual permite controlar a rotação da máquina, possibilitando iniciar um furo com uma rotação baixa e aumentar gradativamente de acordo com a necessidade de perfuração. Conta também com sistema reversível, que facilita a retirada da broca caso ela trave durante a perfuração. Possui botão trava do interruptor para trabalhos contínuos, punho auxiliar e limitador de profundidade, conferindo maior praticidade ao operador. Conta ainda com motor com dupla isolação, que garante maior segurança. ",
                "", "", "",
            ],
            [
                "A Parafusadeira e Furadeira a Bateria Bosch GSR 120-LI vem com baterias de 2,0Ah! A maior autonomia da categoria, garantindo mais produtividade para os seus trabalhos! É super compacta e leve, e possui maior vida útil devido ao sistema ECP que protege eletronicamente as células da bateria. Além disso, a ferramenta é 100% compatível com baterias e carregadores 12V Bosch.",
                "", "", "",
            ],
            [
                "O Martelete Perfurador SDS Plus 820W GBH 2-24 D Bosch oferece muita produtividade aos profissionais, em perfurações de concreto na construção ou reformas em geral! Além dos sistemas de segurança, ele garante praticidade, conforto e eficiência ao usuário durante qualquer serviço.",
                "Tensão Elétrica: 220v", "Potência: 820 W", "Peso do produto: 2,80 Kg",
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