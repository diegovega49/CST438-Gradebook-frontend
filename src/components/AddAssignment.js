import React, {useState} from "react";
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AddAssignment = (props) => {
    const [assignment, setAssignment] = useState({
        name: '',
        dueDate: '',
        course: '',
    });
    const [modal, setModal] = useState(false);

    const handleChange = (e) => {
        setAssignment({...assignment, [e.target.name]: [e.target.value]});
    }

    const handleAdd = () => {
        this.props.addAssignmentApi(assignment);
        console.log("new assignment saved: " + assignment.name + " " + assignment.dueDate + " " + assignment.course);
        handleClose();
    }

    const handleClose = () => {
        setModal(false);
        console.log("modal closed");
    }

    const handleOpen = () => {
        setModal(true);
    }

    return (

        <div>
        <Button variant="outlined" color="primary" style={{margin: 10}} onClick={handleOpen}>
          Add Assignment
        </Button>
        <Dialog open={modal} onClose={handleClose}>
            <DialogTitle>Add Student</DialogTitle>
            <DialogContent  style={{paddingTop: 20}} >
              <TextField  autoFocus fullWidth label="Name" name="name"  onChange={handleChange}/> 
              <TextField style = {{paddingTop: 10}} autoFocus fullWidth label="Due Date" name="dueDate"  onChange={handleChange}/> 
              <TextField style = {{paddingTop: 10}} autoFocus fullWidth label="Course" name="course"  onChange={handleChange}/> 
            </DialogContent>
            <DialogActions>
              <Button color="secondary" onClick={handleClose}>Cancel</Button>
              <Button id="Add" color="primary" onClick={handleAdd}>Add</Button>
            </DialogActions>
          </Dialog>      
      </div>

    );
}

AddAssignment.propTypes = {
    addAssignmentApi: PropTypes.func
}

export default AddAssignment;
