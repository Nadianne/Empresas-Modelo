import * as global from './global.js';
global.Alicate.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Alicate"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([7]);
    global.setImgAllPath(["../imagens-madereira/Alicate/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Alicate Vonder Rebitador Manual' ,
        'Alicate de pressão vonder',
        'Alicate fame decapador e cortador',
        'Alicate bomba d’água 10 vonder',
        'Alicate cortag para nivelamento ',
        'Alicate eccofer bico longo polido',
        'Alicate de pressão vonder',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Alicate Vonder <span>Rebitador Manual</span>" ,
            "Alicate de pressão vonder<span> bico curvo 10</span> ",
            "Alicate fame <span>decapador e cortador</span>",
            "Alicate bomba d’água <span>10 polegadas vonder</span>",
            "Alicate cortag para nivelamento <span>de piso revestimento</span>",
            "Alicate eccofer bico longo polido <span>6 polegadas</span>",
            "Alicate de pressão vonder<span> 10 polegadas</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Com cabo em aço estampado revestido com plástico, proporcionando maior conforto no manuseio e um design único, o Rebitador Manual da Vonder veio para facilitar seus trabalhos manuais. Prático e funcional, é uma ferramenta usada especificamente para unir, de maneira segura, componentes e chapas dos mais variados materiais por meio de rebites de repuxo em alumínio",
                "01 Rebitador Manual Tipo Alicate Vonder", "04 Bicos de 2,4 mm, 3,2 mm (2 Peças) e 4,0 mm", "01 Chave",
            ],
            [
                "Produzido em aço cromo vanádio, proporcionando maior resistência e durabilidade Indicado para segurar, fixar, prender, travar, apertar e soltar diversos perfis de materiais.                 ",
                "Material do corpo do alicate: Aço cromo vanádio ", "Acabamento do alicate: Cromado fosco", "Comprimento total do alicate: 10 polegadas - 254 mm",
            ],
            
            [
                "O Alicate Decapador e Cortador PRO Fame possui duas lâminas precisas para decapar capas internas e externas. É usado em fios de 0,5 mm a 6 mm e possui um mecanismo de regulagem da pressão para cada espessura de cabo.",
                "Ajuste de pressão das lâminas de corte.", "Ajuste de medida do decape.<br>Alça em metal.", "Decape preciso sem danificar o condutor.",
            ],
            [
                "Alicate bomba é indicado para fixar e soltar tubos, torneiras, registros, entre outros. Produzido em aço cromo vanádio, proporciona maior resistência e durabilidade.",
                "Ajustável em 7 posições<br>Comprimento total do alicate: 10 polegadas", "Material do corpo do alicate: Aço cromo vanádio<br>Capacidade de abertura: 35mm", "Acabamento do alicate: Fosfatizado",
            ],
            [
                "O alicate foi desenvolvido para assegurar um nivelamento perfeito e garantir um acabamento de qualidade, sem bicos e sem os indesejáveis dentes. Ferramenta indispensável para colocação de pisos e revestimentos cerâmicos, principalmente os materiais retificados e polidos em grandes formatos.",
                "Espaçamento de 1.0, 1.5 ou 2.0mm", "Nivelamento total do revestimento", "Atende bem a porcelanatos e revestimento de pequeno, médio e especialmente grandes formatos com espessura de até 1.7cm",
            ],
            [
                "Alicate de bico reto é fabricado em aço cromo-vanádio, oferecendo alta resistência e durabilidade. Possui articulação suave que facilita o uso. O cabo possui formato ergonômico, ideal para aumentar o conforto e aderência no manuseio da peça.",
                "Fabricado em aço cromo-vanádio", "Alicate de bico reto", "Tamanho: 6 polegadas",
            ],
            [
                "Produzido em aço cromo vanádio, proporcionando maior resistência e durabilidade Indicado para segurar, fixar, prender, travar, apertar e soltar diversos perfis de materiais.",
                " Material do corpo do alicate: Aço cromo vanádio", "Acabamento do alicate: Cromado fosco", "Tamanho: 10 polegadas",
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