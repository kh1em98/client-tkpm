import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'urql';
import BetterLogin from './pages/BetterLogin';
import BetterRegister from './pages/BetterRegister';
import Contract from './pages/Contract';
import History from './pages/History';
import Home from './pages/Home';
import { client } from './utils/createUrqlClient';
import customTheme from './utils/theme';



// Internally, we transform to this

function App() {
  return (
    <Provider value={client}>
      <ChakraProvider theme={customTheme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/sign-in" exact>
              <BetterLogin />
            </Route>

            <Route path="/sign-up" exact>
              <BetterRegister />
            </Route>

            <Route path="/history" exact>
              <History />
            </Route>

            <Route path="/contract">
              <Contract />
            </Route>
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
