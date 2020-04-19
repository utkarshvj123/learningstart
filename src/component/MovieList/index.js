import React,{useState,useContext} from 'react'
import Movie from '../Movie';
import {MovieContext} from '../MovieContext'


export default function MovieList() {
    const value= useContext(MovieContext)
   
//====Another way to use map in react
// const mappedData=movies.map(movie=>(
//     <li>{movie.name}</li>
// ))
    return (
        // <div>{movies.map(movie=>(<Movie name={movie.name} key={movie.id}></Movie>))}</div>
        <div>
<h1>{value}</h1>
        </div>
    )
}
