// Test away
import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard.js';


describe('<Dashboard />', () => {

    it('should default to unlocked', () => {

        const lockedValue= false;

        expect(Dashboard.state.locked).toBe(lockedValue)

    });

    it('should default to closed', () => {

        const closedValue= false;

        expect(Dashboard.state.closed).toBe(closedValue)
        
    })

    it('can not be opened or closed if locked', () => {
        
        if(Dashboard.state.locked === true) {
            expect(Dashboard.toggleClosed).not.toBeCalled()
        }

    });
});