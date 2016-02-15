var React = require('react-native'),
    Text = React.Text,
    AppRegistry = React.AppRegistry;
   
var DayItem = React.createClass({
  render: function () {
    return <Text style ={this.style()}>
      {this.props.day}
      </Text>
    },
    style: function() {
      return {
        color: this.color(),
        fontWeight: this.fontWeight(),
        fontSize: this.fontSize(),
        lineHeight: this.lineHeight()
      }
    },
  color: function() {
    var opacity = 1 / this.props.daysUntil;
    return 'rgba (0, 0, 0, ,'+ opacity + ')';
  },
  fontWeight: function(){
    var weight = 7 - this.props.daysUntil;
    return String(weight * 100);
  },
  fontSize: function(){
    return 60 - 6 * this.props.daysUntil;
  },
  lineHeight: function(){
    return 70 - 4 * this.props.daysUntil;
  }
});

module.exports = DayItem;