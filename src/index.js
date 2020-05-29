import Data from './data.json';
import './style.css';


function component() {
    const element = document.createElement('div');
    element.innerHTML = 'hello world'
    element.classList.add('hello');
    console.log(Data);
    return element;
  }

  document.body.appendChild(component());