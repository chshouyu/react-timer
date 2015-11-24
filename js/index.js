import React from 'react';
import { render } from 'react-dom';
import Timer from './Timer';

let rootElement = document.getElementById('container');

render(<Timer />, rootElement);