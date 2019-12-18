import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function DayList({ checked, handleSetChecked }) {
    return (
        <>
            {checked.map((element, index) => {
                return (
                    <FormControlLabel
                        key={`day-${index}`}
                        control={
                            <Checkbox
                                checked={element.value}
                                onChange={handleSetChecked(index)}
                                value={element.day}
                            />
                        }
                        label={
                            element.day.charAt(0).toUpperCase() +
                            element.day.slice(1)
                        }
                    />
                );
            })}
        </>
    );
}

DayList.propTypes = {};

export default DayList;
