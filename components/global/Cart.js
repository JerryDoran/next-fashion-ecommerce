import { Box, Button, Divider, Typography, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import { shades } from '../../theme';
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from '../../redux/cartSlice';
import { useRouter } from 'next/router';
import Image from 'next/image';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Cart() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  // const isCartOpen = true;

  const totalPrice = cart?.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    // Overlay
    <Box
      display={isCartOpen ? 'block' : 'none'}
      backgroundColor='rgba(0,0,0,.4)'
      position='fixed'
      zIndex={10}
      width='100%'
      height='100%'
      left='0'
      top='0'
      overflow='auto'
    >
      {/* Modal */}
      <Box
        position='fixed'
        right='0'
        bottom='0'
        width='max(400px, 30%)'
        height='100%'
        backgroundColor='white'
      >
        <Box padding='30px' overflow='auto' height='100%'>
          {/* Header */}
          <FlexBox mb='15px'>
            <Typography variant='h3'>SHOPPING BAG ({cart?.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>
          {/* Cart list */}
          <Box>
            {cart?.map((item) => (
              <Box key={`${item.attributes.name}-${item.id}`}>
                <FlexBox padding='15px 0'>
                  <Box flex='1 1 40%'>
                    <Image
                      src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                      alt={item?.name}
                      width={123}
                      height={164}
                    />
                  </Box>
                  <Box flex='1 1 60%'>
                    {/* Item Name */}
                    <FlexBox mb='5px'>
                      <Typography fontWeight='bold'>
                        {item.attributes.name}
                      </Typography>
                      <IconButton
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <Typography>{item.attributes.shortDescription}</Typography>

                    {/* Amount */}
                    <FlexBox m='15px 0'>
                      <Box
                        display='flex'
                        alignItems='center'
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      {/* Price */}
                      <Typography fontWeight='bold'>
                        ${item.attributes.price}
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* Actions */}
          <Box m='20px 0'>
            <FlexBox m='20px 0'>
              <Typography fontWeight='bold'>SUBTOTAL</Typography>
              <Typography fontWeight='bold'>${totalPrice}</Typography>
            </FlexBox>

            <Button
              sx={{
                backgroundColor: shades.primary[400],
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: '2px',
                fontSize: '12px',
                borderRadius: 0,
                minWidth: '100%',
                padding: '20px 40px',
                margin: '20px 0',
                ':hover': { backgroundColor: 'green' },
              }}
              onClick={() => {
                router.push('/checkout');
                dispatch(setIsCartOpen({}));
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
