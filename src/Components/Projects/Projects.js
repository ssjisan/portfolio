import React from 'react';
import './Projects.css'
import ca from './image/carousel/ca.jpg';
import va from './image/carousel/vn.jpg';
import wf from './image/carousel/wf.jpg';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
  

const Projects = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpand = () => {
    setExpanded(!expanded);
  };
  
    return (
        <div>
{/************************** Navbar Menu Start********************************************************/}
            <nav class="navbar navbar-expand-lg navbar-light">
{/************************** Hamburger Menu Start********************************************************/}
                <button class="navbar-toggler btn btn-warning" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span> 
                </button>
{/************************** Hamburger Menu End********************************************************/}

                <div class="collapse navbar-collapse navbarCustome" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/myself">Myself</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <a href="https://drive.google.com/file/d/1xNGFUy8f4Uk6Mi3P065_is2CZzV2fwWW/view?usp=sharing"><button class="btn btn-info" href="">My Resume</button></a>
                        </li>
                    </ul>
                </div>
            </nav>
{/************************** Navbar Menu End********************************************************/}
            <div class="container blogBody container-color">
                <h2 class="headline">Project Details</h2>
            <div class="card-deck">
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
                        <Button variant="contained" color="primary" style={{marginRight:20}}>Website</Button>
                        <Button variant="contained" color="primary"> Github </Button>
                        <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}name="firstCard" onClick={handleExpand}
                        aria-expanded={expanded}
                        aria-label="show more"> <ExpandMoreIcon /> </IconButton> 
                    </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Details</Typography>
                        <Typography paragraph>
                                User can place their orders, review developers. Admin can see the order list, They can add new services. 
                                Technologies i used React.js, React Router, HTML5, Bootstrap4, CSS3, Firebase, NodeJS, MongoDB.
                        </Typography>
                    </CardContent>
                        </Collapse>
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
                            I developed this test app for a Developer firm. They are working with creating a website, mobile app, graphics design related staffs like posters, visiting card, flyers.
                            </Typography>
                        </CardContent>
                    <CardActions disableSpacing>
                        <Button variant="contained" color="primary" style={{marginRight:20}}>Website</Button>
                        <Button variant="contained" color="primary"> Github </Button>
                        <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}onClick=""
                        aria-expanded={expanded}
                        aria-label="show more"> <ExpandMoreIcon /> </IconButton> 
                    </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Details</Typography>
                        <Typography paragraph>
                                User can place their orders, review developers. Admin can see the order list, They can add new services. 
                                Technologies i used React.js, React Router, HTML5, Bootstrap4, CSS3, Firebase, NodeJS, MongoDB.
                        </Typography>
                    </CardContent>
                        </Collapse>
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
                            I developed this test app for a Developer firm. They are working with creating a website, mobile app, graphics design related staffs like posters, visiting card, flyers.
                            </Typography>
                        </CardContent>
                    <CardActions disableSpacing>
                        <Button variant="contained" color="primary" style={{marginRight:20}}>Website</Button>
                        <Button variant="contained" color="primary"> Github </Button>
                        <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}onClick={handleExpand}
                        aria-expanded={expanded}
                        aria-label="show more"> <ExpandMoreIcon /> </IconButton> 
                    </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Details</Typography>
                        <Typography paragraph>
                                User can place their orders, review developers. Admin can see the order list, They can add new services. 
                                Technologies i used React.js, React Router, HTML5, Bootstrap4, CSS3, Firebase, NodeJS, MongoDB.
                        </Typography>
                    </CardContent>
                        </Collapse>
                </Card>
            </div>
{/*********Third Card End***********/}
                </div>
                </div>
        </div>  //ClosingDiv
    );
};

export default Projects;