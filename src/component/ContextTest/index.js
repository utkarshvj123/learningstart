import React from "react";
import MovieList from "../MovieList";
import NavMovie from "../NavMovie";
import { MovieProvider } from "./../MovieContext";

export default function ContextTest() {
  return (
    <MovieProvider>
      <div>
        <NavMovie></NavMovie>
        <MovieList></MovieList>
      </div>
    </MovieProvider>
  );
}
