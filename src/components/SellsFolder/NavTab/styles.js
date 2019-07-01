import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: theme.palette.primary.dark
    }
}));