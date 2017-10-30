import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux-zero/react';
import store from './store';
import './index.css';
import App from './App';
import Portfolio from './Portfolio';
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
   <Provider store={store}>
      <Portfolio />
   </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
