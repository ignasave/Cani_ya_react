import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    margin : {
        margin: 'auto',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1)
    },
    flex: {
        display:'flex'
    }
}));

export default useStyles