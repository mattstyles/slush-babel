'use strict';

import React from 'react';
import {Router} from 'director';

var AppView = React.createClass({

    getInitialState: function() {
        return {
            route: 'home'
        };
    },

    componentWillMount: function() {
        var router = new Router();

        router.on( '/', this.home );
        router.on( '/admin', this.admin );

        router.init( '/' );
    },

    componentDidMount: function() {

    },

    home: function() {
        this.setState({
            route: 'home'
        });
    },

    admin: function() {
        this.setState({
            route: 'admin'
        });
    },

    render: function() {
        return (
            <div>
                <p>ES2015 ❤︎s you</p>
                <p>{ this.state.route }</p>
            </div>
        );
    }
});

export default AppView;
