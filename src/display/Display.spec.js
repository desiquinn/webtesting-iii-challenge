// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display.js';

describe('<Display />', () => {

    it('displays "Open" if gate is open', () => {
        
        const state = {
            closed: false
        }
        const display = rtl.render(<Display closed={state.closed}/>);
        const open = display.getByText(/open/i);

        expect(open.textContent).toBe("Open");


    });

    it('displays "Closed" if gate is closed', () => {
        
        const state = {
            closed: true
        }
        const display = rtl.render(<Display closed={state.closed}/>);
        const closed = display.getByText(/closed/i);

        expect(closed.textContent).toBe("Closed");


    });

    it('displays "Locked" if gate is locked', () => {
        
        const state = {
            locked: true
        }
        const display = rtl.render(<Display locked={state.locked}/>);
        const locked = display.getByText(/locked/i);

        expect(locked.textContent).toBe("Locked");


    });

    it('displays "Unlocked" if gate is unlocked', () => {
        
        const state = {
            locked: false
        }
        const display = rtl.render(<Display locked={state.locked}/>);
        const unlocked = display.getByText(/unlocked/i);

        expect(unlocked.textContent).toBe("Unlocked");


    });

    it('when locked or closed use the red-led class', () => {
        
        const state = {
            locked: true,
            closed: true
        }
        const display = rtl.render(<Display locked={state.locked} closed={state.closed}/>);
        const locked = display.getByText(/locked/i);
        const closed = display.getByText(/closed/i);

        expect(locked.classList[1]).toBe('red-led');
        expect(closed.classList[1]).toBe('red-led');


    });


    it('when unlocked or open use the green-led class', () => {

        const state = {
            locked: false,
            closed: false
        }
        const display = rtl.render(<Display locked={state.locked} closed={state.closed}/>);
        const unlocked = display.getByText(/unlocked/i);
        const open = display.getByText(/open/i);

        expect(unlocked.classList[1]).toBe('green-led');
        expect(open.classList[1]).toBe('green-led');


    });
});