import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ErrorIcon from '@material-ui/icons/Error';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
  
  },
}));

export default function TopMenuBar() {
  const classes = useStyles();
  return (
        <Toolbar style={{color:'#6b6868', display:'flex',
        justifyContent:'space-between'}}>
          <Typography variant="h5" style={{fontWeight:'bold', color:'#000'}}>
            ANAHA
          </Typography>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb"
       >
        <Link style={{color:'#6b6868'}}>
          Patient Profile
        </Link>
        <Link style={{color:'#6b6868'}}>Analytics</Link>
      </Breadcrumbs>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              style={{border:'1px solid #000'}}
            />
            <ExpandMoreIcon style={{margin:'0 0 -7px -30px'}}/>
          </div>
          {/* <div className={classes.grow} /> */}
          <div>
          <IconButton aria-label="show 4 new mails">
                <ErrorIcon style={{color:'red'}}/>
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <AppsIcon />
            </IconButton>
            <IconButton aria-label="show 4 new notifications" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton>
            <Typography color="textPrimary">Dr. Raquel</Typography>
            <ExpandMoreIcon/>
            </IconButton>
          </div>
        </Toolbar>
  );
}
