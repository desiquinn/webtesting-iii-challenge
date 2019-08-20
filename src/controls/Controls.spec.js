// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls.js';


describe('<Contols />', () => {

    it('can not be opened or closed if locked', () => {
        
        const controls = rtl.render(<Controls/>);

        let lockButton = controls.getByText(/lock gate/i);
        let openButton = controls.getByText(/close gate/i);

        expect(openButton.textContent).toBe("Close Gate");
    });
    
});
