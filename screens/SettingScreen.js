import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {Button} from 'react-native-paper';
export class SettingScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>SettingScreen</Text>
        <Button
          mode="contained"
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          Go back to Home
        </Button>
      </View>
    );
  }
}

export default SettingScreen;
