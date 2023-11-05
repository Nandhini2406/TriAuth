// import { View, Text } from 'react-native'
// import React from 'react'
// import { Camera, } from 'react-native-vision-camera'
// import { VisionCamera } from 'react-native-vision-camera';


// const FaceRecognition = () => {
//   return (
//     <Camera ></Camera>
//   )
// }

// export default FaceRecognition

import React, { useState, useEffect } from 'react';
import { View, Text, Button, ToastAndroid } from 'react-native';
import { Camera } from 'react-native-vision-camera';

const FaceRecognitionFrameProcessor = () => {
  // Create a face detector
  const faceDetector = new MLKitVisionFaceDetector({ enableTracking: true });

  // Create a face recognizer
  const faceRecognizer = new MLKitVisionFaceRecognizer({ model: 'facenet.tflite' });

  return async (frame) => {
    // Detect faces in the frame
    const faces = await faceDetector.processImage(frame);

    // If there are any faces detected, try to recognize them
    if (faces.length > 0) {
      const matchedFace = await faceRecognizer.recognizeFaces(frame, faces);

      // If a matched face is found, return the face object
      if (matchedFace) {
        return matchedFace;
      }
    }

    // Otherwise, return null
    return null;
  };
};

const FaceRecognition = () => {
  const [matchedFace, setMatchedFace] = useState(null);

  useEffect(() => {
    // Get the face recognition frame processor
    const faceRecognitionFrameProcessor = new FaceRecognitionFrameProcessor();

    // Add the face recognition frame processor to the camera
    Camera.addFrameProcessor(faceRecognitionFrameProcessor);

    // Get the recognized face from the frame processor
    faceRecognitionFrameProcessor.onFrameProcessed(async (frame) => {
      setMatchedFace(await frame.getRecognizedFace());
    });
  }, []);

  const authenticateWithFaceRecognition = async () => {
    // If a matched face is found, the user is authenticated
    if (matchedFace) {
      // Navigate to the home screen
      ToastAndroid.show('Successfully authenticated', 1000);
      console.log('Authentication successful!');
    } else {
      // The user is not authenticated
      ToastAndroid.show('Failed Try again', 1000);
      console.log('Authentication failed or cancelled.');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Face Recognition Authentication</Text>

      <Camera frameProcessors={[new FaceRecognitionFrameProcessor()]} />

      <Button
        title="Authenticate with Face Recognition"
        onPress={authenticateWithFaceRecognition}
      />
    </View>
  );
};

export default FaceRecognition;
