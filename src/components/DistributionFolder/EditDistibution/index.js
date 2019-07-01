import React from 'react';
import PropTypes from 'prop-types';
import { DatePickerSetup } from '../../../Utils/ConfigSetup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { DatePicker } from '@material-ui/pickers';

function EditDistribution(props) {
    const [date, setDate] = React.useState(new Date());
    const [checked, setChecked] = React.useState(false);
    return (
        <Grid container direction='column' justify='center' alignItems='center'>
            <Grid item xs={6}>
                <Button variant='outlined'>Persona</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant='outlined'>Publicacion</Button>
            </Grid>
            <Grid item xs={12}>
                <DatePicker
                    label='Fecha: '
                    value={date}
                    onChange={newDate => setDate(newDate)}
                    views={DatePickerSetup}
                    variant='dialog'
                />
            </Grid>
            <Grid item xs={12}>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>
                        Assign responsibility
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                    value='gilad'
                                />
                            }
                            label='Gilad Gray'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                    value='jason'
                                />
                            }
                            label='Jason Killian'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                    value='antoine'
                                />
                            }
                            label='Antoine Llorca'
                        />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                </FormControl>
            </Grid>
        </Grid>
    );
}

EditDistribution.propTypes = {};

export default EditDistribution;
