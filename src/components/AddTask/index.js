import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {addNewTask} from "../../store/actions";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        justifyContent: "center"
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
    },
    textField:{
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    form: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

class AddTask extends Component{

    state = {
        task: ""
    };

    render() {
        {
            const {classes,addNewTask} = this.props;
            return (
                <div className={classes.root}>
                    <Grid container spacing={24} className={classes.container}>
                        <Grid item xs={12} sm={9} md={7}>
                            <Paper className={classes.paper}>
                                <form className={classes.form} onSubmit={(event) => {
                                    this.submitHandler(event, addNewTask)
                                }}>
                                    <TextField
                                        id="outlined-name"
                                        label="Enter new Task"
                                        className={classes.textField}
                                        value={this.state.task}
                                        onChange={this.handleChange}
                                        margin="dense"
                                        required={true}
                                    />

                                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                                        Add task
                                    </Button>
                                </form>
                            </Paper>

                        </Grid>
                    </Grid>
                </div>
            )
        }
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        });
    };

    submitHandler = (e,addNewTask) => {
        e.preventDefault();
        console.log("submitHandler",e.target[0].value);
        addNewTask(this.state.task);
        this.setState({
            task: ""
        });
    };
}

const putStateToProps = (state) => {
    return {
        ...state
    }
};

const putActionsToComponent = (dispatch) => {
    return {
        addNewTask: bindActionCreators(addNewTask,dispatch)
    }
};

export default withStyles(styles)(connect(
    putStateToProps,
    putActionsToComponent
)(AddTask));