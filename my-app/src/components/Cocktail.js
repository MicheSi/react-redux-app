import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import {getCocktail} from '../actions';

const Cocktail = props => {

    return (
        <section className='cocktail'>
            <button onClick={props.getCocktail}>Get Cocktail</button>
            {!props.strDrink && !props.isLoading && (
                <h2>Get new cocktail</h2>
            )}
            {props.isLoading && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            )}
            {props.strDrink && !props.isLoading && (
                <div className='drinkCard'>
                    <h2>{props.strDrink.strDrink}</h2>
                    <img src={props.strDrink.strDrinkThumb} alt={props.strDrink.strDink}/>
                    <ul>

                    </ul>
                </div>
                
            )}
            
        </section>
    )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    error: state.error,
    strDrink: state.strDrink,
    strDrinkThumb: state.strDrinkThumb
});

export default connect(mapStateToProps, {getCocktail})(Cocktail);