import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BetterLogin from './pages/BetterLogin';
import BetterRegister from './pages/BetterRegister';
import Contract from './pages/Contract';
import History from './pages/History';
import Home from './pages/Home';
import { getLoginUser } from './redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from './redux/store';
import customTheme from './utils/theme';

function App() {
  const { isFetching } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLoginUser());
  }, []);

  return (
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
  );
}

export default App;
