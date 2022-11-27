import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const Logo = () => {
  
  return (
    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
      <Image boxSize={'50px'} src='/logo.png' alt='Dan Abramov' />
      <Text fontSize={'3xl'} fontWeight={'semibold'}>Talk</Text>
    </Box>
  );
};

export default Logo;