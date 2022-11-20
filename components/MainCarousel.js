/* eslint-disable @next/next/no-img-element */
import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HeroBanner from './HeroBanner';
import { imageData } from '../data/carouselImages';

export default function MainCarousel() {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {imageData.map((image, index) => (
        <Box key={`${image.alt}-${index}`}>
          <img
            src={image.src}
            alt='fashion pic'
            style={{
              width: '100%',
              height: '700px',
              objectFit: 'cover',
              backgroundAttachment: 'fixed',
            }}
          />
          <HeroBanner isNonMobile={isNonMobile} />
        </Box>
      ))}
    </Carousel>
  );
}
