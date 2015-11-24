import React from 'react';
import { render } from 'react-dom';
import Timer from './Timer';
import '../css/normalize.css';

let rootElement = document.getElementById('container');

render(<Timer />, rootElement);