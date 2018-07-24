import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            searchTerm: ""
        }
    }

    changeTerm(searchTerm){
        console.log({searchTerm});
        this.setState({searchTerm});
      }
    
    
    render() {
        const filteredChar = this.props.characters.filter(char => char.name.toLowerCase().includes(this.state.searchTerm))
        
        return (
            <div className="live-search">
                <SearchForm onChange={searchTerm => this.changeTerm(searchTerm)}/>
                <CharacterCount count={filteredChar.length} />
                <CharacterList characters={filteredChar} />
            </div>
        );   
    }

    
}
