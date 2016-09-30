
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

// class HelloWorldApp extends Component {
//   render() {
//     return (
//       <Text>Hello world!</Text>
//     );
//   }
// }

// AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);

      var Greeting = React.createClass({
        render: function() {
          return (
            <p>Hello, Universe</p>
          )
        }
      });

      ReactDOM.render(
        <Greeting/>,
        document.getElementById('greeting-div')
      );