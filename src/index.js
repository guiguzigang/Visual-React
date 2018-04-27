import React from 'react';
// import ReactDOM from 'react-dom';
import dva from 'dva'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
const app = dva()
app.router( _ => <App />)
app.start('#root')

registerServiceWorker();
