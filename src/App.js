import React from 'react';
import logo from './logo.svg';
import './App.css';
import App from './Containers/App/index.jsx';
import Home from './Containers/Home/index.jsx';
import { BrowserRouter , Route, Switch  } from 'react-router-dom';
import routes from './routes'
import { Provider }   from 'react-redux';
import store from './store/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function WebApp() {
  return (
    <Provider store={store}>
        <BrowserRouter >
            <Switch>
              { routes.map((route, index) => (
                  // pass in the initialData from the server for this specific route
                  <Route { ...route } key={ index }/>
              )) }
          </Switch>
        </BrowserRouter>
    </Provider>

  );
}

export default WebApp;
