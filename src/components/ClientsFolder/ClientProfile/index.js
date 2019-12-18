import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import ClientHistory from '../ClientHistory';
import ClientInfo from '../ClientInfo';
import NavTabs from '../../../sharedComponents/NavTab';
import useStyles from './styles';

const tabItems = [
    {
        label: 'Informacion',
        href: 'page1',
        component: <ClientInfo />,
    },
    {
        label: 'Historial',
        href: 'page2',
        component: <ClientHistory />,
    },
];

const ClientProfile = props => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.title}>
                <Typography variant='h6'>Pelitos</Typography>
            </div>
            <NavTabs tabsData={tabItems} />
        </>
    );
};

ClientProfile.propTypes = {};

export default ClientProfile;
