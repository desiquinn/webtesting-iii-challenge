// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls.js';


describe('<Contols />', () => {

    it('provide buttons to toggle the closed and locked states.', () => {
        
        const controls = rtl.render(<Controls/>);
        controls.getByText(/lock gate/i);
        controls.getByText(/close gate/i);

    });
    

    it('the closed toggle button is disabled if the gate is locked', () => {
        const state = {
            locked: true,
            closed: true
        }
        const controls = rtl.render(<Controls locked={state.locked} closed={state.closed}/>);
        const closeButton = controls.getByText(/open gate/i);
        const lockButton = controls.getByText(/unlock gate/i);
        
        expect(closeButton.disabled).toBeTruthy();
        expect(lockButton.disabled).toBeFalsy();
    });

    it('the locked toggle button is disabled if the gate is open', () => {
        const state = {
            locked: false,
            closed: false
        }
        const controls = rtl.render(<Controls locked={state.locked} closed={state.closed}/>);
        const closeButton = controls.getByText(/close gate/i);
        const lockButton = controls.getByText(/lock gate/i);
        
        expect(closeButton.disabled).toBeFalsy();
        expect(lockButton.disabled).toBeTruthy();
    });

});