import React, { Component } from 'react';

import Results from './component/results/results.component';

class App extends Component {
  render() {
    return (
      <Route exact path='/results' component={Results} />

    );
  }
}

export default App;
