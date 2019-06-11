import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import LinkTab from '../LinkTab';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

function NavTabs({ tabsData }) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function makeLinkTab() {
        return tabsData.map((element, index) => {
            return (
                <LinkTab
                    label={element.label}
                    href={element.href}
                    key={index}
                />
            );
        });
    }

    function renderCorrectTab() {
        return tabsData.map((element, index) => {
            if (value === index) {
                return <Fragment key={index}>{element.component}</Fragment>;
            }
            return null;
        });
    }

    return (
        <NoSsr>
            <div className={classes.root}>
                <AppBar position='static'>
                    <Tabs
                        variant='fullWidth'
                        value={value}
                        onChange={handleChange}>
                        {makeLinkTab()}
                    </Tabs>
                </AppBar>
                {renderCorrectTab()}
            </div>
        </NoSsr>
    );
}

export default NavTabs;
