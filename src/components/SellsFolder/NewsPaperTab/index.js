import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ListOfNewsPaper from '../ListOfNewsPaper';
import { DatePicker } from '@material-ui/pickers';
import { styles } from './styles';

const items = [{ name: 'CLARIN' }, { name: 'NACION' }, { name: 'CAPITAL' }];

function NewsPaperTab({ classes }) {
    const [date, setDate] = React.useState(new Date());

    return (
        <Fragment>
            <div className={classes.datePicker}>
                <DatePicker
                    label='Fecha: '
                    value={date}
                    onChange={newDate => setDate(newDate)}
                    views={['day', 'month', 'year']}
                    variant='dialog'
                />
            </div>
            <ListOfNewsPaper items={items} />
        </Fragment>
    );
}

NewsPaperTab.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsPaperTab);
