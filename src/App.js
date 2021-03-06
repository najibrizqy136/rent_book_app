import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import BookDetail from "./Pages/BookDetail";
import store from './Public/Store';
 
const App =  () => {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route
            exact={true}
            path={'/'}
            render={() => {
              let token = localStorage.getItem("token");
              return token == null ? 
              <Redirect to="./login"/>
              :
              <Redirect to="./home"/>;
            }}
          />
          <Route
            path={'/home'}
            render={({history}) => {
              return <Home history={history} key={window.location.search}/>
            }}
          />
          <Route
            path={'/login'}
            render={({history}) => {
              return <LandingPage history={history}/>;
            }}
          />
          <Route
            path={'/signup'}
            render={({history}) => {
              return <LandingPage history={history}/>;
            }}
          />
          <Route 
            path={'/book_detail/:id'} 
            render={(props) => {
              return <BookDetail history={props.history} id_book={props.match.params.id} />;
            }}
          />
        </Provider>
      </Switch>
    </Router>
  );
};
 
export default App;