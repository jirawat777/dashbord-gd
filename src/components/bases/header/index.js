import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import LinearProgress from "@mui/material/LinearProgress";

function Header(props) {
  const { title, icon } = props
  const [progress, setProgress] = React.useState(0);


  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = 100;
          return Math.min(oldProgress + diff, 100);
        });
      }
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <div>
      <Box className='box-progress'>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Box className='w-full'>
        <Paper elevation={8}>
          <div className='Position-logout'>
            <div className='logo-headpage'>
              <i className={`icon-size ${icon}`} />
            </div>
            <div className='text-4xl p-2 uppercase text-[#ffa2a2] text-ellipsis text-center sm:text-left'>{title}</div>
          </div>
        </Paper>
      </Box>
    </div >
  )
}

export default Header