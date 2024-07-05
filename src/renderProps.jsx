/*  ==== props enables the child to inherit properties 
         from parent component   ===
*/
function List(props){
    return(
        <>
        <ul>
            {props.animals.map((animal) =>{
            return animal.startsWith('L') ? <li ><p>{animal}</p></li> : <li> <p>"Not Found"</p> </li> 
            })}
        </ul>
        </>
    )
}

function Animalia(){
    const animals = ["Lion", "Cow", "Snake", "Lizard","Leopard"]
    // const animal = animals.map((a) =><li>{a}</li>)
    return(
        <>
        <h1>ANIMALS: </h1>
        <List animals={animals}/>
        </>
    )
}

export default Animalia;