import React from 'react';
import PropTypes from 'prop-types';
import FormDetail from '../FormDetail';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FloatingButton from '../../FloatingButton';
import Check from '@material-ui/icons/Check';

const useStyles = makeStyles(theme => ({
    image: {
        width: 80,
        height: 80,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function ProductDetail(props) {
    const classes = useStyles();

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
