import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HealthConditionsChart from "./charts/HealthConditionsChart";
import TopMenuBar from "./TopMenuBar";
import PatientInfo from './PatientInfo'
import Analytics from './Analytics'
import LabResults from './LabResults'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:'#fff',
    width:'99.5%',
    color:'#595959'
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [city, setCity] = useState('')
  const [cityInfo, setCityInfo] = useState({})
  const cityChangeHandler = (e) =>{
    setCity(e.target.value)
  }
  const fetchAPI = async () =>{
    let res = await axios.get (`https://developers.zomato.com/api/v2.1/cities?q=${city}`,{headers: 
                                {'user-key':'aacbca35436aa89444949cff9e93aee9',
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                              }})
    if(res!==undefined){
        console.log(res)
        setCityInfo(res.data.location_suggestions[0])
    }

 }
  return (
    <div className={classes.root}>
        <TopMenuBar/>
        <PatientInfo data={ [ 'Priya Mehta 32Y 4M', 'ID: P0987', 'With G3 P0 L1 A1',
                              '8 weeks pregnant', 'LMP: 20/01/2020', 'EDD:29/10/2020']}/>
      <div style={{padding:'40px 0 5px 20px'}}>
            <span style={{backgroundColor:'#1e90ed', color:'#fff',fontSize:'25px', padding:'15px',
                          borderTopLeftRadius:'10px', borderTopRightRadius:'10px', marginRight:'30px'}}>Analytics</span>
            <span style={{backgroundColor:'#eee',fontSize:'25px', padding:'15px',
                          borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}>Compliance</span>
      </div>
      <div  style={{ border:'1px solid #000', borderRadius:'10px', borderTopLeftRadius:'0px', margin:'9px 20px'}}>
      <Analytics/>
      <div style={{width:'100%'}}>
      <Grid container spacing={3} style={{padding:'0 40px 40px 40px'}}>
        <Grid item xs={12} md={8} lg={8} >
              <div style={{ border:'1px solid #000', borderRadius:'10px', padding:'10px'}}>
              <Typography variant="h6">
               Health Conditions
              </Typography>
              <Typography variant="subtitle1" style={{float:'right', marginTop:'-30px'}}>
               Month <ExpandMoreIcon style={{marginBottom:'-6px'}}/>
              </Typography>
              <div style={{width:'100%', height:'435px'}}>
                <HealthConditionsChart /></div>
                </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
                <LabResults />
            </Grid> 
      </Grid>
      </div>
      </div><br/><br/>
      <Grid container spacing={3} style={{padding:'0 40px'}}>
            <div>
              <TextField id="standard-basic" label="Standard" value={city} onChange={cityChangeHandler}/>
              <Button variant="contained" color="primary" onClick={()=>fetchAPI()}>
              Fetch City Zomato API
              </Button>
            </div>
          <div>
            <ul>
                {Object.keys(cityInfo).map((city, index) => <li key={index}>{city} : {cityInfo[city]}</li>)}
            </ul>
          </div>
      </Grid>
    </div>
  );
}