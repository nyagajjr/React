// data transfers between components

function Btn(){
    return(
        <button>Click Me!</button>
    )
}


/* Creating a new component for each of these button 
variations would very quickly lead to a LOT of code duplication. */
// function Btn2(){
//     return(
//         <button>Don't click Me RN!</button>
//     )
// }


/* +++ using props, we can account for any 
number of variations with a single button component. +++  */
function Button(props){
    return(
        <>
        <Btn />
        {/* <Btn2 /> */}
        </>
    )
}

export default Button;