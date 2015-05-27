'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  WebView,
} = React;

var VisualizationPage = React.createClass({
  render: function() {
    // console.log(this.props.name);

    return (
      <View style={styles.container}>
        <WebView
          style={styles.webView}
          url='shell.html'
        />
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

module.exports = VisualizationPage;
