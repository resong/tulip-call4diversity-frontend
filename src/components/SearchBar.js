import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Search from "@material-ui/icons/SearchTwoTone";

const styles = theme => ({
  searchBarContainer: {
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    left: '13px',
    top: '27px',
    zIndex: 1000,
    color: '#757575'
  },
  bootstrapInput: {
    marginBottom: 10,
    paddingLeft: '50px',
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "12px",
    width: "calc(100% - 24px)",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
});

const SearchBar = props => {
  const { classes, searchText, onChange } = props;
  return (
    <div className={classes.searchBarContainer}>
      <Search className={classes.inputIcon}/>
      <TextField
        type="text"
        placeholder="Search for event by name"
        value={searchText}
        onChange={onChange}
        margin="normal"
        fullWidth
        InputProps={{
          disableUnderline: true,
          classes: {
            input: classes.bootstrapInput
          },
        }}
      />
    </div>
    
  );
};

export default withStyles(styles)(SearchBar);
