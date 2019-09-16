// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard.js';


describe('<Dashboard />', () => {

    it('should default to unlocked and open', () => {
        const { getByText } = rtl.render(<Dashboard/>);
        const defaultLock = getByText(/unlocked/i);
        const defaultOpen = getByText(/open/i);

        expect(defaultLock).toBeTruthy();
        expect(defaultOpen).toBeTruthy();
    });

    it('should show the controls and display', () => {

        const display = rtl.render(<Dashboard />);

        display.getByText(/unlocked/i);
        display.getByText(/locked/i);
        display.getByText(/close gate/i);
        display.getByText(/lock gate/i);
    });

    it('can not be opened or closed if locked', () => {
        
        const dashboard = rtl.render(<Dashboard/>);

        let lockButton = dashboard.getByText(/lock gate/i);
        let openButton = dashboard.getByText(/close gate/i);

        expect(openButton.textContent).toBe("Close Gate");

        rtl.fireEvent.click(openButton);
        expect(openButton.textContent).toBe("Open Gate");

        rtl.fireEvent.click(lockButton);
        expect(lockButton.textContent).toBe("Unlock Gate");
        expect(openButton.textContent).toBe("Open Gate");

        rtl.fireEvent.click(openButton);
        expect(openButton.textContent).toBe("Open Gate");
    });
});