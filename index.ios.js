/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var LoginOverlay = require('./overlays/LoginOverlay');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} = React;

var ZoomdataMobileNative = React.createClass({
  getInitialState: function() {
    return {
      isLoggedIn: false
    };
  },

  handleLoginStatus: function(loggedIn) {
    this.setState({'isLoggedIn': loggedIn});
  },

  render: function() {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.webView}
          url='shell.html'
        />

        <LoginOverlay isVisible={!this.state.isLoggedIn} updateLoginStatus={this.handleLoginStatus} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b5998',
  },
  webView: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    height: 350,
  },
});

AppRegistry.registerComponent('ZoomdataMobileNative', () => ZoomdataMobileNative);
