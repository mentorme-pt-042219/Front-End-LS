import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Search from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment';

export default class QSearchBar extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };



  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Search Previously Asked Questions
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
          <DialogContent>
            <DialogContentText>
             Search Archives Based on Key Words or Titles!
            </DialogContentText>
            <TextField
          id="outlined-full-width"
          // label="Label"
          style={{ margin: 8 }}
          placeholder="Search Questions"
          // helperText="Search Archives based on Key Words or Titles!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
               <Search/>
              </InputAdornment>
            ),
          }}
        />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
             Search
            </Button>
            <Button onClick={this.handleClose} color="primary">
           Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}