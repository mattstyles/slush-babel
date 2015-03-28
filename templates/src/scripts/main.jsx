'use strict';

import React from 'react';
import dispatcher from './dispatchers/appDispatcher';

import AppView from './components/appView.jsx';

class App {
    constructor( opts ) {
        dispatcher.register( ( payload ) => {
            try {
                this[ payload.action ]( payload );
            } catch ( err ) {
                // No consequence of this action here
                return;
            }
        });

        // Immediate invoke init
        dispatcher.dispatch({
            action: 'init',
            middleware: opts
        });
    }

    init( payload ) {
        React.render(
            <AppView middleware={ payload.middleware } />,
            document.getElementById( 'main' )
        );
    }
}

// Bootstrap the app
new App();
