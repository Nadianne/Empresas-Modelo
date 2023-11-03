import * as global from './global.js';
global.Trena.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Trena"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([5]);
    global.setImgAllPath(["../imagens-madereira/Trena/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Trena starrett  5MT',
        'Trena starrett  3MT',
        'Trena de aço 5MT',
        'Trena de Fibra 10MT',
        'Trena de Fibra 20MT'
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Trena Amarela de 5M <span>starrett</span>",
            "Trena Amarela de 3M <span>starrett</span>",
            "Trena Manual Com Trava 5MTX19MM <span> Standard</span>",
            "Trena De Fibra Longa 10 Metros <span>Vonder Para Medições</span>",
            "Trena de Fibra 20 Metros <span>Starfer</span> "

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Desenvolvida trazendo a mais alta tecnologia e durabilidade, é a solução ideal para quem busca o melhor custo-benefício",
                "Largura da fita: 19mm", "Largura da fita: 19mm", "Largura da fita: 19mm",
            ],
            [
                "Desenvolvida trazendo a mais alta tecnologia e durabilidade, é a solução ideal para quem busca o melhor custo-benefício",
                "Trena de bolso amarela 3 metros", "Durabilidade extrema para profissionais, especialmente da área da construção civil", "Desenho anatômico e a robustez necessária para serviços pesados",
            ],
            [
                "Trena Standard da Irwin é muito leve, ergonômica e resistente. Seu gancho na ponta é extralongo, permitindo realizar facilmente medições, mesmo com a fita torcida.",
                "Largura: 19mm", "Comprimento: 5m - 16ft", "Ref: IW13947",
            ],
            [
                "Trena de fibra longa 10 metros vonderCaixa fechada em abs de alta resistência, fita com revestimento em pvc amarelo resistente à umidade e variações de temperatura. ",
                "Largura: 12.5mm", "Comprimento: 10 m", "Trena de fibra longa",
            ],
            [
                "Trena de fibra de vidro com caixa fabricada com plástico ABS laranja resistente a altos impactos e alta visibilidade Tambor com rebobinamento rápido.",
                "Largura: 12.5mm", "Comprimento: 10 m", "Lona fibra de vidro suporte manivela metrica",
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