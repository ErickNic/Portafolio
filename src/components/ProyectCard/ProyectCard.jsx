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
        imageURL:'https://www.publicdomainpictures.net/pictures/420000/velka/image-163578840503U.jpg'
    },
    {
        id:'3',
        name:'Algo3',
        tags:['nodejs','express','react'],
        description:'ALgo sin mucho que agregar pero algo bueno',
        imageURL:'https://www.publicdomainpictures.net/pictures/530000/velka/black-kitten-witch-outfit-16914716680F9.jpg'
    },
    {
        id:'3',
        name:'Algo3',
        tags:['nodejs','express','react'],
        description:'ALgo sin mucho que agregar pero algo bueno',
        imageURL:'https://www.publicdomainpictures.net/pictures/480000/velka/vintage-auto-rennen-plakat.jpg'
    },
    {
        id:'3',
        name:'Algo3',
        tags:['nodejs','express','react'],
        description:'ALgo sin mucho que agregar pero algo bueno',
        imageURL:'https://www.publicdomainpictures.net/pictures/450000/velka/mermaid-vintage-art.jpg'
    }
]
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import img  from '../../assets/imagen/imagen.jpg'
import react, { useContext, useEffect, useRef, useState } from 'react';
import clases from './ProyectCard.module.css'
import ArrowLeftComponent from '../icons/arrowLeft';
import ArrowRightComponent from '../icons/arrowRight';
import {sliderContext } from '../context/contextslider';
import { DinamicDivs } from '../dinamicDiv/dinamicDiv';

const ProyectCard = (props) =>{
    const {index} = useContext(sliderContext)
    const [hover,setHover] = useState(false);

    const handleMouseOver =() =>{
        setHover(status => !status)
    }
    const handleMouseleave =() =>{
        setHover(!hover) 
    }

    return(
    <div className={clases.ProyectCard_Container}>
        <div className={clases.arrowLeft_container}>
            <ArrowLeftComponent/>   
        </div>
        <div className={clases.content__container}>
            <img src={algoData[index.count].imageURL} className={clases.img}/>
        </div>
        {/* <h1 onClick={dispatch({type:'RESET'})}>XD</h1> */}
        <div className={clases.arrowRight_container}>
            <ArrowRightComponent/>
        </div>
    </div> 
    )
}

export {algoData, ProyectCard}