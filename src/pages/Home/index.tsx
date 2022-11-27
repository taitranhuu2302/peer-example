import React, { useEffect, useRef, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Container, GridItem, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import Peer from 'peerjs';
import { FaRegKeyboard } from 'react-icons/fa';

const CONSTRAINS = {
  video: true,
  audio: true,
};

const HomePage = () => {
  const [peerId, setPeerId] = useState('');
  const peerInstance = useRef<Peer | null>(null);
  const getUserMedia = navigator.mediaDevices.getUserMedia;
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const [roomId, setRoomId] = useState('');
  
  useEffect(() => {
    const peer = new Peer();
    
    peer.on('open', (id) => {
      setPeerId(id);
    });
    
    peer.on('call', async (call) => {
      if (window.confirm("Bạn có muốn chấp nhận cuộc gọi ?")) {
        const stream = await getUserMedia(CONSTRAINS);
        const videoLocal = localVideoRef.current;
        const videoRemote = remoteVideoRef.current;
        if (!videoLocal || !videoRemote) return;
        videoLocal.srcObject = stream;
        videoLocal.play();
  
        call.answer(stream);
        call.on('stream', (remoteStream) => {
          videoRemote.srcObject = remoteStream;
          videoRemote.play();
        });
      }
    });
    
    peerInstance.current = peer;
  }, [getUserMedia]);
  
  const onJoinRoom = async (remotePeerId: string) => {
    try {
      const peer = peerInstance.current;
      
      if (!peer) return;
      
      const stream = await getUserMedia(CONSTRAINS);
      
      const videoLocal = localVideoRef.current;
      const videoRemote = remoteVideoRef.current;
      
      if (!videoLocal || !videoRemote) return;
      videoLocal.srcObject = stream;
      videoLocal.play();
      
      const call = peer.call(remotePeerId, stream);
      
      call.on('stream', (remoteStream) => {
        videoRemote.srcObject = remoteStream;
        videoRemote.play();
      });
      
    } catch (e) {
      console.log(e);
    }
  };
  
  return <>
    <MainLayout roomId={peerId}>
      <Container>
        <Box display={'flex'} gap={'10px'} alignItems={'center'} mt={'20px'}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaRegKeyboard size={25} color="gray.300"/>}
            />
            <Input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="Hãy nhập mã"
                   size={'md'}/>
          </InputGroup>
          <Button onClick={async () => {
            await onJoinRoom(roomId);
          }} colorScheme="blue" size={'md'} variant="outline" disabled={!roomId}>Gọi</Button>
        </Box>
      </Container>
      <Box display={'flex'} p={'20px'} gap={'20px'} flexGrow={'1'}>
        {/* Left Content */}
        <div className={'grid'} >
          <GridItem style={{border: '1px solid #333'}}>
            <video style={{width: '100%'}} ref={localVideoRef}></video>
          </GridItem>
          <GridItem style={{border: '1px solid #333'}}>
            <video style={{width: '100%'}} ref={remoteVideoRef}></video>
          </GridItem>
        </div>
        {/* End Left Content */}
      
      </Box>
      {/*  End Content */}
    </MainLayout>
  </>;
};


export default HomePage;