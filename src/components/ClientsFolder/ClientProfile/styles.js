import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    title: {
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark,
        margin: 0
    }
}));

export default useStyles