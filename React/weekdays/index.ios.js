//import some code we need

var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet= React.StyleSheet;


//Create a React component
var weekdays = React.createClass({
  render: function () {
    
    return <View style={styles.container}>
      <Text>
        Days of the Week:
      </Text>
    </View>
  }
});

//stylesheet
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  }
});

//Show the React component on the screen
AppRegistry.registerComponent('weekdays', function () {
  return weekdays
});