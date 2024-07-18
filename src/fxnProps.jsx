function Btnn({text = "Click Me!", color = "blue", fontSize = 12, handleClick}){
    const btnnStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }


return(
    <button onClick = {handleClick} style={btnnStyle}>
        {text}
    </button>
)
};

function FProp(){
    const handleButtonClick = () =>{
        window.location.href = "https://www.google.com"
    }

    return(
        <>
        <Btnn handleClick={handleButtonClick}/>
        </>
    )
}

export default FProp;