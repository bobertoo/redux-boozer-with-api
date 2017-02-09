import React from 'react';
import {connect} from 'react-redux';

import { updateCocktail } from '../actions'

class CocktailsIndex extends React.Component {

  constructor(props){
    super(props)

    this.renderCocktails = this.renderCocktails.bind(this)
  }

  renderCocktails(cocktail) {
    return (<li key={cocktail.id}>
      <p onClick={this.handleClick.bind(this, cocktail.id)}>
      {cocktail.name}
      </p>
    </li>)
  }

    handleClick(cocktailID){
      console.log(cocktailID)
      this.props.updateCocktail( cocktailID )
    }

    render(){
      return (

        <div>
          <div className='col-md-4'>
            <ul>
              {this.props.cocktails.map(this.renderCocktails)}
            </ul>
          </div>
          <div className='col-md-8'>
            {this.props.children}
          </div>
        </div>
      )
    }
  };

  function mapStateToProps(state){
    return {
      cocktails: state.cocktails
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      updateCocktail: function( cocktailID ){
        let action = updateCocktail( cocktailID )
        dispatch( action )
      }
    }
  }

  const componentCreator = connect(mapStateToProps, mapDispatchToProps)
  export default componentCreator(CocktailsIndex);
