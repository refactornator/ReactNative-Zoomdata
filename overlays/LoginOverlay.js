'use strict';

var React = require('react-native');
var Overlay = require('react-native-overlay');
var Button = require('react-native-button');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var LoginOverlay = React.createClass({
  getDefaultProps(): StateObject {
    return {
      isVisible: false
    }
  },

  render() {
    return (
      <Overlay isVisible={this.props.isVisible}>
        <View style={styles.container}>
          <TextInput style={styles.textInput} />
          <Button style={styles.button} onPress={this._handlePress}>
            Login
          </Button>
        </View>
      </Overlay>
    )
  },

  _handlePress(event) {
    this.props.updateLoginStatus(true);
  },
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 50,
    color: 'orange'
  }
});


module.exports = LoginOverlay;