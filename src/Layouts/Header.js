import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    appBar: {
        margin: 'auto',
        align: 'justify',
    },
};

class TemporaryDrawer extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        const fullList = (
            <div className={classes.fullList}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <AppBar position="static" color="default">
                <Toolbar>
                            <Typography component="h2" variant="headline" gutterBottom>
                                Some header menu (for example).....
                            </Typography>
                            <Button onClick={this.toggleDrawer('left', true)}>Menu Left</Button>
                            <Button onClick={this.toggleDrawer('right', true)}>Menu Right</Button>
                            <Button onClick={this.toggleDrawer('top', true)}>Menu Top</Button>
                            <Button onClick={this.toggleDrawer('bottom', true)}>Menu Bottom</Button>
                            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={this.toggleDrawer('left', false)}
                                    onKeyDown={this.toggleDrawer('left', false)}
                                >
                                    {sideList}
                                </div>
                            </Drawer>
                            <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={this.toggleDrawer('top', false)}
                                    onKeyDown={this.toggleDrawer('top', false)}
                                >
                                    {fullList}
                                </div>
                            </Drawer>
                            <Drawer
                                anchor="bottom"
                                open={this.state.bottom}
                                onClose={this.toggleDrawer('bottom', false)}
                            >
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={this.toggleDrawer('bottom', false)}
                                    onKeyDown={this.toggleDrawer('bottom', false)}
                                >
                                    {fullList}
                                </div>
                            </Drawer>
                            <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={this.toggleDrawer('right', false)}
                                    onKeyDown={this.toggleDrawer('right', false)}
                                >
                                    {sideList}
                                </div>
                            </Drawer>
                </Toolbar>
            </AppBar>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);