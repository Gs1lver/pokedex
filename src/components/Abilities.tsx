import { useEffect, useState } from "react"
import api, { buscarPokemon } from "../api"

interface Props {
   abilityList: any
}

export default function Abilities({abilityList}: Props){
    const [abilities, setAbilities] = useState<any>(abilityList)
    
    useEffect(() => {
        setAbilities(abilityList)
    }, [abilityList])

    
    return(
            <ul>
                {abilities.map(({ability}) => <li key={ability.name}>{ability.name}</li>)}
            </ul>
    )
}

