import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddIcon from '@material-ui/icons/Add';
import { DatePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { DatePickerSetup } from '../../../Utils/ConfigSetup';
import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
import DistList from '../DistList';
import Selector from '../../InFolder/Selector';
import { styles } from './styles';

function ListPart({ listData, classes }) {
    const [date, setDate] = useState(new Date());
    const [repartidor, setRepartidor] = useState('Todos');
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
                <FloatingActionButton
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
