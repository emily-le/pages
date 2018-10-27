import React, { Component } from 'react';

import RouteLinks from './pages/RouteLinks.js'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <script>
          alert( 'Hello, world!' );
          <RouteLinks/>
        </script>
      </div>
    );
  }
}

export default Main;

var name = document.getElementById("test");
alert("THHHHH");