import Recipe from "../../../components/Recipe/Recipe";

export default function Brigadeiro() {
    return(
        <div>

            <Recipe 
            name ="Brigadeiro de Caipirinha"
            picture="https://img.itdg.com.br/tdg/images/recipes/000/130/281/331399/331399_original.jpg?mode=crop&width=710&height=400"
            time="90 min"
            servings="30 porções"
            >
                <h2>Ingredientes</h2>
                
                <ul> 
                    <li>2 latas de leite condensado</li>
                    <li>2 colheres (sopa) de margarina</li>
                    <li>cachaça a gosto</li>
                    <li>suco de 2 limões</li>
                    <li>2 colheres (sopa) de essência de limão</li>
                    <li>2 gotas de corante alimentício verde</li>
                    <li>raspas de limão a gosto</li>
                    <li>chocoballs, coco ralado ou granulado para decorar</li>
                </ul>

                <h2>Modo de Preparo</h2>

                <ol>
                    <li>Leve ao fogo o leite condensado e a margarina, mexendo sempre, até virar uma massa que desgrude do fundo da panela. Apague e fogo e acrescente a cachaça. Ligue o fogo novamente por mais uns 5 minutos. Acrescente o suco de limão, a essência e as raspas de limão. Volte ao fogo por mais 5 minutos, cuidado para não deixar passar do ponto e queimar.</li>
                    <li>Unte um prato ou travessa grande e coloque a massa, espere esfriar bem.</li>
                    <li>Com o auxilio de uma colher untada e com as mãos bem untadas modele os brigadeiros e passe no coco ralado, granulado ou chocoballs.</li>
                </ol>

                <h3>Informações adicionais</h3>
                <p>Obs.: A massa não ficara dura ao voltar várias vezes ao fogo, já que vai se usar bastante líquido, fazendo também que a massa fique bem mais cremosa do que o brigadeiro normal, assim precisando usar bastante margarina para modelar. Para deixar o coco ralado e as chocoballs verdes é só acrescentar um pouco de corante verde com essência de limão (não acrescente o corante puro porque não tingirá).</p>

            </Recipe>
        </div>
    )
}