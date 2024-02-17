import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import SpeechRecognitionComponent from './SpeechToText';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <SpeechRecognitionComponent/>
      </div>
    </ChakraProvider>
  );
}

export default App;
