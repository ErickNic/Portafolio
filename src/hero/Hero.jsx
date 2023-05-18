import clases from './Hero.module.css'

const Hero = () =>{
    return(
        <div className={clases.hero__Container}>
            <h1 className={clases.hero__name}>Me llamo Erick Martin Meza Alonso</h1>
            <p className={clases.hero__caption}>Soy un <span>desarrollador web junior</span> de <span>mente abierta, optimista, dinámico, creativo </span>y siempre dispuesto a ayudar a otros a crecer y a cooperar ofreciendo lo mejor de mí en cada momento.<br/><br/>Me gustan trabajar en <span>entornos simples, pero efectivos</span> entornos simples, pero efectivos y prefiero tomar como referencia el dicho<span> menos es más</span> en cada uno de mis proyectos.
            </p>
        </div>
    );

}

export default Hero