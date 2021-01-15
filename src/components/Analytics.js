import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ActivityBar from './charts/ActivityBar'
import Bloodpressure from './charts/Bloodpressure'
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HeartRate from './charts/HeartRate'
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: 'auto'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    height:'40px'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
  
  },
}));

export default function Analytics() {
  const classes = useStyles();
  return (
        <Toolbar>   
            <Grid container spacing={3} style={{padding:'20px'}}>
            <Grid item xs={12} md={3} lg={3} >
            <div style={{border:'1px solid #a5a5a5', borderRadius:'10px' , margin:'20px 0',padding:'10px'}}>
                <Typography variant="h6">
                    Activity
                </Typography>
                <Typography variant="subtitle1" style={{float:'right', marginTop:'-30px'}}>
               Week <ExpandMoreIcon style={{marginBottom:'-6px'}}/>
              </Typography>
              <div style={{width:'100%', height:'120px'}}>
                <ActivityBar/>
            </div>
            </div>
            </Grid>
            <Grid item xs={12} md={3} lg={3} >
            <div style={{ border:'1px solid #a5a5a5', borderRadius:'10px', margin:'20px 0', padding:'10px'}}>
              <Typography variant="h6">
              Heart Rate
              </Typography>
              <Typography variant="subtitle1" style={{float:'right', marginTop:'-30px'}}>
               Day <ExpandMoreIcon style={{marginBottom:'-6px'}}/>
              </Typography>
              <div style={{width:'100%', height:'120px'}}>
                <HeartRate />
            </div>
            </div>
                
            </Grid>
            <Grid item xs={12} md={3} lg={3} >
            <div style={{border:'1px solid #a5a5a5', borderRadius:'10px' , margin:'20px 0',padding:'10px'}}>
                <Typography variant="h6">
                    Blood Pressure
                </Typography>
                <Typography variant="subtitle1" style={{float:'right', marginTop:'-30px'}}>
               Week <ExpandMoreIcon style={{marginBottom:'-6px'}}/>
              </Typography>
              <div style={{width:'100%', height:'120px'}}>
                <Bloodpressure/>
            </div>
            </div>
                
            </Grid>
            <Grid item xs={12} md={3} lg={3} >
            <div style={{border:'1px solid #a5a5a5', borderRadius:'10px' , margin:'20px 0',padding:'10px'}}>
                <div style={{height:'150px', width:'350px', position:'relative'}}>
                <Typography variant="h6">
                    Post Assignment<br/><br/>
                </Typography>
                <Typography variant="h6">
                    <span style={{color:'#7b9cce'}}>10AM - 11AM</span> <span style={{marginLeft:'10%'}}>2 Sept </span><br/>
                    <span style={{color:'#7b9cce'}}>Dr. Rakesh Chavan</span>
                </Typography>
                </div>
            </div>
                
            </Grid>
            </Grid>
        </Toolbar>
  );
}
