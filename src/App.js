import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const PokemonBattle = () => {
    const [pokemon1HP, setPokemon1HP] = useState(100);
    const [pokemon2HP, setPokemon2HP] = useState(100);

    const calculateBarColor = (percentage) => {
        // Calculate the color based on the percentage using a gradient from green to red
        const red = Math.round(255 - (percentage * 2.55)); // Convert percentage to RGB value
        const green = Math.round(percentage * 2.55); // Convert percentage to RGB value
        return `rgb(${red}, ${green}, 0)`;
    };

    // https://pokeapi.co

    return (
        <div className="centered-square">
            <div className="battle-container">
                <div className="pokemon-container pokemon1">

                    <div className="info-card">
                        <span className="pokemon-name">Ditto</span>
                        <span>Lvl : 3</span>
                        <div className="hp-bar"
                             style={{width: `${pokemon1HP}%`, backgroundColor: calculateBarColor(pokemon1HP)}}></div>
                    </div>
                    {/*@Todo S'occuper la transparance de mort*/}
                    <img className="pokemon-sprite"
                         alt={"sprite"}
                         src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
                         width="300" height="300"
                    />

                </div>

                <div className="pokemon-container pokemon2">
                    {/*@Todo S'occuper la transparance de mort*/}
                    <img className="pokemon-sprite"
                         alt={"sprite"}
                         src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"}
                         width="300" height="300"
                    />
                    <div className="info-card">
                        <span className="pokemon-name">Pikachu</span>
                        <span>Lvl : 5</span>
                        <div className="hp-bar"
                             style={{width: `${pokemon1HP}%`, backgroundColor: calculateBarColor(pokemon1HP)}}></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PokemonBattle;
