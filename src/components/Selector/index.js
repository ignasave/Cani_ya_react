import React, { Component } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { styles } from './styles';

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelWidth: 0,
        };
    }

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    handleChange = event => {
        this.props.onChange(event.target.value)
    };

    render() {
        const { classes, name, items, value } = this.props;
        return (
            <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel
                    ref={ref => {
                        this.InputLabelRef = ref;
                    }}
                    htmlFor={name}>
                    {name}
                </InputLabel>
                <Select
                    value={value}
                    onChange={this.handleChange}
                    input={
                        <OutlinedInput
                            labelWidth={this.state.labelWidth}
                            name={name}
                            id={name}
                        />
                    }>
                    {items.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        );
    }
}

Selector.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
};

export default withStyles(styles)(Selector);
