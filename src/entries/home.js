import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
//import Playlist from './src/playlist/components/playlist';
import data from '../api.json';

// console.log('Hola mundo!')

const homeContainer = document.getElementById('home-container')

// const holaMundo = <h1>hola mundo e</h1>;
render(<Home data={data} />, homeContainer);