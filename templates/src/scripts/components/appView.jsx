'use strict';

import React from 'react';
import {Router} from 'director';

export default class AppView extends React.Component {
    constructor() {
        this.state = {
            route: 'home'
        };
    }

    componentWillMount() {
        var router = new Router();

        router.on( '/', this.home );
        router.on( '/admin', this.admin );

        router.init( '/' );
    }

    home() {
        this.setState({
            route: 'home'
        });
    }

    admin() {
        this.setState({
            route: 'admin'
        });
    }

    render() {
        return (
            <div>
                <p>ES2015 ❤︎s you</p>
                <p>{ this.state.route }</p>
            </div>
        );
    }
}
