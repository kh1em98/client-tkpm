import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'urql';
import BetterLogin from './pages/BetterLogin';
import BetterRegister from './pages/BetterRegister';
import Home from './pages/Home';
import Test from './pages/Test';
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

            <Route path="/test" exact>
              <Test />
            </Route>
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
