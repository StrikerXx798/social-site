import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import PropTypes from 'prop-types'
import {connect, Provider} from "react-redux";
import {appReducerActionCreators, setGlobalErrorOnTime} from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import {compose} from "redux";
import store from "./redux/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer";
import NotFound from "./components/NotFound/NotFound";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import {getNewMessages} from "./redux/dialogs-reducer";
import TestPage from "./components/tests/TestPage";

const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {

    catchAllUnhandledErrors = ({reason}) => {
        this.props.showGlobalError(reason.toJSON().message);
    };

    componentDidMount() {
        this.props.initializeApp();
        this.props.getNewMessages();

        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    };
    intervalId=null;
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isAuth && this.intervalId===null){
            this.intervalId = setInterval(()=>{
                this.props.getNewMessages();
            }, 4000);
        }
        if(!this.props.isAuth){
            clearInterval(this.intervalId);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
        clearInterval(this.intervalId);
    }
    render() {
        if (!this.props.initialized) return <div className="preloader"><Preloader/></div>;
        return (
            <ErrorBoundary>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar newMessagesCount={this.props.newMessagesCount}/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to="/profile"/>}/>
                            <React.Suspense fallback={<Preloader/>}>
                                <Route path="/dialogs/:userId?"
                                       render={(props) => <DialogsContainer newMessagessCount={this.props.newMessagesCount} userId={props.match.params.userId}/>}
                                />
                                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                                <Route path="/users" render={() => <UsersContainer pageTitle={'Samurai'}/>}/>
                                <Route path="/news" render={() => <News/>}/>
                                <Route path="/music" render={() => <Music/>}/>
                                <Route path="/settings" render={() => <Settings/>}/>
                                <Route path="/login" render={() => <Login/>}/>
                                <Route path="/test" render={()=><TestPage />} />
                            </React.Suspense>
                            <Route path="*" render={() => <NotFound/>}/>
                        </Switch>
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError,
    isAuth: state.auth.isAuth,
    newMessagesCount: state.dialogsPage.newMessagesCount
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp: appReducerActionCreators.initializedSuccess,
        showGlobalError: setGlobalErrorOnTime,
        getNewMessages
    }))(App);

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SamuraiJSApp;

App.propTypes = {
    store: PropTypes.object,
};
