import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Button from 'react-bootstrap/lib/Button';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <Navbar toggleNavKey={0}>
                    <Nav>
                        <form>
                            <Button bsStyle="primary">text</Button>
                            <input type="text" placeholder="email" />{''}
                        </form>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}