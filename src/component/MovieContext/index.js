import React, { useState, createContext } from "react";
import NavMovie from "../NavMovie";
import MovieList from "../MovieList";
// import { create } from 'd3';

//---- need to create context
export const MovieContext = createContext();

//--- when ever we want the data we have to import context anf for any change also we have to use that
export function MovieProvider(props) {
  const [movies, setMovies] = useState([
    {
      name: "harry poter",
      price: "$10",
      id: 231251
    },
    {
      name: "Game of thrones",
      price: "$10",
      id: 231252
    },
    {
      name: "inception",
      price: "$10",
      id: 231253
    }
  ]);
  return (
    <div>
      <MovieContext.Provider name={"hello"}>
        {/* //----where aever we wanr this information we ca send it by
         */}
        {/* 1 st way */}
        {/* <NavMovie />
                 <MovieList /> */}
        {/* 2. way */}
        {props.children}
      </MovieContext.Provider>
    </div>
  );
}
