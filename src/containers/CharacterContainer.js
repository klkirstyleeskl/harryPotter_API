import React, {Component} from "react";
import CharacterSelect from "../components/CharacterSelect"

class CharacterContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            currentCharacter: null
        };
        this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
    }

    componentDidMount(){
        const url = "http://hp-api.herokuapp.com/api/characters";
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({characters: data}))
        
    }

    handleCharacterSelected(index){
        const selectedCharacter = this.state.characters[index];
        this.setState({currentCharacter: selectedCharacter})
    }



render(){
    return(
        <div>
        <h1>Harry Potter's Wild World of Eligible Witches and Wizards</h1>
        <CharacterSelect characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected}/>

        </div>
        
    )
}






}








export default CharacterContainer;








