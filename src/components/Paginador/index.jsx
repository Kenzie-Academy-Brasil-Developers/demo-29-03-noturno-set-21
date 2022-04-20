const Paginador = ({count, setCount, pageDown}) =>{
    return (
        <>
        {count}
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => pageDown()}>-</button>
        </>
    )
}

export default Paginador