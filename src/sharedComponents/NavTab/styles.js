import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 0
    },
    appbar: {
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
    }
}));