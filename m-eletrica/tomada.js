import * as global from './global.js';
global.Tomada.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Tomadas e interruptor"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([13]);
    global.setImgAllPath(["../imagens-madereira/Tomada/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Tomada Dupla Fame Evidence 2P+T',
        'Conjunto Tomada Evidence 3 Módulos',
        'Tomada Dupla Fame 2P + T 10A e 250V',
        'Tomada dupla Fame 2P + T 10A/250V',
        'Interruptor 2 teclas com tomada de 1 sessão ',
        'Interruptor 1 tecla com tomada de 2 sessões ',
        'Conjunto 1 Interruptor Simples + 1 Tomada',
        'Interruptor 1 tecla simples bipolar Linha Blanc  ',
        'Tomada Padrão 2P + T 10A 250V Evidence Fame  ',
        'Tomada Dupla Modular 2P+T 20A 250v  ',
        'Tomada 2P+T com Placa 20A 250V',
        'Interruptor 3 teclas simples 16A Fame',
        'Interruptor Simples 1 Tecla 16A',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Tomada Dupla Fame <span> Evidence 2P+T </span>",
            "Conjunto Tomada Evidence<span> 3 Módulos</span>",
            "Tomada Dupla 2P+T<span> 10A/250V</span>",
            "Tomada dupla 2P+T<span> 10A/250V</span>",
            "Interruptor 2 teclas<span> com tomada de 1 sessão simples</span>",
            "Interruptor 1 tecla <span> com tomada de 2 sessões simples</span>",
            "Conjunto 1 Interruptor Simples<span>  + 1 Tomada 10A</span>",
            "Interruptor 1 tecla simples <span> bipolar 20A<br></span>  <br><br>",
            "Tomada Padrão 2P + T 10A <span> 250V Evidence</span>",
            "Tomada Dupla Modular 2P+T 20A <span> distanciadas Modular</span>",
            "Tomada 2P+T com Placa Modulare <span> 20A 250V</span>",
            "Interruptor Simples 16A 4X2 3 Teclas Branco Modulare Fame. <span> Bivolt</span>",
            "Interruptor Simples 1 Tecla Fame 16A. <span> 250V 4x2</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Termoplásticos Isolantes e partes condutoras em liga de cobre",
                "Tamanho:4x2", "Voltagem:20A/250V", "Dimensões AxLxP (mm): 120x80",
            ],
            [
                "Tomada Fame Evidence 3 Módulos 2P+T Branco 10A",
                "Tamanho:4x2", "Voltagem:10A / 250V", "Dimensões AxLxP (mm): 120x80",
            ],
            [
                "Placas e Módulos com Tratamento Anti - U.V.A. e U.V.B",
                "Tamanho:4x2", "Voltagem:10A / 250V", "Dimensões AxLxP (mm): 120x80",
            ],
            [
                "Placas em ABS: Superfície anti-estática e anti-aderente.",
                "Tamanho:4x2", "Voltagem:10A / 250V", "Dimensões AxLxP (mm): 120x80",
            ],
            [
                "Conjunto com 2 interruptor + tomada 10A ",
                "Tamanho:4x2", "Peso do Produto: 0,10 Kg", "Dimensões AxLxP (mm): 120x80",
            ],
            [
                "Placas e Módulos com Tratamento Anti - U.V.A. e U.V.B. - Acabamento monocromático",
                "Tamanho:4x2", "Peso do Produto: 0,10 Kg", "Dimensões AxLxP (mm): 120x80",
            ],
            [
                "Linha modular de interruptores e tomadas - fame modulare",
                "Tamanho:4x2", "Peso do Produto: 0,10 Kg", "Dimensões AxLxP (mm): 120x80",
            ],
            [
                "Interruptor Bipolar Simples 1 Tecla Linha Blanc",
                "Tamanho:4x2", "Peso do Produto: 0,10 Kg", "Dimensões AxLxP (mm): 120x80",
            ],
            [
                "A Série Evidence FAME é uma linha composta por Suportes, Placas e Módulos com acabamento brilhante.",
                "Altura:21 cm", "Largura:11,50 cm", "Comprimento:4,50 cm",
            ],
            [
                "Produtos de qualidade, com certificação INMETRO. Tomadas e interruptores modulares são peças seguras, práticas e de fácil instalação.",
                "Altura:13 cm", "Largura:7 cm", "Comprimento:3.5 cm",
            ],
            [
                "Série Modulare um conjunto de Placas-Suporte e Mecanismos, com design moderno e arrojado que possibilitam inúmeras combinações, instalação prática e acabamento perfeito, sem aparência dos parafusos.",
                "Altura:12 cm", "Largura:7 cm", "Comprimento:8 cm",
            ],
            [
                "Interruptor Simples 16A 4X2 3 Teclas Branco Modulare Fame Bivolt. Materiais Plásticos e Ligas de Metálicas.",
                "Altura:12 cm", "Largura:3,5 cm", "Comprimento:8 cm",
            ],
            [
                "A Série Evidence da Fame uma linha com acabamento brilhante que recebe tratamento Anti – U.V.A. e U.V.B. que não amarela com o tempo e com sistema de encaixe modular.",
                "Altura:12 cm", "Profundidade:3,8 cm", "Comprimento:8 cm",
            ],
        ],
   
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
   // global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelTomada);
    }
});

function funcStart ()
{
    global.Tomada.dispatchEvent(new Event("change"));
}
funcStart();