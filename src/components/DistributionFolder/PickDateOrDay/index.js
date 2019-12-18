import React, { useState } from 'react';

import { DatePicker } from '@material-ui/pickers';
import { DatePickerSetup } from '../../../Utils/ConfigSetup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';

function PickDateOrDay() {
    const [dateOrDay, setDateOrDay] = useState('days');
    const [date, setDate] = useState(new Date());
    const [checked, setChecked] = useState({
        domingo: true,
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
    });

    const handleSetChecked = day => event => {
        setChecked({ ...checked, [day]: event.target.checked });
    };

    return (
        <>
            <RadioGroup
                aria-label='dateOrDay'
                name='dateOrDay'
                value={dateOrDay}
                onChange={e => setDateOrDay(e.target.value)}
                row>
                <FormControlLabel
                    value={'days'}
                    control={<Radio color='secondary' />}
                    label='Dias periodicos'
                    labelPlacement='top'
                />
                <FormControlLabel
                    value={'date'}
                    control={<Radio color='primary' />}
                    label='Una sola fecha'
                    labelPlacement='top'
                />
            </RadioGroup>
            <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'>
                {dateOrDay === 'days' ? (
                    <Grid item xs={12}>
                        <FormControl component='fieldset'>
                            <FormLabel component='legend'>Que dias?</FormLabel>
                            {/* HAY QUE REVISAR ESTO */}
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.domingo}
                                            onChange={handleSetChecked(
                                                'domingo'
                                            )}
                                            value='domingo'
                                        />
                                    }
                                    label='Domingo'
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.lunes}
                                            onChange={handleSetChecked('lunes')}
                                            value={'lunes'}
                                        />
                                    }
                                    label='Lunes'
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.martes}
                                            onChange={handleSetChecked(
                                                'martes'
                                            )}
                                            value='martes'
                                        />
                                    }
                                    label='Martes'
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.miercoles}
                                            onChange={handleSetChecked(
                                                'miercoles'
                                            )}
                                            value='miercoles'
                                        />
                                    }
                                    label='Miercoles'
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.jueves}
                                            onChange={handleSetChecked(
                                                'jueves'
                                            )}
                                            value='jueves'
                                        />
                                    }
                                    label='Jueves'
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.viernes}
                                            onChange={handleSetChecked(
                                                'viernes'
                                            )}
                                            value='viernes'
                                        />
                                    }
                                    label='Viernes'
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.sabado}
                                            onChange={handleSetChecked(
                                                'sabado'
                                            )}
                                            value='sabado'
                                        />
                                    }
                                    label='Sabado'
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                ) : (
                    <Grid item xs={12}>
                        <DatePicker
                            label='Fecha : '
                            value={date}
                            onChange={newDate => setDate(newDate)}
                            views={DatePickerSetup}
                            variant='dialog'
                        />
                    </Grid>
                )}
            </Grid>
        </>
    );
}

PickDateOrDay.propTypes = {};

export default PickDateOrDay;
