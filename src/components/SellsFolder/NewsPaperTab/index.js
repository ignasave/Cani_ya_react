import React from 'react';

import PropTypes from 'prop-types';
import ListOfNewsPaper from '../ListOfNewsPaper';
import { DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';

import { DatePickerSetup } from '../../../Utils/ConfigSetup';
import { styles } from './styles';

const items = [
    { name: 'Clarin', secondary: 'Fecha: 04/06/2019' },
    { name: 'Nacion', secondary: 'Fecha: 04/06/2019' },
    { name: 'Capital', secondary: 'Fecha: 04/06/2019' },
];

function NewsPaperTab({ classes }) {
    const [date, setDate] = React.useState(new Date());

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
        </>
    );
}

NewsPaperTab.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsPaperTab);
