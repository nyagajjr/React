const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function MonthList(){
    return(
        <>
        <h2>Months</h2>
        <ul>
            {months.map((month, index)=>(<li key={index}>{month}</li>))}
        </ul>
        </>
    )
}

export default MonthList