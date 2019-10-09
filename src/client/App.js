import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Register } from './pages';

const App = () => {
    return (
        <div className="App">
            <Route exact path="/" component={Home} />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </div>
    )
};

export default App;
