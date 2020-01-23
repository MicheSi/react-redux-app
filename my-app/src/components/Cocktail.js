import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import {getCocktail} from '../actions';

const Cocktail = props => {
    return (
        <section>
            <button onClick={props.getCocktail}>Get Cocktail</button>
            {!props.cocktail && !props.isLoading && (
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
            
            
        </section>
    )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    error: state.error,
    cocktail: state.cocktail,
});

export default connect(mapStateToProps, {getCocktail})(Cocktail);