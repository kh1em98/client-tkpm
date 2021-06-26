import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'urql';
import BetterLogin from './pages/BetterLogin';
import BetterRegister from './pages/BetterRegister';
import Contract from './pages/Contract';
import History from './pages/History';
import Home from './pages/Home';
import { client } from './utils/createUrqlClient';
import customTheme from './utils/theme';
import { useAppSelector, useAppDispatch } from './redux/store';
import { useEffect } from 'react';
import { getLoginUser, asyncSignOut } from './redux/slices/userSlice';
import PrivateRoute from './components/PrivateRoute';
import { RouteType } from './components/PrivateRoute';
import { User, Exact } from './generated/graphql';

// Internally, we transform to this

function App() {
  const { isFetching } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLoginUser());
  }, []);

  return (
    <Provider value={client}>
      <ChakraProvider theme={customTheme}>
        <BrowserRouter>
          <Switch>
            {isFetching ? (
              <h2>Loading...</h2>
            ) : (
              <>
                <Route path="/contract" exact>
                  <Contract />
                </Route>
                <Route path="/history" exact>
                  <History />
                </Route>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/sign-in" exact>
                  <BetterLogin />
                </Route>
                <Route path="/sign-up" exact>
                  <BetterRegister />
                </Route>
              </>
            )}
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
