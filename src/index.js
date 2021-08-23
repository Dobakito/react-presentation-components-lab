import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => this.innerText = "Thanks for clicking me, I needed that."} />
  </div>,
  document.getElementById('root')
);