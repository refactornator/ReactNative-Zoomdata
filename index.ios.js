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

var HEADER = '#3b5998';
var BGWASH = 'rgba(255,255,255,0.8)';

var WEBVIEW_REF = 'webview';

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
          ref={WEBVIEW_REF}
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
    backgroundColor: HEADER,
  },
  webView: {
    backgroundColor: BGWASH,
    height: 350,
  },
});

AppRegistry.registerComponent('ZoomdataMobileNative', () => ZoomdataMobileNative);
