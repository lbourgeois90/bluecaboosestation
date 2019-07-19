import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Nav from '../Nav/Nav'

class LandingPage extends Component {
  state = {
  
  };



  render() {
      const {classes} = this.props;
      return (
        <React.Fragment>
    
            <Grid 
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={12}
            >

              <Nav/>
            
      
                    
            </Grid>

          </React.Fragment>
    );
  }
}


const styles = theme => ({
 
});


// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapReduxStateToProps = state => ({
  errors: state.errors,
});

export default connect( mapReduxStateToProps )(withStyles(styles)(LandingPage));