import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import Error404 from './containers/Error404';
import HomeNewsPage from './components/HomeNewsPage';
import Article from './components/Article';
import InfoStuffPage from './components/InfoStuffPage';
import InfoRulesPage from './components/InfoRulesPage';
import ServicesPhotographsPage from './components/ServicesPhotographsPage';
import Photograph from './components/Photograph';
import ServicesMakeupsPage from './components/ServicesMakeupsPage';
import Makeup from './components/Makeup';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignInRecovery from './components/SignInRecovery';
import ContactsPage from './components/ContactsPage';
import { store } from './store/configureStore';

import './style/reset.css';
import './style/style.scss';

const App = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path='/' component={HomeNewsPage} />
                <Route path='/news/:id' component={Article} />
                <Route exact path='/info' component={InfoStuffPage} />
                <Route path='/info/rules' component={InfoRulesPage} />
                <Route exact path='/services' component={ServicesPhotographsPage} />
                <Route path='/photographs/:id' component={Photograph} />
                <Route exact path='/makeup' component={ServicesMakeupsPage} />
                <Route path='/makeup/:id' component={Makeup} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/recovery' component={SignInRecovery} />
                <Route path='/contacts' component={ContactsPage} />
                <Route component={Error404} />
            </Switch>
        </HashRouter>
    </Provider>
);

render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('app'));