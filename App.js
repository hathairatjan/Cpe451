import React, {Component} from 'react';
import Navigator from './navigator/Navigator.js';
import {Provider as PaperProvider} from 'react-native-paper';

class App extends Component {
  render() {
    return <Navigator />;
  }
}

export default App;
