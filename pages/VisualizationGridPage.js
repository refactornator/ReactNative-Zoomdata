'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} = React;
var GridView = require('react-native-grid-view');

var LoginOverlay = require('../overlays/LoginOverlay');
var VisualizationPage = require('./VisualizationPage');

var VisualizationGridPage = React.createClass({
  getInitialState: function() {
    return {
      isLoggedIn: false,
      visualizations: [{
        name: 'Bubbles',
        image: require('image!bubbles')
      }, {
        name: 'Pie',
        image: require('image!pie')
      }, {
        name: 'Treemap',
        image: require('image!treemap')
      }, {
        name: 'Scatterplot',
        image: require('image!scatter')
      }, {
        name: 'Trend',
        image: require('image!trend')
      }, {
        name: 'Donut',
        image: require('image!donut')
      }]
    };
  },

  handleLoginStatus: function(loggedIn) {
    this.setState({'isLoggedIn': loggedIn});
  },

  render: function() {
    return (
      <View>
        <GridView
          items={this.state.visualizations}
          itemsPerRow={2}
          renderItem={this.renderItem}
        />

        <LoginOverlay isVisible={!this.state.isLoggedIn} updateLoginStatus={this.handleLoginStatus} />
      </View>
    );
  },

  renderItem: function(item) {
    return (
      <TouchableOpacity onPress={() => this._pressItem(item)}>
        <View style={styles.item}>
          <Text>{item.name}</Text>
          <Image style={styles.itemImage} source={item.image} />
        </View>
      </TouchableOpacity>
    );
  },

  _pressItem: function(item) {
    this.props.toRoute({
      name: item.name,
      component: VisualizationPage,
      data: item
    });
  },
});

var styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  itemText: {
  },
  itemImage: {
    width: 140,
    height: 95
  }
});

module.exports = VisualizationGridPage;
