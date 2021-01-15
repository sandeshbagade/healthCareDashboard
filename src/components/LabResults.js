import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SleepPatternChart from './charts/SleepPatternChart'
import CaloriesBurnedChart from './charts/CaloriesBurnedChart'


const useStyles = makeStyles((theme) => ({
}));
const labResults = [{date:'5 Augest', name:'Sugar', value: '140mg/dL'},
                    {date:'5 Augest', name:'Haemoglobin', value: '140mg/dL'},
                    {date:'5 Augest', name:'White Blood Cell', value: '140mg/dL'},
                    {date:'5 Augest', name:'Lymohocyte', value: '3800'},
                    {date:'5 Augest', name:'Red Blood Cell', value: '4.9 million cells/mcL'},
                   ]

export default function LabResults() {
  const classes = useStyles();
  return (
                <div style={{padding:'10px'}}>
          <Grid container spacing={3}>
               <Grid item xs={12} md={12} lg={12} style={{border:'1px solid #000', borderRadius:'10px'}}>
                <Typography variant="h6" style={{marginBottom:'20px'}}>
                        Lab Results
                </Typography>
                <Grid container>
                  {labResults.map((val, i)=>
                  <Grid item xs={12} md={4} lg={4} style={{marginBottom:'20px'}} >
                         <Typography variant="caption" style={{color:'#b2b2b2'}}>{val.date}  </Typography>
                         <Typography variant="subtitle1" style={{color:'#822e25'}}>{val.name}  </Typography>
                         <Typography variant="subtitle1">{val.value}  </Typography>
                 </Grid>
                  )}  
                </Grid>
               </Grid>
                <Grid container xs={12} md={12} lg={12} style={{paddingTop:'20px'}}>
                    <Grid item xs={12} md={5} lg={5} style={{border:'1px solid #000', borderRadius:'10px', padding:'10px'}}  >
                        <Typography variant="h6">
                            Calories Burned  
                        </Typography>  
                        <div style={{width:'100%', height:'150px', position:'relative'}}>
                            <CaloriesBurnedChart />
                        <Typography variant="h6" style={{position:'absolute', top:'30%', left:'40%'}}>
                            230<br/>Kcal
                        </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7} lg={7}  style={{paddingLeft:'20px'}}> 
                    <div  style={{border:'1px solid #000', borderRadius:'10px', padding:'10px'}}>
                        <Typography variant="h6">
                        Sleep Pattern
                        </Typography>
                        <div style={{width:'100%', height:'150px'}}>
                            <SleepPatternChart />
                        </div>
                    </div>
                    </Grid>
                </Grid>
          </Grid>
          </div>
  );
}