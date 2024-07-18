// data transfers between components
/*
-- This prop is not destructured

function Btn(props){
    const btnStyle = {
        color: props.color,
        fontSize: props.fontSize + 'px'
    };
    return(
        <button style = {btnStyle}>{props.text}</button>
    )
}
*/

//Destructured prop

function Btn({text, color, fontSize}){
    const btnStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };
    return(
        <button style = {btnStyle}>{text}</button>
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
function Button(){
    return(
        <>
        <Btn text ='Click Me!' color='blue' fontSize={12} />
        <Btn text ='Click You!' color='green' fontSize={12}/>
        <Btn text ='Click Them!' color='orange' fontSize={12}/>
        </>
    )
}
<br />

export default Button;