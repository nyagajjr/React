// ****Rendering a list of elements in JSX****


// A component that lists multiple animals

function Tiere(){

    const animals = ["Lion", "cow", "snake", "Lizard"]
    return(
        <>
        <h1>Animals: </h1>
        <ul>
            {animals.map((animal) =>{
                return <li key={animal}> {animal}</li>
            })}
        </ul>
        </>
    )
}

export default Tiere;