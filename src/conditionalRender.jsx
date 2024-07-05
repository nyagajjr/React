

function List(props){

    //check if the property animals
    if (!props.animals){
        return <div>Loading...</div>;
    }

    //check if the length of the list is greater than 0.
    if (props.animals.length === 0){
        return <div> There are no animals in the list!</div>;
    }

    return(
        <ul>
            {props.animals.map((animal) =>{
                return <li key={animal}>{animal}</li>;
            })}
        </ul>
    );
}

function Applet(){
    const animals = []

    return(
        <div>
        <h1>Animals: </h1>
        <List animals={animals}/>
        </div>
    )
}

export default Applet;