'use strict';

var React = require('react-native');
var Overlay = require('react-native-overlay');
var Button = require('react-native-button');
var Dimensions = require('Dimensions');

var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var RNTAnimation = require('react-native-tween-animation');

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var LoginOverlay = React.createClass({
  getDefaultProps(): StateObject {
    return {
      isVisible: false
    };
  },

  getInitialState: function() {
    return {
      top: 0
    };
  },

  render() {
    return (
      <Overlay isVisible={this.props.isVisible}>
        <View style={[{top: this.state.top}, styles.container]}>
          <Image style={styles.logo} source={require('image!zoomdata')} />
          <TextInput style={styles.textInput} placeholder="Username" />
          <TextInput style={styles.textInput} placeholder="Password" password={true} />
          <TouchableHighlight
            style={styles.button}
            onPress={this._handlePress}>
              <Text style={[styles.button, styles.buttonText]}>LOG IN</Text>
          </TouchableHighlight>  
        </View>
      </Overlay>
    )
  },

  _handlePress(event) {
    var hideAnimation = new RNTAnimation({
      start: {
        top: 0
      },

      end: {
        top: height
      },

      duration: 500,

      tween: 'easeOutBack',

      frame: (tweenFrame) => {
        this.setState(tweenFrame);
      },

      done: () => {
        this.props.updateLoginStatus(true);
      }
    });
    hideAnimation.start();
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    alignItems: 'center',
    backgroundColor: '#575253'
  },
  logo: {
    marginTop: 50,
    width: width - 55,
    height: 98
  },
  textInput: {
    paddingLeft: 10,
    marginTop: 10,
    height: 40,
    width: width - 55,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    marginTop: 10,
    width: width - 55,
    height: 50,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 35,
  }
});

module.exports = LoginOverlay;