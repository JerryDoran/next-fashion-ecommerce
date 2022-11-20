import { useDispatch, useSelector } from 'react-redux';
import { Box, Badge, IconButton } from '@mui/material';
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import { shades } from '../../theme';
import Link from 'next/link';
import { selectCart, setIsCartOpen } from '../../redux/cartSlice';

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display='flex'
      alignItems='center'
      width='100%'
      height='60px'
      backgroundColor='rgba(255, 255, 255, .95)'
      color='black'
      position='fixed'
      top='0'
      left='0'
      zIndex='1'
    >
      <Box
        width='80%'
        margin='auto'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box>
          <Link href='/'>ECOMMER</Link>
        </Box>
        <Box
          display='flex'
          justifyContent='space-between'
          columnGap='20px'
          zIndex='2'
        >
          <IconButton sx={{ color: 'black' }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color='secondary'
            invisible={cart.length === 0}
            sx={{
              '& .MuiBadge-badge': {
                right: 8,
                top: 8,
                padding: '0 4px',
                height: '14px',
                minWidth: '13px',
              },
            }}
          >
            <IconButton
              sx={{ color: 'black' }}
              onClick={() => dispatch(setIsCartOpen(true))}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>

          <IconButton sx={{ color: 'black' }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
