import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { whileStatement } from '@babel/types';

class LandingPage extends Component {
  state = {
  
  };



  render() {
      const {classes} = this.props;
      return (
        <React.Fragment>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar>
                <Button className={classes.navButton} color="inherit">Home</Button>
                <Button className={classes.navButton} color="inherit">Our Story</Button>
                <Button className={classes.navButton} color="inherit">Current Projects</Button>
                <Button className={classes.navButton} color="inherit">Store</Button>
                <Button className={classes.navMyAccount} color="inherit">My Account</Button>
              </Toolbar>
            </AppBar>
          </React.Fragment>
    );
  }
}


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'white',
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    width: 200,
    fontSize: 10,
    paddingRight: 25,
    color: 'black',
  },
  navMyAccount: {
    fontSize: 10,
    width: 200,
    color: 'black',
  }
});


// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapReduxStateToProps = state => ({
  errors: state.errors,
});

export default connect( mapReduxStateToProps )(withStyles(styles)(LandingPage));