'use strict';

var React = require('react-native');
var {
  AppRegistry,
  LayoutAnimation,
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
        name: 'Gauge',
        image: require('image!kpi')
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
    LayoutAnimation.configureNext(animationConfig);
    this.setState({'isLoggedIn': loggedIn});
  },

  render: function() {
    var grid = <GridView
      items={this.state.visualizations}
      itemsPerRow={2}
      renderItem={this.renderItem}>
    </GridView>;
    
    if(!this.state.isLoggedIn) {
      grid = <View></View>;
    }

    return (
      <View>
        {grid}

        <LoginOverlay ref="overlay" isVisible={!this.state.isLoggedIn} updateLoginStatus={this.handleLoginStatus} />
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

var animationConfig = {
  duration: 2000,
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

module.exports = VisualizationGridPage;
