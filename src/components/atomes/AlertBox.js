import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';

function AlertBox(props) {
  const { status, message } = props
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Snackbar
        severity={status}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
        TransitionComponent={Fade}
      />
    </div>
  );
}

export default AlertBox