import React from "react";


const CharacterSelect = (props) => {
    const options = props.characters.map((character, index) =>{
        return <option value={index} key={index}>{character.name}</option>
    })

    function handleChange(event){
        props.onCharacterSelected(event.target.value);
    }

    return (
        <select id="character-selected" onChange={handleChange} defaultValue="default">
        <option disabled value="default">Choose a babe...</option>
            {options}
        </select>
    )
}


export default CharacterSelect