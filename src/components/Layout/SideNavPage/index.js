import React from 'react';
import PropTypes from 'prop-types';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const SwipeableTemporaryDrawer = ({ sideList, callBack, isOpen }) => {
    return (
        <div>
            <SwipeableDrawer
                open={isOpen}
                onClose={callBack(false)}
                onOpen={callBack(true)}>
                <div
                    tabIndex={0}
                    role='button'
                    onClick={callBack(false)}
                    onKeyDown={callBack(false)}>
                    {sideList}
                </div>
            </SwipeableDrawer>
        </div>
    );
};

SwipeableTemporaryDrawer.propTypes = {
    sideList: PropTypes.element,
    callBack: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default SwipeableTemporaryDrawer;
