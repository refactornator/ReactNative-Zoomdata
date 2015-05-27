'use strict';

var React = require('react-native');
var Overlay = require('react-native-overlay');
var Button = require('react-native-button');
var Dimensions = require('Dimensions');

var {
  AppRegistry,
  LayoutAnimation,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var LoginOverlay = React.createClass({
  getDefaultProps(): StateObject {
    return {
      isVisible: false
    };
  },

  render() {
    return (
      <Overlay isVisible={this.props.isVisible}>
        <View style={styles.container}>
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
    this.props.updateLoginStatus(true);
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

var animationConfig = {
  duration: 700,
  create: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.4,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.4,
    property: LayoutAnimation.Properties.opacity,
  }
};

module.exports = LoginOverlay;