'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

// TypeScript: Defining the type for carousel items (optional)
interface CarouselItem {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonColor: 'primary' | 'secondary' | 'warning'; // Button color types
}

const carouselItems: CarouselItem[] = [
  {
    imageUrl:
      'https://media.cloudbooklet.com/wp-content/uploads/2022/02/18082924/How-to-Install-MERN-Stack-with-Nginx-on-Debian-11.jpg',
    title: 'Welcome to Our Website',
    subtitle: 'Discover amazing products and services.',
    buttonText: 'Learn More',
    buttonColor: 'primary',
  },
  {
    imageUrl:
      'https://media.cloudbooklet.com/wp-content/uploads/2022/02/18082924/How-to-Install-MERN-Stack-with-Nginx-on-Debian-11.jpg',
    title: 'Quality Service',
    subtitle: 'Providing world-class services for our clients.',
    buttonText: 'Get Started',
    buttonColor: 'secondary',
  },
  {
    imageUrl:
      'https://media.cloudbooklet.com/wp-content/uploads/2022/02/18082924/How-to-Install-MERN-Stack-with-Nginx-on-Debian-11.jpg',
    title: 'Join Our Community',
    subtitle: 'Become part of a network of professionals.',
    buttonText: 'Join Now',
    buttonColor: 'warning',
  },
];

const HomeCarousel: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', maxWidth: '100%', overflow: 'hidden' }}>
      {/* Carousel Section */}
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000} // Reduced interval for faster auto-move
        showStatus={false}
        showIndicators
        swipeable
        dynamicHeight
        width="100%" // Ensures carousel takes full width of its container
        stopOnHover={false} // Disable stop on hover
        emulateTouch={true} // Enable touch swipe for mobile users
      >
        {carouselItems.map((item, index) => (
          <div key={index}>
            {/* Use layout="responsive" to avoid blur */}
            <Image
              src={item.imageUrl}
              alt={`Slide ${index + 1}`}
              layout="responsive"
              width={500} // Set width relative to the container
              height={300} // Set height relative to the container
              style={{
                objectFit: 'cover',
              }}
            />
            <div style={overlayStyles}>
              <Typography variant="h4" color="white" sx={{ mb: 2 }}>
                {item.title}
              </Typography>
              <Typography variant="h6" color="white" sx={{ mb: 3 }}>
                {item.subtitle}
              </Typography>
              <Button variant="contained" color={item.buttonColor} size="large">
                {item.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

// Styling for overlay content on the carousel slides
const overlayStyles: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  padding: '20px',
  borderRadius: '8px',
};

export default HomeCarousel;
