import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationIcon from '@material-ui/icons/LocationOn';

import { useState, useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.primary
    },
    columnGap: {
      paddingLeft: theme.spacing(0),
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(1)
      }
    },
    listItem: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0)
    },
    link: {
      '&:hover': {
        color: "#ff6357",
      },
    },
    secondaryColor: {
      color: theme.palette.text.secondary
    },
    mainColor: {
      color: theme.palette.primary.main
    },
    blueColor: {
      color: theme.palette.info.main
    },
    projectHeading: {
      marginTop: theme.spacing(1)
    },
    footer: {
      backgroundColor: "#ffffff",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
      textAlign: "center"
    },
    header: {
      height: theme.spacing(3)
    },
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      
    }
    
}));

export default function Resume() {
   
  const [data, setData] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
      fetch('./data.json').then(response => {
        return response.json();
      }).then(jdata => {
        setData(jdata.data);
        setIsDataLoaded(true);
      }).catch(err => {
        console.log("Error fetching resume data " + err);
      });
    }, [])

  return (
    <div>
      {isDataLoaded &&
        <ResumeContents data={data} />
      }
    </div>
  );
}

function ResumeContents(props) {
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="static" className={classes.header}>
      </AppBar>
      <Container maxWidth="md">
        <IntroItem data={props.data} />
        <Grid container direction="row-reverse" item xs={12}>
          <Grid item xs={12} md={8} className={classes.columnGap}>
            <ProfileItem data={props.data} />
            <ExperienceItem data={props.data} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PersonalInfoItem data={props.data} />
            <SkillsItem data={props.data} />
            <EducationItem data={props.data} />
            <LanguageItem data={props.data} />
            <InterestsItem data={props.data} />
          </Grid>
        </Grid>
      </Container>
      <Box component="footer" className={classes.footer}>
        <Typography variant="body2" >
          <Link href="https://pbxr250.github.io/Resume/" target="_blank" color="inherit" className={classes.link}>
            Created with React Material-UI 
          </Link>
        </Typography>
      </Box>
      <Link href="Resume_PavelBrouka.pdf" target="_blank" color="inherit" className={classes.link}>
        <Fab size="small" color="primary" aria-label="download" className={classes.fab}>
          <SaveAltIcon />
        </Fab>
      </Link>
    </Box>
  );
}



function IntroItem(props) {
  const classes = useStyles();
  return (
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.mainColor}>
          {props.data.name}
        </Typography>
        <Divider />
        <Typography variant="body2" className={classes.projectHeading} >
          {props.data.resume.Intro}
        </Typography>
      </Paper>
  );
}
function ProfileItem(props) {
  const classes = useStyles();
  const profileItems = props.data.resume.ProfessionalProfile.map((line, index) =>
    <ListItem  key={index} >
      <ListItemText primary={' - ' + line} className={classes.primaryColor} />
    </ListItem>
  );
  return (
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.mainColor} gutterBottom>
          Professional Profile
        </Typography>
        {profileItems}
      </Paper>
  );
}
function ExperienceItem(props) {
  const classes = useStyles();
  const profileItems = props.data.resume.Experience[0].projects.map((project) =>
    <Box key={project.name}>
      <Divider light />
      <Typography variant="subtitle2" className={classes.projectHeading} gutterBottom>
        {project.name}
      </Typography>
      {project.lines.map((line, index) => 
        <ListItem  key={index} >
          <ListItemText primary={' - ' + line} />
        </ListItem>
      )}
    </Box>
  );
  const profileItems2 = props.data.resume.Experience[1].projects[0].lines.map((line, index) =>
      <ListItem  key={index} >
        <ListItemText primary={' - ' + line} />
      </ListItem>
  );
  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" className={classes.mainColor} gutterBottom>
        Professional Experience
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Typography variant="subtitle1" className={classes.blueColor} gutterBottom>
            {props.data.resume.Experience[0].year}
          </Typography>
          <Divider light />
          <Typography variant="subtitle2" className={classes.projectHeading} gutterBottom>
            Projects
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.blueColor} gutterBottom>
            <Link href="https://ibagroupit.com/" target="_blank" color="inherit" className={classes.link}>
              {props.data.resume.Experience[0].pos}
            </Link>
          </Typography>
          {profileItems}
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Divider light />
          <Typography variant="subtitle1" className={classes.blueColor} gutterBottom>
            {props.data.resume.Experience[1].year}
          </Typography>
          <Divider light />
          <Typography variant="subtitle2" className={classes.projectHeading} gutterBottom>
            Projects
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Divider light />
          <Typography variant="subtitle1" className={classes.blueColor} gutterBottom>
            {props.data.resume.Experience[1].pos}
          </Typography>
          <Divider light />
          {profileItems2}
        </Grid>
      </Grid>
    </Paper>
  );
}
function PersonalInfoItem(props) {
  const classes = useStyles();
  return (
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.mainColor} gutterBottom>
          Personal Info
        </Typography>
        <Box alignItems="center" display="flex" mb={1}>
          <LocationIcon fontSize="small"/>
          <Box pl={1}>
            <Typography variant="body2" display="inline">
              <Link href="https://www.google.com/maps/place/Ulitsa+Belomorskaya+23,+Minsk/@53.9256581,27.5866807,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbcf0ba77f1981:0xdb25eb1cf0cb7e92!8m2!3d53.9256581!4d27.5888694?hl=en" target="_blank" color="inherit" className={classes.link}>{props.data.resume.PersonalInfo.Address}</Link>
            </Typography>
          </Box>
        </Box>
        <Box alignItems="center" display="flex" mb={1}>
          <PhoneIcon fontSize="small" />
          <Box pl={1}>
            <Typography variant="body2" display="inline">
              <Link href="tel:375295969956" target="_blank" color="inherit" className={classes.link}>
                {props.data.resume.PersonalInfo.Phone}
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box alignItems="center" display="flex" mb={1}>
          <MailIcon fontSize="small" />
          <Box pl={1}>
            <Typography variant="body2" display="inline">
              <Link href="mailto:pavelbrovko@gmail.com" target="_blank" color="inherit" className={classes.link}>{props.data.resume.PersonalInfo.Email}</Link>
            </Typography>
          </Box>
        </Box>
        <Box alignItems="center" display="flex" mb={1}>
          <LinkedInIcon fontSize="small" />
          <Box pl={1}>
          <Typography variant="body2" display="inline">
              <Link href="https://www.linkedin.com/in/pavel-brouka-b96b2b36/" target="_blank" color="inherit" className={classes.link}>{props.data.resume.PersonalInfo.Linkedin}</Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
  );
}
function SkillsItem(props) {
  const classes = useStyles();
  const webItems = props.data.resume.TechSkills.WebSkills.map((skill) =>
    <Grid item key={skill}>
      <Typography variant="body2">
        {skill}
      </Typography>
    </Grid>
  );
  const otherItems = props.data.resume.TechSkills.Other.map((skill) =>
    <Grid item key={skill}>
      <Typography variant="body2">
        {skill}
      </Typography>
    </Grid>
  );
  return (
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.mainColor} gutterBottom>
          Technical Skills
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Web Skills
        </Typography>
        <Grid container spacing={1}>
          {webItems}
        </Grid>
        <Box mt={1}></Box>
        <Typography variant="subtitle2" gutterBottom>
          Other IT Skills
        </Typography>
        <Grid container spacing={1}>
          {otherItems}
        </Grid>
      </Paper>
  );
}
function EducationItem(props) {
  const classes = useStyles();
  return (
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.mainColor} gutterBottom>
          Education
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {props.data.resume.Education[0].name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {props.data.resume.Education[0].title}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {props.data.resume.Education[1].name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {props.data.resume.Education[1].title}
        </Typography>
      </Paper>
  );
}

function LanguageItem(props) {
  const classes = useStyles();
  const languageItems = props.data.resume.Languages.map((lng) =>
    <ListItem  key={lng.name} className={classes.listItem}>
      <ListItemText primary={lng.name} />
      <ListItemText primary={lng.level} />
    </ListItem>
  );
  return (
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.mainColor} gutterBottom>
          Languages
        </Typography>
        <List aria-label="language">
          {languageItems}
        </List>
      </Paper>
  );
}
function InterestsItem(props) {
  const classes = useStyles();
  const intItems = props.data.resume.Interests.map((int) =>
    <Grid item key={int}>
      <Typography variant="body2">
        {int}
      </Typography>
    </Grid>
  );
  return (
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.mainColor} gutterBottom>
          Interests
        </Typography>
        <Grid container spacing={1}>
          {intItems}
        </Grid>
      </Paper>
  );
}