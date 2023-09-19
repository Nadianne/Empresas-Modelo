import * as global from './global.js';
global.Tomada.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Tomadas"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([8]);
    global.setImgAllPath(["../imagens-madereira/Tomada/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Tomada Dupla Fame Evidence 2P+T',
        'Conjunto Tomada Evidence 3 Módulos',
        'Tomada Dupla 2P+T 10A/250V ',
        'Tomada dupla 2P+T 10A/250V',
        'Interruptor 2 teclas com tomada de 1 sessão ',
        'Interruptor 1 tecla com tomada de 2 sessões ',
        'Conjunto 1 Interruptor Simples + 1 Tomada 10A ',
        'Interruptor 1 tecla simples bipolar  ',
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
            "Interruptor 1 tecla simples <span> bipolar 20A</span>",

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