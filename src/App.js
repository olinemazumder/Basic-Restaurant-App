import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainComponent from "./components/MainComponent";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux'
import myStore from "./redux/Store";

function App() {

  return (
    <div className="App">
          <Provider store={myStore}>
              <Router>
                  <MainComponent/>
              </Router>
          </Provider>
    </div>
  );
}

export default App;
