// ****Rendering a list of elements in JSX****


// A component that lists multiple animals

function Tiere(){

    const animals = ["Lion", "cow", "snake", "Lizard"]
    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)
    return(
        <>
        <h1>Animals: </h1>
        <ul>
            {animalsList}
        </ul>
        </>
    )
}

export default Tiere;