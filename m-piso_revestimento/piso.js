import * as global from './global.js';
global.Piso.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Piso"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([3]);
    global.setImgAllPath(["../imagens-madereira/piso/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Piso Cerbras Quartzo',
        'Piso Rox Dakar ',
        'Piso Triunfo Bali ',
        'Tomada dupla 2P+T 10A/250V',
        'Interruptor 2 teclas com tomada de 1 sessão ',
        'Interruptor 1 tecla com tomada de 2 sessões ',
        'Conjunto 1 Interruptor Simples + 1 Tomada 10A ',
        'Interruptor 1 tecla simples bipolar  ',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Piso Cerbras Quartzo <span> Branco </span>",
            "Piso Rox Dakar <span> 57×57 (Cx. 2,30m²) </span>",
            "Piso Triunfo Bali <span>57x57 Cx:3.30 metros</span>",
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
                "A Cerâmica Tipo A Quartzo Branco Cerbras tem tonalidade branca com acabamento lateral Bold (borda ).",
                "Dimensões:57x57cm", " Espessura:7,8mm", "Caixa: 2.62m",
            ],
            [
                "Os Pisos Cerâmicos Colorado possuem a medida de 57x57cm e fazem parte da nossa coleção Natura. Sua superfície com relevo e acabamento acetinado é normalmente indicado para pisos em quartos, salas, cozinhas, banheiros e garágens com médio tráfego agregando muito mais estilo e conforto em seu ambiente.",
                "Dimensões:57x57cm", "Caixa: 2.30m",""
            ],
            [
                "O piso cerâmico é sem dúvida um dos pisos mais versáteis encontrados no mercado, podendo ser utilizado em ambientes internos e externos. Fácil de limpar.                .",
                "Dimensões:57x57cm", "Caixa: 3.30m",""
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
        global.setChecked(global.labelPiso);
    }
});

function funcStart ()
{
    global.Piso.dispatchEvent(new Event("change"));
}
funcStart();