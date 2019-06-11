import ErrorMessage from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<ErrorMessage />', () => {
    let container;

    beforeEach(() => {
        container = shallow(<ErrorMessage />);
    });

    describe('render', () => {
        it('should render', () => {
            expect(container).toHaveLength(1);
        });
    });
});
