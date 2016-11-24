import React, { Component } from 'react';
import {BrowserRouter, Match, Miss, Redirect} from 'react-router'
import './App.css';
import ListChangesView from './ListChangesView';
import ChangeView from './ChangeView';
import CreateChangeView from './CreateChangeView';
import CreateTaskView from './CreateTaskView';
import MainNavigation from './MainNavigation';


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
                    <h2>Vitek Ural images</h2>
                    <MainNavigation />
                </div>

                <Match exactly pattern="/changes" component={ListChangesView} />
                <Match exactly pattern="/create-task" component={CreateTaskView} />
                <Match exactly pattern="/create-change" component={CreateChangeView} />
                <Match exactly pattern="/changes/:changeId" component={ChangeView} />
                <Miss component={NoMatch} />

            </div>

        </BrowserRouter>

    );
  }
}

export default App;
