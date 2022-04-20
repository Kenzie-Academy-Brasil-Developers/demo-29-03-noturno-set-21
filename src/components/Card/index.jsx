import { useEffect } from "react"

const Card = ({group}) =>{

    useEffect(() =>{
        console.log('montou');

        return () => {
            console.log('desmontou')  
        }
    }, [])

    return (
        <p>{group.name}</p>
    )
}

export default Card