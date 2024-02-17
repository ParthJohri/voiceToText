import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button, Text } from '@chakra-ui/react';

const SpeechRecognitionComponent = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <Text>Browser doesn't support speech recognition.</Text>;
  }

  return (
    <div>
      <Text fontSize="xl">Microphone: {listening ? 'on' : 'off'}</Text>
      <Button colorScheme="blue" mr={2} onClick={SpeechRecognition.startListening}>Start</Button>
      <Button colorScheme="red" mr={2} onClick={SpeechRecognition.stopListening}>Stop</Button>
      <Button colorScheme="gray" mr={2} onClick={resetTranscript}>Reset</Button>
      <Text fontSize="lg" mt={4}>{transcript}</Text>
    </div>
  );
};

export default SpeechRecognitionComponent;
