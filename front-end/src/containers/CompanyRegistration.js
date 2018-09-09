import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../Registration.css';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    root: {
        width: '50%',
        maxWidth: 500,
    },
    root2: {
       height:600,
       width:1200,
       marginLeft:20,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
    subButton: {
        color:'white',
        background:'green',
        marginLeft:10,
    },
    alignButton: {
      marginLeft:10,
    }
});


class CompanyRegistration extends Component {
    
    constructor(props){
      super(props);
      this.state = {
        name: '',
        address: '',
        nicNo:'',
        dob:'',
        mobileNo:'',
        studentNo:'',
        degreeCompleted:'',
        cGPA:'',
        companyName:'',
        companyAddress:'',
        internDuration:'',
        year:'',
        semester:'',
        register:{},
      };
    }
    
    /*static defaultProps = {

      CompletedSemester :['1st year 1st sem','1st year 2nd sem',
                          '2nd year 2nd sem','3rd year 1st sem',
                          '3rd year 2nd sem','4th year 1st sem',
                          '4th year 2nd sem']
      }  */
    
      handleChange = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.id]: event.target.value,
        });
      };

      handleClear = event => {
        let prevState = this.state;
          for(let key in prevState) {
            prevState[key] = '';
            this.setState({prevState});
            this.setState({name:''});
      }}  
      

      SubmitForm = (e) => {
         
        e.preventDefault();
       
        console.log("submitted");
        // console.log(this.state.name);
       /*  this.setState({register:{        
              name:this.state.name,
              address:this.state.address,
              nic:this.state.nicNo,
              dob:this.state.dob,
              mobilePhone:this.state.mobileNo,
              stdId:this.state.studentNo,
              degreeCompleted:this.state.degreeCompleted,
              cgpa:this.state.cGPA,
              company:{
                companyName:this.state.companyName,
                companyAddress:this.state.address,
              },
              internDuration:this.state.internDuration,
         }},()=>{
             console.log(this.state.register);
             console.log("submitted");
             alert("submitted");
         });*/
         //console.log(this.refs.name.value);
         
      }

  render() {
    const { classes } = this.props;
    return (
        <div>
        <br/>
        
        <Paper className={classes.root2}>
        <form className="container"  onSubmit={this.SubmitForm}>
        <br/>
        <Grid item md>
                <div className="root" >
                     <Typography variant="display1" gutterBottom>
                          Company Registration
                     </Typography>
                </div>
        </Grid>    
        <table >
        
            <tbody>           
            <tr>
            <br/>
            <div className="root" className="cell">
                <Typography variant="title" gutterBottom>
                    Student Details
                </Typography>
            </div>
            </tr>
                <tr>
                  <td >
                  <TextField
                    id="name"
                    required label="Name"
                    className="textField"
                    onChange={this.handleChange}
                    margin="normal"
                  />
                  </td>
                  <td >
                    <div className="Text">
                    <TextField
                      id="address"
                      required label="Address"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    </div>
                  
                  </td>
                  <td>
                    <div className="Text"> 
                    <TextField
                      id="nicno"
                      required label="NICNo"                     
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    </div>
                  </td>
                
                </tr>
 
                <tr >
                  <td>
                    <TextField
                      id="dob"
                      required label="DOB"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                  </td>
                  <td>
                    <div className="Text"> 
                    <TextField
                      id="mobileNo"
                      required label="MobileNo"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    </div>
                  </td>
                  <td>
                    <div className="Text"> 
                    <TextField
                      id="email"
                      required label="email"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    </div>
                  </td>
                </tr>
                <tr >
                  <td>
                    <TextField
                      id="studentNo"
                      required label="StudentNo"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                  </td>
                  <td>
                    <div className="Text"> 
                        <br/>
                                  
                        <TextField
                        id="year"
                        required label="Year Completed"
                        className="textField"
                        onChange={this.handleChange}
                        margin="small"
                        />
                         <TextField
                        id="semester"
                        required label="Semester Completed"
                        className="textField"
                        onChange={this.handleChange}
                        margin="small"
                        />
                    </div>
                  </td>
                  <td>
                    <div className="Text"> 
                    <TextField
                      id="cGPA"
                      required label="CGPA"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    </div>
                  </td>
                </tr>
                <br/>
                <tr>
                    <td> <div className="root" className="cell">
                      <Typography variant="title">
                        Company Details
                      </Typography>
                    </div></td>
                    <td></td>
                   
                </tr>
                <tr >
                  <td>
                    <TextField
                      id="companyName"
                      required label="Company Name"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                  </td>
                  <td>
                    <div className="Text"> 
                    <TextField
                      id="companyAddress"
                      required label="Company Address"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    </div>
                  </td>
                  <td>
                    <div className="Text"> 
                    <TextField
                      id="internDuration"
                      required label="Epected Duration"
                      className="textField"
                      onChange={this.handleChange}
                      margin="normal"
                    />
                    </div>
                  </td>
                </tr>
                
            </tbody>
        </table>
        <br/>
        <Grid container spacing={4} justify='flex-end'>
            <Grid item md={4}>
               <Button variant='contained' type='submit' className={classes.subButton} size='large'  >Register</Button>
               <Button variant='contained' className={classes.subButton} size='large'>Clear</Button>  
            </Grid>         
        </Grid>        
      </form>
      </Paper>
      </div>
    );
  }
}
CompanyRegistration.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles (styles)(CompanyRegistration);
