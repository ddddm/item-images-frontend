import React, { Component } from 'react';
import {BrowserRouter, Match, Miss, Redirect} from 'react-router'
import './elemental.css';
import './App.css';
import ListChangesView from './view/ListChangesView';
import ChangeView from './view/ChangeView';
import CreateChangeView from './view/CreateChangeView';
import CreateTaskView from './view/CreateTaskView';
import MainNavigation from './MainNavigation';
import {Row, Col} from 'elemental';


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
                <header className="App-container App-header">
                    <div className="App-nav">
                        <Row>
                            <Col sm='1'>
                                <h2>Vitek Ural images</h2>
                                <MainNavigation />
                            </Col>
                        </Row>
                    </div>
                </header>


                <div className="App-container">
                    <div className="App-content">
                        <Match exactly pattern="/changes" component={ListChangesView} />
                        <Match exactly pattern="/create-task" component={CreateTaskView} />
                        <Match exactly pattern="/create-change" component={CreateChangeView} />
                        <Match exactly pattern="/changes/:changeId" component={ChangeView} />
                        <Miss component={NoMatch} />
                    </div>
                </div>

            </div>

        </BrowserRouter>

    );
  }
}

export default App;
