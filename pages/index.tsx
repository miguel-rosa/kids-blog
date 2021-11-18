/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img alt="Amigos do planeta" className={styles.logo} src="/amigos-do-planeta.png"/>
      </header>
      <div className={styles.hero}>
    
      <h1 className={styles.title}>
        <span className={styles.preText}>
          Aquecimento Global:
        </span>
        O que é, suas consequências e como reduzir o impacto ambiental </h1>
      </div>
        
      <main className={styles.main}>
        <h2> O que é </h2>
        <p> O aquecimento global é o aumento da temperatura do planeta provocado pelo efeito estufa.
          O efeito estufa acontece porque os humanos poluem o planeta com gases do tóxicos que impedem o calor gerado pelo sol de sair da terra.
        </p>
        <img alt="Planeta" src="/planeta-2.png"/>
        <h2> Suas consequências</h2>
        <p> Com o aquecimento global as altas temperaturas fazem as calotas polares derreterem e os nossos amigos ursos polares, pinguins, elefantes marinhos perderem suas casas.Além disso o derretimento de todo esse gelo faz com que tenha mais água no oceano e o seu nível suba alagando várias cidades litorâneas nossas.
        Muitas cordilheiras no mundo estão derretendo e perdendo suas camadas de neve e por isso muitas pessoas vão ter que parar de esquiar em breve.Os Alpes na França e na Suíça já perderam cerca de 40% de sua neve.
        Outra consequência do aquecimento global é o aumento de desertos que acaba provocando a morte de muitos animais e plantinhas; com o aumento da temperatura causada pelo aquecimento global também aumentam as secas, a falta de água potável e dificuldades na produção de alimentos.
        Com o aumento das temperaturas provocadas pelo aquecimento global as águas dos oceanos evaporam mais e provocam desastres climáticos como furacões, tufões e ciclones cada vez mais fortes.
        </p>
        <img alt="Pinguim" src="/pinguim.png"/>
        <h2> Como reduzir o impacto ambiental</h2>
        <p>Para combater o aquecimento global e reduzir o impacto ambiental precisamos diminuir a emissão de poluentes no ar, queimadas e desmatamento.Para alcançar isso muitas reuniões internacionais com lideres de países do mundo todo ocorrem anualmente.
        Mas também podemos fazer nossa parte e sermos amigos do planeta.
        É muito fácil, a seguir temos 7 atitudes que podemos fazer junto com as nossas famílias para reduzir o impacto ambiental e minimizar os danos causados pelo aquecimento global.
        </p>
        <img alt="Planeta" src="/planeta-1.png"/>
        <ol type = "1">
         <li>Economizar água</li>
         <li>Evite o consumo exagerado de energia</li>
         <li>Separar os lixos orgânicos e recicláveis</li>
         <li>Diminuir o uso de automóveis</li>
         <li>Consumir apenas o necessário e evitar compras compulsivas</li>
         <li>Utilizar produtos ecológicos e biodegradáveis</li>
         <li>Não jogar lixos nas ruas</li>
        </ol>    
        <img alt="Protesto" src="/protesto.png"/> 
      </main>
    </div>
  )
}

export default Home
