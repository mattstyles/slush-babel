'use strict';

import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher {
    constructor() {
        super();
    }
}

// Export singleton
export default new AppDispatcher();
