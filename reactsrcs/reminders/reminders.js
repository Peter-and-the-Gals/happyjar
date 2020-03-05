import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddIcon from "@material-ui/icons/Add";
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { ThemeProvider } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import Fab from "@material-ui/core/Fab";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const primaryTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#4ca2db"
    },
    secondary: {
      main: "#1b5e20"
    }
  },
  status: {
    danger: "orange"
  },
  Error: {
    main: "#f44336"
  }
});
class TopBar extends React.Component {
  render() {
    const classes = makeStyles(theme => ({
      topbar: {
        flexGrow: 0
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      title: {
        flexGrow: 0
      },
      appBar: {
        color: "primary"
      }
    }));

    return (
      <ThemeProvider theme={primaryTheme}>
        <div className={classes.topbar}>
          <AppBar position="static" elevation={1} className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => (document.location.href = "homepage.html")}
              >
                <ArrowBackIosIcon style ={{color:"white"}}/>
              </IconButton>
              <Typography variant="h6" className={classes.title} style={{color:"white"}}>
                Reminders
              </Typography>
              <img
                alt="happy jar"
                src="images/happyjar3.png"
                height="40"
                style={{ marginLeft: 10 }}
              />
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>
    );
  }
}
const ReminderBodyStyles = makeStyles(theme => ({
  reminderBody: {
    backgroundColor: "#EDF8B1",
    minHeight: "100%",
    flexGrow: 1
  },
  innerFormContainer: {
    margin: "3% 3% 3% 3%",
    padding: "3% 3% 3% 3%"
    // backgroundColor: "#4a148c"
  },
  addActionBtn: {
    position: "fixed",
    bottom: 10,
    right: 10
  },
  finishActionBtn: {
    position: "fixed",
    bottom: 10,
    left: 10
  },
  innerReminders: {
    // marginTop: "1%",
    // marginBottom: "1%"
  }
}));

const ReminderBody = () => {
  const styles = ReminderBodyStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [reminders, updateReminders] = React.useState([]);
  const updateRemindersOuter = () => {
    updateShouldHideHelperText(true);
    updateReminders(items => [...items, items.length]);
  };
  const [shouldHideHelperText, updateShouldHideHelperText] = React.useState(
    false
  );
  const deleteRemindersOuter = i => {
    // reminders.splice(i,1)
    if (reminders.length === 1) {
      updateShouldHideHelperText(false);
    }
    updateReminders(items => items.filter((d, index) => index !== i));
  };
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <ThemeProvider theme={primaryTheme}>
      <div className={styles.reminderBody}>
        <TopBar />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {reminders.map((d, i) => (
            <React.Fragment>
              <Paper elevation={1} className={styles.innerFormContainer}>
                <Grid container spacing={2}>
                  <Grid item xs={6} className={styles.innerReminders}>
                    <Typography variant="h6">Reminder {d + 1}</Typography>
                    <TimePicker
                      margin="normal"
                      id="time-picker"
                      label="Time picker"
                      KeyboardButtonProps={{
                        "aria-label": "change time"
                      }}
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      p={1}
                      m={1}
                    >
                      <Box>
                        <Button
                          variant="contained"
                          startIcon={<DeleteIcon />}
                          style={{
                            backgroundColor: "#f44336",
                            color: "white"
                          }}
                          onClick={() => deleteRemindersOuter(i)}
                        >
                          Delete
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </React.Fragment>
          ))}
        </MuiPickersUtilsProvider>
        <div hidden={shouldHideHelperText}>
          <Typography
            variant="h5"
            style={{ color: "grey", marginLeft: 10, marginTop: 10 }}
          >
            Click the add button to add an reminder
          </Typography>
          <img
            src="images/happyjar.png"
            alt=""
            style={{
              width: "70%",
              height: "70%",
              marginLeft: "5%",
              marginTop: "5%"
            }}
          />
        </div>
        <Fab
          className={styles.addActionBtn}
          color="primary"
          aria-label="add"
          onClick={updateRemindersOuter}
        >
          <AddIcon style={{ color: "white" }}  />
        </Fab>

        <Fab
          className={styles.finishActionBtn}
          color="secondary"
          aria-label="add"
          onClick={() => (document.location.href = "homepage.html")}
        >
          <DoneIcon style={{ color: "white" }} />
        </Fab>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<ReminderBody />, document.querySelector("#MainContainer"));
