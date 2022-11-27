import React, { useEffect, useState } from 'react';
import Logo from '../Logo';
import Avatar from 'react-avatar';
import { Box, Text } from '@chakra-ui/react';

const Header = ({roomId}: any) => {
  const [auth, setAuth] = useState<string | null>(null);
  
  useEffect(() => {
    const auth = localStorage.getItem('auth');
    setAuth(auth);
  }, []);
  
  
  return <>
    <Box boxShadow={'base'} display={'flex'} alignItems={'center'} px={'20px'} py={'10px'}
         justifyContent={'space-between'}>
      <Logo/>
      <Text>{roomId}</Text>
      <button>
        <Avatar name={auth ? auth : ''} size={'50px'} round/>
      </button>
    </Box>
  </>;
};

export default Header;