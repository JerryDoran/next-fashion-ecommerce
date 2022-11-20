import { Box, Typography } from '@mui/material';
import { shades } from '../theme';

export default function HeroBanner({ isNonMobile }) {
  return (
    <Box
      color='white'
      padding='20px'
      borderRadius='1px'
      textAlign='left'
      backgroundColor='rgba(0,0,0,0.5)'
      position='absolute'
      top='46%'
      left={isNonMobile ? '10%' : '0'}
      right={isNonMobile ? undefined : '0'}
      margin={isNonMobile ? undefined : '0 auto'}
      maxWidth={isNonMobile ? undefined : '240px'}
    >
      <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
      <Typography variant='h1'>Summer Sale</Typography>
      <Typography
        fontWeight='bold'
        color={shades.secondary[300]}
        sx={{ textDecoration: 'underline' }}
      >
        Discover More
      </Typography>
    </Box>
  );
}
