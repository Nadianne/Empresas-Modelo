import * as global from './global.js';
global.Kit.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Kit Acessórios"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([3]);
    global.setImgAllPath(["../imagens-madereira/Kit/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Kit De Acessórios Plásticos',
        'Kit Acessórios Banheiro De Aço ',
        'Kit Talita acessórios para banheiro ',
        'Tomada dupla 2P+T 10A/250V',
        'Interruptor 2 teclas com tomada de 1 sessão ',
        'Interruptor 1 tecla com tomada de 2 sessões ',
        'Conjunto 1 Interruptor Simples + 1 Tomada 10A ',
        'Interruptor 1 tecla simples bipolar  ',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Kit De Acessórios Plásticos <span> Fame</span>",
            "Kit Acessórios Banheiro De Aço<span>  Inox Com 6 Peças </span>",
            "Kit Talita acessórios para banheiro<span> 5 peças</span>",
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
                "A linha de Acessórios para banheiro é fabricada em termoplástico de alta resistência, trazendo a já conhecida qualidade dos mais de 70 anos FAME.",
                "O kit contém:<br> 2 Cabides <br>1 Saboneteira", " 1 Porta-Toalha", "1 Porta-Toalha 2 em 1 - Porta-Toalha e Ganchos <br> 1 Papeleira",
            ],
            [
                "Kit para banheiro Linha Inoox com 6 peças. Acessórios para banheiros 100% Metal, produzidos em aço inox 430 e hastes em alumínio anodizado brilhante.",
                "O kit contém:<br> Papeleira <br>1 Saboneteira", " Cabide", "Toalheiro <br> Porta-toalha <br> Porta-shampoo ",
            ],
            [
                "Em busca de acessórios para dar um requite no seu banheiro na hora de organizar, nos separamos esse lindo modelo, produzido com materiais de qualidade.",
                "O kit contém:<br> Papeleira <br>1 Saboneteira", " Cabide-duplo", "Toalheiro <br> Porta-toalha reto",
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
        global.setChecked(global.labelkit);
    }
});

function funcStart ()
{
    global.Kit.dispatchEvent(new Event("change"));
}
funcStart();