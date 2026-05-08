import { useState, useRef, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import PokedexHeader from "../components/pokedexheader";
import PokemonCard from "../components/pokemoncard";
import "./style.css";
import { useContext } from "react";
import { searchContext } from "../context/searchcontext";

export default function Home() {
    const { keyword, setkeyword } = useContext(searchContext);
    const limit = 30;
    const [offset, setOffset] = useState(0);
    const { data, pending, error } = useFetchData(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const pokeRef = useRef(null);

    const [pokemonListe, setPokemonList] = useState([]);

    useEffect(function () {
        data && setPokemonList((prevList) => [...prevList, ...data.results]);
    }, [data])

    useEffect(function () {
        if (!pokeRef.current) return;

        let observer = new IntersectionObserver(function (entries) {
            // console.log(entries[0].isIntersecting);

            if (entries[0].isIntersecting) {
                console.log("Load more data");
                observer.unobserve(pokeRef.current);
                setOffset((prevOffset) => prevOffset + limit);

            }
        });

        observer.observe(pokeRef.current);

        const timeout = setTimeout(function () {
            observer.observe(pokeRef.current);
        }, 700);

        return function () {
            if (pokeRef.current) {
                observer.unobserve(pokeRef.current);
            }
        };
    }, [keyword, pokemonListe]);

    const filteredList = pokemonListe.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(keyword.trim().toLowerCase())
    );

    return (
        <div className="home-page">
            <PokedexHeader keyword={keyword} onKeywordChange={setkeyword} />


            {error && <p>Error: {error}</p>}
            {pending && <p>Loading...</p>}

            <div id="big-wrapper">
                <main>
                    {pokemonListe && filteredList.map((pokemon, index) =>
                        <div ref={index === filteredList.length - 4 ? pokeRef : null} key={index}>
                            <PokemonCard pokemon={pokemon} />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}