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
import react from 'react'
import clases from './ProyectCard.module.css'

const ProyectCard = (props) =>{
    const {items} = props;
    console.log('items',items[0].name)
    return(
        <ul className={clases.unordenedList}>
            {items.map(proyect=>{
                return(
                    <li key={proyect.id}>
                        <h6>{proyect.name}</h6>
                        <p>{proyect.description}</p>
                        <image src={proyect.imageURL} alt='af' style={{
                            width:'100px',
                            height:'100px'
                        }}/>
                    </li>
                )
            })}
        </ul>
    )
}

export {algoData, ProyectCard}