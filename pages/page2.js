import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function handleClick(){
    this.setState({ open: !this.state.open });
}

function FullWidthGrid(props) {
    const { classes } = props;


    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={6} sm={6}>
                    <Paper className={classes.paper}>
                        1
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Paper className={classes.paper}>
                        2
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);