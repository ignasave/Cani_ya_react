import React from 'react';

import Check from '@material-ui/icons/Check';

import FormDetail from '../FormDetail';
import FloatingButton from '../../FloatingButton';
 
function ProductDetail() {
    const color = 'secondary';
    const aria = 'confirm';
    const icon = <Check />;
    const tooltip = 'Confirma nuevo producto';

    return (
        <div>
            <FormDetail />
            <FloatingButton
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
