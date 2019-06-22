import React from 'react';
import FormDetail from '../FormDetail';
import FloatingButton from '../../FloatingButton';
import Check from '@material-ui/icons/Check';
 
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

ProductDetail.propTypes = {};

export default ProductDetail;
