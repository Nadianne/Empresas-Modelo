import * as global from './global.js';
global.Kit.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Kit Acessórios"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([6]);
    global.setImgAllPath(["../imagens-madereira/Kit/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Kit De Acessórios Plásticos',
        'Kit Acessórios Banheiro De Aço ',
        'Kit Talita acessórios para banheiro ',
        'Kit De Acessórios para Banheiro Città',
        'Kit para Banheiro Japi 05 Peças ABS ',
        'Kit Banheiro Acessórios de Metal e Abs',
        'Conjunto 1 Interruptor Simples + 1 Tomada 10A ',
        'Interruptor 1 tecla simples bipolar  ',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Kit De Acessórios Plásticos <span> Fame</span>",
            "Kit Acessórios Banheiro De Aço<span>  Inox Com 6 Peças </span>",
            "Kit Talita acessórios para banheiro<span> 5 peças</span>",
            "Kit De Acessórios <span>5 Peças Cromado</span>",
            "Kit para Banheiro Japi <span> 05 Peças ABS</span>",
            "Kit Banheiro Acessórios<span>de Metal e Abs Cromado </span>",
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
                "Seu banheiro ficará muito mais elegante com os acessórios da linha città! A resistência do aço inox está presente na concha da saboneteira e na tampa da papeleira, a durabilidade do alumínio polido/anodizado brilhante.",
                "O kit contém:<br> Papeleira <br>1 Saboneteira", " Cabide", "Toalheiro <br> Porta-toalha reto 40 cm <br> Porta-shampoo 10 X 31",
            ],
            [
                "Kit para Banheiro Japi 05 Peças ABS Cromado com Kit Instalação Kit prático e resistente. Acabamento em ABS cromado, ideal para combinar com o seu banheiro.",
                "O kit contém:<br> 01 Porta Toalha Bastão (40cm) <br> 01 Porta Toalha Argola (15cm)", " 01 Saboneteira <br> 01 Cabide Simples", " 01 Papeleira Parafusos <br> Buchas para Instalação Papeleira",
            ],
            [
                "Kit de Acessórios para banheiro modelo Linha Certa em Metal, Aço Inox e Alumínio, e ABS Cromado no acabamento.Acessórios de decoração e organização para lavabo e banheiros num geral, acomodando bem as toalhas, sabonete, roupão, papel higiênico. ",
                "O kit contém:<br>Papeleira com tampa em inox para banheiro<br>Papeleira com tampa em inox para banheiro", "Cabide para banheiro<br>", "Toalheiro <br> Porta-toalha reto 40 cm <br>",
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