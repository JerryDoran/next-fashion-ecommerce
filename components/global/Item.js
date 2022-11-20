/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Box, Typography, useTheme, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { shades } from '../../theme';
import { addToCart } from '../../redux/cartSlice';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Item({ item, width }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();
  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width}>
      <Box
        position='relative'
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={name}
          width='300px'
          height='400px'
          src={`http://localhost:1337${url}`}
          onClick={() => router.push(`/items/${item.id}`)}
          style={{ cursor: 'pointer' }}
        />
        <Box
          display={isHovered ? 'block' : 'none'}
          position='absolute'
          bottom='10%'
          left='0'
          width='100%'
          padding='0 5%'
        >
          <Box display='flex' justifyContent='space-between'>
            <Box
              display='flex'
              alignItems='center'
              backgroundColor={shades.neutral[100]}
              borderRadius='3px'
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <Remove />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(Math.max(count + 1))}>
                <Add />
              </IconButton>
            </Box>
            {/* Button */}
            <Button
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              sx={{ backgroundColor: shades.primary[300], color: 'white' }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt='3px'>
        <Typography variant='subtitle2' color={neutral.dark}>
          {category
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight='bold'>${price}</Typography>
      </Box>
    </Box>
  );
}
