/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Router = require('react-native-router');

var VisualizationGridPage = require('./pages/VisualizationGridPage');

var {
  AppRegistry,
  StyleSheet,
} = React;

var ZoomdataMobileNative = React.createClass({
  render: function() {
    return (
      <Router firstRoute={{
        name: 'Zoomdata Mobile',
        component: VisualizationGridPage
      }} />
    );
  }
});

AppRegistry.registerComponent('ZoomdataMobileNative', () => ZoomdataMobileNative);
