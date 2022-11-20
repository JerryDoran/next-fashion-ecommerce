import { Box, Alert, AlertTitle } from '@mui/material';

export default function Confirmation() {
  return (
    <Box m='90px auto' width='80%' height='50vh'>
      <Alert serverity='success'>
        <AlertTitle>Success</AlertTitle>
        You have successfully created an Order -{' '}
        <strong>Congrats on making your purchase!</strong>
      </Alert>
    </Box>
  );
}
