import React from 'react';
import {connect} from 'react-redux';

const CharacterCard = props => {
    return (
        <div>
            <img src={props.image}/>
            <h2>{props.character}</h2>
            <p>Amiibo name: {props.name}</p>
            <p>Amiibo Series: {props.amiiboSeries}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        character: state.character,
        image: state.image,
        name: state.name,
        amiiboSeries: state.amiiboSeries
    }
}

export default connect(mapStateToProps, {})(CharacterCard);