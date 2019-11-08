import React, { useState, useEffect } from "react";

import axios from "axios";
import TheCard from "./Card";



export default function Names() {
    const [name, setName] = useState([])

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                console.log(response);
                setName(response.data.results);
            })
            .catch(error => {
                console.log("could not recieve data", error);
            })
    }, [] );

    return (
        <div>
            {name.map((character) => {
              return (
                    <TheCard
                    name={character.name}
                    birthYear={character.birth_year}
                    gender={character.gender}
                    hairColor={character.hair_color}
                    height={character.height}
                    />
              )
            })}
        </div>
    )
};