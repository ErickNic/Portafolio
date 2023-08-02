import clases from './Hero.module.css'

const Hero = () =>{
    return(
        <div className={clases.hero__Container}>
            <h1 className={clases.hero__name}>Me llamo <span className={clases.hero__nameSpan}>Erick Martin Meza Alonso</span></h1>
            <p className={clases.hero__caption}>Soy un <span><b>desarrollador web junior</b></span> de <span><b>mente abierta, optimista, dinámico, creativo </b></span>y siempre dispuesto a ayudar a otros a crecer y cooperar ofreciendo lo mejor de mí en cada momento.<br/><br/>Me gustan trabajar en <span><b>entornos simples, pero efectivos</b></span> y prefiero tomar como referencia el dicho<span> <b>menos es más</b></span> en cada uno de mis proyectos.
            </p>
        </div>
    );

}

export default Hero