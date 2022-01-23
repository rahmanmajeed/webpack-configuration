import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Image from './yts.jpg';

ReactDOM.render(<>
New React Setup. 
<img src={Image} alt="img" /> 
<img src="./images/yts.jpg" alt="img" /> 
</>, document.getElementById('root'))
// document.querySelector('#root').innerHTML=`<h1>This is from HTML</h1>`