import React from 'react';
import PropTypes from 'prop-types';
import DistList from '../DistList';
import FloatingActionButtons from '../../FloatingButton';
import AddIcon from '@material-ui/icons/Add';
import { styles } from './styles';
import { DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import { DatePickerSetup } from '../../../Utils/ConfigSetup';

function ListPart({ listData, classes }) {
    
    const [date, setDate] = React.useState(new Date())
    const icon = <AddIcon />;
    const tooltip = 'Añadir un nuevo reparto';

    return (
        <div>
            <div className={classes.datePicker}>
                <DatePicker
                    label='Fecha: '
                    value={date}
                    onChange={newDate => setDate(newDate)}
                    views={DatePickerSetup}
                    variant='dialog'
                />
            </div>
            <DistList listData={listData} />
            <FloatingActionButtons
                color='secondary'
                adria='add'
                icon={icon}
                tooltip={tooltip}
                clickHandler={() => {}}
            />
        </div>
    );
}

ListPart.propTypes = {
    listData: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListPart);
