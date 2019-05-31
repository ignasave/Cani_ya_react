import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import LinkTab from '../LinkTab'
import ListOfNewsPaper from '../ListOfNewsPaper'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <NoSsr>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs variant="fullWidth" value={value} onChange={handleChange}>
            <LinkTab label="Diarios" href="page1" />
            <LinkTab label="Revistas" href="page2" />
          </Tabs>
        </AppBar>
        {value === 0 && <ListOfNewsPaper></ListOfNewsPaper>}
        {value === 1 && <p>hola2</p>}
      </div>
    </NoSsr>
  );
}

export default NavTabs;