import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import { init as firebaseInit } from './javascripts/firebase';
import App from './Components/App';

import registerServiceWorker from './registerServiceWorker';

firebaseInit();

const reactElement = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>
</Provider>, reactElement);

registerServiceWorker();
