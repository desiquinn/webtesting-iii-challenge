// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display.js';

describe('<Display />', () => {

    it('displays if gate is open/closed and if it is locked/unlocked', () => {
        
        const display = rtl.render(<Display />);



    });
    
    it('displays "Closed" if the closed prop is true and "Open" if otherwise', () => {
        
        const display = rtl.render(<Display />);



    });

    it('displays "Locked" if the locked prop is true and "Unlocked" if otherwise', () => {
        
        const display = rtl.render(<Display />);



    });

    it('when locked or closed use the red-led class', () => {
        
        const display = rtl.render(<Display />);



    });

    it('when unlocked or open use the green-led class', () => {
        
        const display = rtl.render(<Display />);



    });
});