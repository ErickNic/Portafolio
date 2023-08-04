 const algoData = [
    {
        id:'1',
        name:'Algo1',
        tags:['nodejs','express','react'],
        description:'ALgo sin mucho que agregar pero algo bueno',
        imageURL:'https://www.publicdomainpictures.net/pictures/260000/velka/chipmunk-15244135136JA.jpg'
    },
    {
        id:'2',
        name:'Algo2',
        tags:['nodejs','express','react'],
        description:'ALgo sin mucho que agregar pero algo bueno',
        imageURL:'https://www.publicdomainpictures.net/pictures/260000/velka/chipmunk-15244135136JA.jpg'
    },
    {
        id:'3',
        name:'Algo3',
        tags:['nodejs','express','react'],
        description:'ALgo sin mucho que agregar pero algo bueno',
        imageURL:'https://www.publicdomainpictures.net/pictures/260000/velka/chipmunk-15244135136JA.jpg'
    }
]
import img  from '../../assets/imagen/imagen.jpg'
import react, { useEffect, useState } from 'react';
import clases from './ProyectCard.module.css'
import ArrowLeftComponent from '../icons/arrowLeft';
import ArrowRightComponent from '../icons/arrowRight';
import { SliderProvider } from '../context/contextslider';
import { DinamicDivs } from '../dinamicDiv/dinamicDiv';

const ProyectCard = (props) =>{
    const [hover,setHover] = useState(false);
    const handleMouseOver =() =>{
        setHover(status => !status)
    }
    const handleMouseleave =() =>{
        setHover(status => !status) 
    }
    return(
        <SliderProvider>
            <div className={clases.ProyectCard_Container}>
            <div className={clases.arrowLeft_container}>
                <ArrowLeftComponent/>   
            </div>
            <div className={clases.content__container}>
                <img onMouseEnter={handleMouseOver} onMouseLeave={handleMouseleave} src='https://img.freepik.com/vector-gratis/acuarela-real-fondo-rojo-san-valentin_1340-4006.jpg'  alt="React Image" className={clases.img}/>
                {!!hover&&<DinamicDivs active={hover}/>}
            </div>
            <div className={clases.arrowRight_container}>
                <ArrowRightComponent/>
            </div>
        </div>
        </SliderProvider>
    )
}

export {algoData, ProyectCard}