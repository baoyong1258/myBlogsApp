import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Link from 'next/link';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { changeOpenClock } from '../../store2'



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
    nested: {
        paddingLeft: 20,
    },
});


class GuttersGrid extends React.Component {

    render(){
        const classes = this.props;
        return (
                <Grid container spacing={0} className="container">
                    <Grid>
                        <div className="box sidebar">
                            <List className={classes.root} subheader={<p className={classes.subheader}>by</p>}>
                                {this.props.dataList.map((item, index) =>
                                    <div key={index}>
                                        <ListItem button onClick={() => {this.props.changeDataList(item.title)}} data-index={index} >
                                            <ListItemText primary={item.title}/>
                                            {item.open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        {item.children.map((child, i) =>
                                            <Collapse in={item.open} timeout="auto" unmountOnExit key={i}>
                                                <List component="div" disablePadding>
                                                    <ListItem button>
                                                        <Link href={child.url} as={child.as}>
                                                            <a className="link">{child.title}</a>
                                                        </Link>
                                                        {/*<PostLink title={child.title} url={child.url} className="postlink"></PostLink>*/}
                                                        {/*<ListItemText inset primary={child.title}/>*/}
                                                    </ListItem>
                                                </List>
                                            </Collapse>
                                        )}
                                    </div>
                                )}
                            </List>
                        </div>
                    </Grid>
                    <Grid>
                        <div className="box tag">
                            <div className={classes.root}>
                                <AppBar position="static" color="primary" id="appBar">
                                    <Toolbar>
                                        <Typography type="title" color="inherit">
                                            {this.props.title}
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                            </div>
                        </div>
                    </Grid>
                    <div className="content">
                        {this.props.children}
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
                        .sidebar p {
                            margin: 0;
                            padding-left: 20px;
                            height: 64px;
                            line-height: 64px;
                            color: rgba(0, 0, 0, 0.54);
                            font-weight: 600;
                            border-bottom: 1px solid #ccc;
                        }
                        .tag {
                            position: fixed;
                            width: 80%
                            right: 0;
                            top: 0px;
                            z-index: 2;
                        }
                        a.link {
                            display: block;
                            width: 100%;
                            padding-left: 20px;
                            text-decoration: none;
                            color: rgba(0, 0, 0, 0.5);
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

// const mapStateToProps = ({ dataList }) => ({ dataList })
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeOpenClock: bindActionCreators(changeOpenClock, dispatch)
//     }
// }
//
// const FilterLink = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(GuttersGrid)
//
//
// export default withStyles(styles)(FilterLink);
export default withStyles(styles)(GuttersGrid);