import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
// List
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
// AppBar
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
});

class GuttersGrid extends React.Component {
    state = { open: true };

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    render(){
        const classes = this.props;
        return (
            <Grid container spacing={0} className="container">
                <Grid>
                    <div className="box sidebar">
                        <List className={classes.root} subheader={<ListSubheader>Nested List Items</ListSubheader>}>
                            <ListItem button>
                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Sent mail" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Drafts" />
                            </ListItem>
                            <ListItem button onClick={this.handleClick}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Inbox" />
                                {this.state.open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
                                <List disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText inset primary="Starred" />
                                    </ListItem>

                                </List>
                            </Collapse>
                        </List>
                    </div>
                </Grid>
                <Grid>
                    <div className="box tag">
                        <div className={classes.root}>
                            <AppBar position="static" color="primary">
                                <Toolbar>
                                    <Typography type="title" color="inherit">
                                        Title
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                        </div>
                    </div>
                </Grid>
                <div className="content">
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                    <p>hello world!</p>
                </div>
                <style jsx>
                    {`
                        .container {
                            position: absolute;
                            top: 0;
                            left: 0;
                        }
                        .sidebar {
                            position: fixed;
                            height: 100%;
                            width: 20%;
                            overflow-y: auto;
                            border-right: 1px solid #ccc;
                        }
                        .tag {
                            position: fixed;
                            width: 80%
                            right: 0;
                            z-index: 2;
                        }
                        .content {
                            box-sizing: border-box;
                            position: absolute;
                            top: 64px;
                            left: 20%;
                            width: 80%
                            padding: 30px 50px 20px 50px;
                        }
                    `}
                </style>
                <style global jsx>{`
                    html,body {
                        margin: 0px;
                        height: 100%;
                    }
                `}</style>
            </Grid>
        )
    }
};

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);