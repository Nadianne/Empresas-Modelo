import * as global from './global.js';
global.Oculos.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Oculos"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-madereira/Oculos/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Óculos de Proteção Fume Jaguar' ,
        'Óculos de Proteção Incolor Jaguar',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Óculos de Proteção Fume Jaguar <span>KALIPSO</span>" ,
            "Óculos de Proteção Incolor Jaguar <span>KALIPSO</span>" ,

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Óculos de segurança, constituídos de um arco de material plástico preto com um pino central e duas fendas nas extremidades utilizadas para o encaixe de um visor de policarbonato. Suporte nasal confeccionado no mesmo material da lente, arredondado, adaptável e confortável. Lentes com tratamento antirrisco. Protegem contra raios UVA e UVB. Haste com ajustes de comprimento.",
                "", "", "",
            ],
            [
                "Óculos de segurança constituídos de arco de material plástico (náilon) com meia-proteção nas bordas, um pino central e duas fendas nas extremidades da armação utilizadas para o encaixe de visor confeccionado em policarbonato com um furo central para encaixe do pino do arco, apoio nasal e protetor lateral injetado do mesmo material do visor com uma fenda em cada extremidade para o encaixe no arco, hastes tipo espátula confeccionadas do mesmo material do arco e constituídas de duas peças: semi-haste vazada com uma das extremidades presas ao arco por meio de parafuso metálico e outra semi-haste vazada que se encaixa na semi-haste anterior e permite regulagem de tamanho.",
                "Proteção contra raios UVA e UVB", "Lentes com tratamento anti-risco.", "Tratamento antiembaçante.",
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