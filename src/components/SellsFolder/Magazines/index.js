import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DatePicker } from '@material-ui/pickers';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

import { DatePickerSetup } from '../../../Utils/ConfigSetup';
import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
import ListOfNewsPaper from '../ListOfNewsPaper';
import { styles } from './styles';

function Magazines({ classes }) {
    const [date, setDate] = React.useState(new Date());

    const color = 'secondary';
    const icon = <Search />;
    const aria = 'search';
    const tooltip = 'Buscar y agregar un nuevo producto';

    const items = [
        { name: 'Gente', secondary: 'Ed: 315' },
        { name: 'Hola', secondary: 'Ed: 547' },
        { name: 'Caras', secondary: ' Ed: 123' },
    ];
    return (
        <>
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
                    color={color}
                    icon={icon}
                    aria={aria}
                    tooltip={tooltip}
                    clickHandler={() => {}}
                />
            </Link>
        </>
    );
}

Magazines.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Magazines);
