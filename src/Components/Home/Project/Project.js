import React from 'react';
import {Link} from "react-router-dom";
import "./Project.css"
import ca from '../../Projects/image/carousel/ca.jpg';
import va from '../../Projects/image/carousel/vn.jpg';
import wf from '../../Projects/image/carousel/wf.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  
const Project = () => {
const classes = useStyles();

    return (
        <div>
            <div>
                <div className="container">
                    <h3 style={{textAlign:"center", paddingTop:100}}>Projete <span style={{color:"#C7EA46"}}>Overview</span> </h3>
                    <div class=" card-deck">
{/*********First Card Start***********/}
            <div className="card" style={{width: "18rem"}}>
                <Card className={classes.root} >
                    <CardHeader avatar={<Avatar className={classes.avatar}>CA</Avatar>} title={<Typography gutterBottom variant="h5" component="h2">Creative Agency</Typography>}/>
                    <CardMedia className={classes.media}image={ca}/>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            I developed this test app for a Developer firm. They are working with creating a website, mobile app, graphics design related staffs like posters, visiting card, flyers.
                            </Typography>
                        </CardContent>
                    <CardActions disableSpacing>
                        <a href="https://creative-agency-client-site.web.app/"><Button variant="contained" color="primary" style={{marginRight:20}}>Website</Button></a>
                        <a href="https://github.com/ssjisan/creative-agency"><Button variant="contained" color="primary" style={{marginRight:20}}> Github </Button></a>
                        <Button variant="contained" style={{backgroundColor:'red', marginLeft:20}}  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCreativeAgency"> More </Button>
                            <div class="modal fade" id="exampleModalCreativeAgency" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Techonologies I used</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <h5>Frontend</h5>
                                    <p>React.js,React Router,HTML5,Bootstrap4,CSS3</p>
                                    <br/>
                                    <h5>Back-end Technology</h5>
                                    <p>Node.js, Express.js, Firebase Authentication, MongoDB, Heroku</p>
                                    <br/>
                                    <h5 style={{color: 'red'}}>For more details please visit my github repository</h5>
                                    <br/>
                                    <a href="https://github.com/ssjisan/creative-agency"><Button variant="contained" color="secondary" style={{marginRight:20}}> Github </Button></a>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                    </CardActions>
                </Card>
            </div>
{/*********First Card End***********/}

{/*********Second Card Start***********/}
            <div className="card" style={{width: "18rem"}}>
                <Card className={classes.root}>
                    <CardHeader avatar={<Avatar className={classes.avatar}>VN</Avatar>} title={<Typography gutterBottom variant="h5" component="h2">Volunteer Network</Typography>}/>
                    <CardMedia className={classes.media}image={va}/>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This full-stack site is developed for an organization that wants to do this volunteer works. A user can participate in any Voluntarily event.                            </Typography>
                        </CardContent>
                    <CardActions disableSpacing>
                        <a href="https://volunteer-network-site-6aa3d.web.app/"><Button variant="contained" color="primary" style={{marginRight:20}}>Website</Button></a>
                        <a href="https://github.com/ssjisan/volunteer-netwrok-site"><Button variant="contained" color="primary" style={{marginRight:20}}>Github</Button></a>
                        <Button variant="contained" style={{backgroundColor:'red', marginLeft:20}}  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalVolunteerNetwrok"> More </Button>
                            <div class="modal fade" id="exampleModalVolunteerNetwrok" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Techonologies I used</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body" id="ca">
                                    <h5>Frontend</h5>
                                    <p>React.js,React Router,HTML5,Bootstrap4,CSS3</p>
                                    <br/>
                                    <h5>Back-end Technology</h5>
                                    <p>Node.js, Express.js, Firebase Authentication, MongoDB, Heroku</p>
                                    <br/>
                                    <h5 style={{color: 'red'}}>For more details please visit my github repository</h5>
                                    <br/>
                                    <a href="https://github.com/ssjisan/volunteer-netwrok-site"><Button variant="contained" color="secondary" style={{marginRight:20}}>Github</Button></a>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                    </CardActions>
                </Card>
            </div>
{/*********Second Card End***********/}

{/********* Third Card Start***********/}
            <div className="card" style={{width: "18rem"}}>
                <Card className={classes.root}>
                    <CardHeader avatar={<Avatar className={classes.avatar}>WF</Avatar>} title={<Typography gutterBottom variant="h5" component="h2">Weather Forecast</Typography>}/>
                    <CardMedia className={classes.media}image={wf}/>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            A simple weather forecast website for searching weather updates based on city name.Showing results with temperature and weather status.
                            </Typography>
                        </CardContent>
                    <CardActions disableSpacing>
                            <a href="https://ssjisan.github.io/weather-app/"><Button variant="contained" color="primary" style={{marginRight:20}}>Website</Button></a>
                            <a href="https://github.com/ssjisan/weather-app"><Button variant="contained" color="primary" style={{marginRight:20}}>Github</Button></a>
                            <Button variant="contained" style={{backgroundColor:'red', marginLeft:20}}  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalWeatherApp"> More </Button>
                            <div class="modal fade" id="exampleModalWeatherApp" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Techonologies I used</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <h5>Frontend</h5>
                                    <p>HTML5, CSS3, Bootstrap4</p>
                                    <br/>
                                    <h5>Back-end Technology</h5>
                                    <p>Weather API from "www.openweathermap.org"</p>
                                    <br/>
                                    <h5 style={{color: 'red'}}>For more details please visit my github repository</h5>
                                    <br/>
                                    <a href="https://github.com/ssjisan/weather-app"><Button variant="contained" color="secondary" style={{marginRight:20}}>Github</Button></a>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                    </CardActions>
                </Card>
            </div>
{/*********Third Card End***********/}
                </div>
                </div>
            </div>


            <div class="button">
                <Link to="/projects"><button class="btn btn-primary">All My Projects</button></Link>
            </div>
        </div>
    );
};

export default Project;