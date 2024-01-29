import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling
import './PokeFont.ttf';

const PokemonBattle = () => {

    const [pokemon1HP, setPokemon1HP] = useState(25);
    const [pokemon2HP, setPokemon2HP] = useState(17);

    const calculateBarColor = (percentage) => {
        // Calculate the color based on the percentage using a gradient from green to red
        const red = Math.round(255 - (percentage * 2.55)); // Convert percentage to RGB value
        const green = Math.round(percentage * 2.55); // Convert percentage to RGB value
        return `rgb(${red}, ${green}, 0)`;
    };

    // https://pokeapi.co

    return (
        <div>
            <div className="centered-square">
                <div className="battle-container">
                    <div className="pokemon-container pokemon1">
                        <div className="info-card">
                            <span className="pokemon-name">
                                <p>Ditto</p>
                                <p className="level">Lv3</p>
                            </span>
                            <div className="hp-bar"
                                 style={{
                                     width: `${pokemon2HP * 100 / 17}%`,
                                     backgroundColor: calculateBarColor(pokemon2HP * 100 / 17)
                                 }}></div>
                        </div>
                        {/*@Todo S'occuper la transparance de mort*/}
                        <img className="pokemon-sprite"
                             alt={"sprite"}
                             src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
                             width="200" height="200"
                        />

                    </div>

                    <div className="pokemon-container pokemon2">
                        {/*@Todo S'occuper la transparance de mort*/}
                        <img className="pokemon-sprite"
                             alt={"sprite"}
                             src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"}
                             width="200" height="200"
                        />
                        <div className="info-card">
                        <span className="pokemon-name">
                            <p>Pikachu</p>
                            <p className="level">Lv5</p>
                        </span>
                            <div className="hp-bar"
                                 style={{
                                     width: `${pokemon1HP * 100 / 25}X%`,
                                     backgroundColor: calculateBarColor(pokemon1HP * 100 / 25)
                                 }}>
                            </div>
                            <span className="pokemon-name">
                            HP : {pokemon1HP} / 25
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="move-box">

            </div>
        </div>
    );
};

export default PokemonBattle;
