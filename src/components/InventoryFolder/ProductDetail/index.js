import React from 'react';

import Check from '@material-ui/icons/Check';

import FormDetail from '../FormDetail';
import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
 
function ProductDetail() {
    const color = 'secondary';
    const aria = 'confirm';
    const icon = <Check />;
    const tooltip = 'Confirma nuevo producto';

    return (
        <div>
            <FormDetail />
            <FloatingActionButton
                color={color}
                aria={aria}
                icon={icon}
                tooltip={tooltip}
                clickHandler={() => {}}
            />
        </div>
    );
}


export default ProductDetail;
