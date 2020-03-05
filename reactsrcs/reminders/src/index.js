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
import "./styles.css";
import { DatePicker } from "@material-ui/pickers";
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
                <ArrowBackIosIcon style={{ color: "white" }} />
              </IconButton>
              <Typography
                variant="h6"
                className={classes.title}
                style={{ color: "white" }}
              >
                Looking Back
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
  const switchPage = (event,pagenum) => {
    switch(pagenum)
    {
      case 0:
        window.location.href = 'reflections.html';
        break;
        case 2:
          window.location.href = 'visualisation.html';
          break;
    }
  };
  const [selectedDate, handleDateChange] = React.useState(new Date());
  return (
    <ThemeProvider theme={primaryTheme}>
      <div className={styles.reminderBody} style={{ marginBottom: 80 }}>
        <TopBar />
        <br />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            style={{ marginLeft: "2%", marginBottom: "2%" }}
            views={["year", "month"]}
            label="Year and Month"
            scrollMarginBottom
            value={selectedDate}
            onChange={handleDateChange}
            minDate={new Date("2015-03-04")}
            maxDate={new Date("2020-03-04")}
            helperText="Select the month you want to reflect on "
          />
        </MuiPickersUtilsProvider>
        <div id="fullDiv">
          <ul style={{ margin: 0, padding: 0 }}>
            <li>SUN</li>
            <li>MON</li>
            <li>TUE</li>
            <li>WED</li>
            <li>THUR</li>
            <li>FRI</li>
            <li>SAT</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <RowofReflection />
      </div>
      <Paper square style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <Tabs
          value={1}
          onChange={switchPage}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<ViewWeekIcon />} label="Weekly" />
          <Tab
            icon={<DateRangeIcon />}
            label="Monthly"
            onclick="console.log('1')"
          />
          <Tab icon={<TimelineIcon />} label="Overview" />
        </Tabs>
      </Paper>
    </ThemeProvider>
  );
};

ReactDOM.render(<ReminderBody />, document.querySelector("#MainContainer"));

