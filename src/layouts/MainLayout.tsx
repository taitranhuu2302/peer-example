import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';

interface IMainLayout {
  children: React.ReactNode;
  roomId?: string;
}

const MainLayout = ({children, roomId}: IMainLayout) => {
  
  return <>
    <Box display={`flex`} flexDirection={`column`} h={'100vh'}>
      <Header roomId={roomId}/>
      <Box flexGrow={'1'} display={'flex'} flexDirection={'column'}>
        {children}
      </Box>
    </Box>
  </>;
};

export default MainLayout;