import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from 'Components/Layout/Layout';
import Home from 'Pages/Home/Home';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default App;
