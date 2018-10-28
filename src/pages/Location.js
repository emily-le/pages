import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Location = () => (
    <div className="Location">
    <h1>Where are you shopping today?</h1>
      <div class='ui icon input'>
        <input type='text' placeholder='Search...' />
        <i aria-hidden='true' class='search icon' />
      </div>
    </div>
)

export default Location
