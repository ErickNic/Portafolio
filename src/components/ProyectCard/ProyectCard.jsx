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
import react from 'react';
import clases from './ProyectCard.module.css'
import ArrowLeftComponent from '../icons/arrowLeft';
import ArrowRightComponent from '../icons/arrowRight';

const ProyectCard = (props) =>{
    const {items} = props;
    console.log('items',items[0].name)
    return(
        <div className={clases.ProyectCard_Container}>
            <div className={clases.arrowLeft_container}>
                <ArrowLeftComponent/>   
            </div>
            <img src='https://img.freepik.com/vector-gratis/acuarela-real-fondo-rojo-san-valentin_1340-4006.jpg'  alt="React Image" className={clases.img}/>
            <div className={clases.arrowRight_container}>
                <ArrowRightComponent/>
            </div>
        </div>
    )
}

export {algoData, ProyectCard}