import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './Email.css';

const Email = () => (
    <div className="Email">

        <div id="buttons">
            <h1>Do you want to save list?</h1>
            <Button negative size='huge' href='http://localhost:3000/savedlists'><Icon name='x'></Icon></Button>
            <Button id="done" positive size='huge' href='http://localhost:3000/done'><Icon name='check'></Icon></Button>
            <input type="text" placeholder="email address - do we need this" />
        </div>

        <div>

        </div>
    </div>
)

export default Email