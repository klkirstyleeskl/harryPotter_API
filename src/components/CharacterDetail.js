import React from "react";



const CharacterDetail = ({character}) => {
    if (!character) return null;
    return(
        <dl>
            <dt>Name</dt>
            <dd>{character.name}</dd>






        </dl>
    )






}





export default CharacterDetail