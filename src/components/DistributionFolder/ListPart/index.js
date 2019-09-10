import React from 'react';
import PropTypes from 'prop-types';
import DistList from '../DistList';
import FloatingActionButtons from '../../FloatingButton';
import AddIcon from '@material-ui/icons/Add';
import { styles } from './styles';
import { DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import { DatePickerSetup } from '../../../Utils/ConfigSetup';
import Selector from '../../InFolder/Selector';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ListPart({ listData, classes }) {
    const [date, setDate] = React.useState(new Date());
    const [repartidor, setRepartidor] = React.useState('Todos');
    // SETED PROPS
    const icon = <AddIcon />;
    const tooltip = 'Añadir un nuevo reparto';
    const items = ['Todos', 'Nacho', 'Jorgelino', 'Abueloso'];
    const name = 'Repartidor';

    return (
        <div>
            <Grid
                container
                spacing={1}
                direction='column'
                justify='center'
                alignItems='center'
                className={classes.selector}>
                <Grid item xs={12}>
                    <div className={classes.datePicker}>
                        <DatePicker
                            label='Fecha: '
                            value={date}
                            onChange={newDate => setDate(newDate)}
                            views={DatePickerSetup}
                            variant='dialog'
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Selector
                        name={name}
                        value={repartidor}
                        items={items}
                        onChange={rep => {
                            setRepartidor(rep);
                        }}
                    />
                </Grid>
            </Grid>

            <DistList listData={listData} />
            <Link to='editDist'>
                <FloatingActionButtons
                    color='secondary'
                    adria='add'
                    icon={icon}
                    tooltip={tooltip}
                    clickHandler={() => {}}
                />
            </Link>
        </div>
    );
}

ListPart.propTypes = {
    listData: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListPart);
