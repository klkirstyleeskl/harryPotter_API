import React, {Component} from "react";

class CharacterContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            currentCharacter: null
        };
    }

    componentDidMount(){
        const url = "http://hp-api.herokuapp.com/api/characters";
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({characters: data}))
        
    }



render(){
    console.log(this.state.characters);
    return(
        <h1>Harry Potter has an 11 inch wand</h1>
    )
}






}








export default CharacterContainer;








