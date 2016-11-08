import React, { Component } from 'react';
import {BrowserRouter, Match, Miss, Link, Redirect} from 'react-router'
import './App.css';
import ListChangesView from './ListChangesView';
import ChangeView from './ChangeView';


const NoMatch = (props) => {
    return !props.location  || props.location.pathname === '/'? (
        <Redirect to={{
            pathname: '/changes',
        }}/>
    ) : (
    <div>Nothing matched.</div>
    )
}


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-header">
                    <h2>Vitek Ural images</h2><ul>
                    <li><Link to="/changes">List changes</Link></li>
                    <li><Link to="/nowhere">Nowhere</Link></li>
                </ul>
                </div>



                <Match exactly pattern="/changes" component={ListChangesView} />
                <Match exactly pattern="/changes/:changeId" component={ChangeView} />
                <Miss component={NoMatch} />

                <p className="App-intro">
                </p>
            </div>

        </BrowserRouter>

    );
  }
}





export default App;
