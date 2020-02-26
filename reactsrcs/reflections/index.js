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
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import DeleteIcon from "@material-ui/icons/Delete";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ViewWeekIcon from "@material-ui/icons/ViewWeek";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { grid } from "@material-ui/system";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TimelineIcon from "@material-ui/icons/Timeline";
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
                Looking Back
              </Typography>
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

const RowofReflection = ({
  statusColor = "#5fb551",
  dateStr = (
    <React.Fragment>
      SUN <br /> 06
    </React.Fragment>
  ),
  title = "A pretty good day",
  detail = "I got an 100% on my CS214 Midterm and I feel like I am so happy~~"
}) => {
  return (
    <Grid
      container
      item
      xs={12}
      spacing={3}
      direction="row"
      justify="left"
      alignItems="center"
    >
      <Grid item container xs={2} justify="center">
        <img
          alt="face"
          width="100%"
          src="https://res.cloudinary.com/turdlife/image/upload/v1492864443/happy_ampvnc.svg"
        />
      </Grid>
      <Grid item container xs={1} justify="center">
        <Typography align="center" color="primary" variant="h6">
          <Box fontWeight="fontWeightLight">{dateStr}</Box>
        </Typography>
      </Grid>
      <Grid item container xs={9} justify="center">
        <Card style={{ backgroundColor: statusColor }}>
          <CardActionArea>
            <CardContent>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={11}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ color: "white" }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "white" }}
                    component="p"
                  >
                    {detail}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <ArrowForwardIosIcon style={{ color: "white" }} />
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

const ReminderBody = () => {
  const styles = ReminderBodyStyles();
  const switchPage = (event, pagenum)=>
  {
    switch(pagenum)
    {
      case 1:
        
        break;
        case 2:
          window.location.href = 'visualisation.html';
    }
  }

  return (
    <ThemeProvider theme={primaryTheme}>
      <div className={styles.reminderBody} style={{ marginBottom: 80 }}>
        <TopBar />
        <br />
        <RowofReflection />
        <RowofReflection
          statusColor="#c2b93e"
          dateStr={
            <React.Fragment>
              MON <br /> 07
            </React.Fragment>
          }
          title="Not the best day"
          detail="I don't think the quiz went great, but on a positive note CS110 is quite fun"
        />
        <RowofReflection
          dateStr={
            <React.Fragment>
              TUE <br /> 08
            </React.Fragment>
          }
          title="Internship Offer LET'S GO"
          detail="facebook reached back with an offer. I am so keen to finally go to silicon valley!"
        />
        <RowofReflection
          dateStr={
            <React.Fragment>
              WED <br /> 09
            </React.Fragment>
          }
          title="Just a self care day"
          detail="Not much happened; I enjoyed every single second of it though. Wish everyday could be like this!"
        />
        <RowofReflection
          statusColor="#c2b93e"
          dateStr={
            <React.Fragment>
              Thur <br /> 10
            </React.Fragment>
          }
          title="Not the best day"
          detail="I don't think the quiz went great, but on a positive note CS110 is quite fun"
        />
        <RowofReflection
          statusColor="#c2b93e"
          dateStr={
            <React.Fragment>
              Fri <br /> 10
            </React.Fragment>
          }
          title="Not the best day"
          detail="I don't think the quiz went great, but on a positive note CS110 is quite fun"
        />
        <RowofReflection
          statusColor="#c2b93e"
          dateStr={
            <React.Fragment>
              Sat <br /> 10
            </React.Fragment>
          }
          title="Not the best day"
          detail="I don't think the quiz went great, but on a positive note CS110 is quite fun"
        />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        />
      </div>
      <Paper square style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <Tabs
          value={0}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
          onChange ={switchPage}
        >
          <Tab icon={<ViewWeekIcon />} label="Weekly" />
          <Tab icon={<DateRangeIcon />} label="Monthly" />
          <Tab icon={<TimelineIcon />} label="Overview" />
        </Tabs>
      </Paper>
    </ThemeProvider>
  );
};

ReactDOM.render(<ReminderBody />, document.querySelector("#MainContainer"));

