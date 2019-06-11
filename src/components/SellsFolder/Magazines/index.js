import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { DatePicker } from '@material-ui/pickers';
import { styles } from './styles';
import Search from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import ListOfNewsPaper from '../ListOfNewsPaper';
import { DatePickerSetup } from '../../../Utils/ConfigSetup';
import FloatingActionButton from '../../FloatingButton';

function Magazines({ classes }) {
    const [date, setDate] = React.useState(new Date());
    const items = [
        { name: 'Gente', secondary: 'Ed: 315' },
        { name: 'Hola', secondary: 'Ed: 547' },
        { name: 'Caras', secondary: ' Ed: 123' },
    ];
    return (
        <Fragment>
            <div className={classes.datePicker}>
                <DatePicker
                    label='Fecha: '
                    value={date}
                    onChange={newDate => setDate(newDate)}
                    views={DatePickerSetup}
                    variant='dialog'
                />
            </div>
            <ListOfNewsPaper items={items} />
            <Link to='/search'>
                <FloatingActionButton
                    color='secondary'
                    icon={<Search />}
                    aria='search'
                    tooltip='Buscar y agregar un nuevo producto'
                    clickHandler={() => {}}
                />
            </Link>
        </Fragment>
    );
}

Magazines.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Magazines);
