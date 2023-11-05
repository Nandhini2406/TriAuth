// // // PatternLockScreen.js

// // import React, { useState } from 'react';
// // import { View, TouchableOpacity,Text, StyleSheet } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const PatternLock = ({ navigation }) => {
// //   const [pattern, setPattern] = useState([]);
// //   const correctPattern = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; // Define your correct pattern here

// //   const handlePress = (number) => {
// //     setPattern([...pattern, number]);
// //   };

// //   const verifyPattern = () => {
// //     if (JSON.stringify(pattern) === JSON.stringify(correctPattern)) {
// //       // Pattern is correct, navigate to home screen
// //       navigation.navigate('Home');
// //     } else {
// //       // Incorrect pattern, reset
// //       setPattern([]);
// //       alert('Incorrect pattern, please try again.');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.patternContainer}>
// //         {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((number) => (
// //           <TouchableOpacity
// //             key={number}
// //             style={[
// //               styles.patternDot,
// //               pattern.includes(number) && styles.patternDotSelected,
// //             ]}
// //             onPress={() => handlePress(number)}
// //           />
// //         ))}
// //       </View>
// //       <TouchableOpacity style={styles.verifyButton} onPress={verifyPattern}>
// //         <Text style={styles.verifyButtonText}>Verify Pattern</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   patternContainer: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //   },
// //   patternDot: {
// //     width: 20,
// //     height: 20,
// //     borderRadius: 10,
// //     borderWidth: 2,
// //     borderColor: 'black',
// //     margin: 50,
// //   },
// //   patternDotSelected: {
// //     backgroundColor: 'black',
// //   },
// //   verifyButton: {
// //     marginTop: 20,
// //     paddingHorizontal: 20,
// //     paddingVertical: 10,
// //     backgroundColor: 'black',
// //     borderRadius: 5,
// //   },
// //   verifyButtonText: {
// //     color: 'white',
// //     fontSize: 16,
// //   },
// // });

// // export default PatternLock;

// // import React, { useState } from 'react';
// // import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const PatternLock = ({ navigation }) => {
// //   const [pattern, setPattern] = useState([]);
// //   const [isSettingPattern, setIsSettingPattern] = useState(true);

// //   const handlePress = (number) => {
// //     setPattern([...pattern, number]);
// //   };

// //   const verifyPattern = async () => {
// //     const savedPattern = await AsyncStorage.getItem('pattern');
// //     if (JSON.stringify(pattern) === savedPattern) {
// //       // Pattern is correct, navigate to home screen
// //       navigation.navigate('Home');
// //     } else {
// //       // Incorrect pattern, reset
// //       setPattern([]);
// //       alert('Incorrect pattern, please try again.');
// //     }
// //   };

// //   const savePattern = async () => {
// //     await AsyncStorage.setItem('pattern', JSON.stringify(pattern));
// //    console.log('pattern..',JSON.stringify(pattern))
// //     setIsSettingPattern(false);
// //     alert('Pattern set successfully!');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.patternContainer}>
// //         {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((number) => (
// //           <TouchableOpacity
// //             key={number}
// //             style={[
// //               styles.patternDot,
// //               pattern.includes(number) && styles.patternDotSelected,
// //             ]}
// //             onPress={() => handlePress(number)}
// //             disabled={!isSettingPattern}
// //           />
// //         ))}
// //       </View>
// //       {isSettingPattern ? (
// //         <TouchableOpacity
// //           style={styles.saveButton}
// //           onPress={savePattern}
// //           disabled={pattern.length < 4}
// //         >
// //           <Text style={styles.saveButtonText}>Save Pattern</Text>
// //         </TouchableOpacity>
// //       ) : (
// //         <TouchableOpacity style={styles.verifyButton} onPress={verifyPattern}>
// //           <Text style={styles.verifyButtonText}>Verify Pattern</Text>
// //         </TouchableOpacity>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   patternContainer: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //   },
// //   patternDot: {
// //     width: 20,
// //     height: 20,
// //     borderRadius: 10,
// //     borderWidth: 2,
// //     borderColor: 'black',
// //     margin: 50,
// //   },
// //   patternDotSelected: {
// //     backgroundColor: 'black',
// //   },
// //   saveButton: {
// //     marginTop: 20,
// //     paddingHorizontal: 20,
// //     paddingVertical: 10,
// //     backgroundColor: 'black',
// //     borderRadius: 5,
// //   },
// //   saveButtonText: {
// //     color: 'white',
// //     fontSize: 16,
// //   },
// //   verifyButton: {
// //     marginTop: 20,
// //     paddingHorizontal: 20,
// //     paddingVertical: 10,
// //     backgroundColor: 'black',
// //     borderRadius: 5,
// //   },
// //   verifyButtonText: {
// //     color: 'white',
// //     fontSize: 16,
// //   },
// // });

// // export default PatternLock;

// import React, { useState } from 'react';
// import { View, TouchableOpacity, StyleSheet, Text, PanResponder } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const PatternLock = ({ navigation }) => {
//   const [pattern, setPattern] = useState([]);
//   const [isSettingPattern, setIsSettingPattern] = useState(true);
//   const [lineCoordinates, setLineCoordinates] = useState([]);

//   const handlePress = (number) => {
//     if (!isSettingPattern) return; // Disable button presses during verification

//     setPattern([...pattern, number]);
//   };

//   const verifyPattern = async () => {
//     const savedPattern = await AsyncStorage.getItem('pattern');

//     if (JSON.stringify(pattern) === savedPattern) {
//       // Pattern is correct, navigate to home screen
//       navigation.navigate('Home');
//     } else {
//       // Incorrect pattern, reset
//       setPattern([]);
//       setLineCoordinates([]);
//       alert('Incorrect pattern, please try again.');
//     }
//   };

//   const savePattern = async () => {
//     await AsyncStorage.setItem('pattern', JSON.stringify(pattern));
//     setIsSettingPattern(false);
//     alert('Pattern set successfully!');
//   };

//   const handlePanResponderMove = (evt, gestureState) => {
//     if (!isSettingPattern) return; // Disable drawing during verification

//     const { moveX, moveY } = gestureState;
//     setLineCoordinates([...lineCoordinates, { x: moveX, y: moveY }]);
//   };

//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderMove: handlePanResponderMove,
//     onPanResponderRelease: () => {
//       setLineCoordinates([]);
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <View style={styles.patternContainer}>
//         {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((number) => (
//           <TouchableOpacity
//             key={number}
//             style={
//               styles.patternDot
//             }
//             onPress={() => handlePress(number)}
//             disabled={!isSettingPattern}
//           />
//         ))}
//         {lineCoordinates.map((coord, index) => (
//           <View
//             key={index}
//             style={[
//               styles.line,
//               { left: coord.x, top: coord.y, opacity: index / lineCoordinates.length },
//             ]}
//           />
//         ))}
//       </View>
//       {isSettingPattern ? (
//         <TouchableOpacity
//           style={styles.saveButton}
//           onPress={savePattern}
//           disabled={pattern.length < 4}
//         >
//           <Text style={styles.saveButtonText}>Save Pattern</Text>
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity style={styles.verifyButton} onPress={verifyPattern}>
//           <Text style={styles.verifyButtonText}>Verify Pattern</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   patternContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     position: 'relative',
//   },
//   patternDot: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: 'black',
//     backgroundColor: 'black',
//     margin: 50,
//   },
//   patternDotSelected: {
//   },
//   saveButton: {
//     marginTop: 20,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: 'black',
//     borderRadius: 5,
//   },
//   saveButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   verifyButton: {
//     marginTop: 20,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: 'black',
//     borderRadius: 5,
//   },
//   verifyButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   line: {
//     position: 'absolute',
//     backgroundColor: 'black',
//     width: 2,
//     height: 2,
//     transform: [{ translateX: -1 }, { translateY: -1 }],
//   },
// });

// export default PatternLock;

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CIRCLES = [
  { color: 'red' },
  { color: 'orange' },
  { color: 'yellow' },
  { color: 'green' },
  { color: 'blue' },
  { color: 'indigo' },
  { color: 'violet' },
  { color: 'violet' },
  { color: 'violet' },
];

const PatternLock = ({ onPatternVerified }) => {
  const [pattern, setPattern] = useState([]);
  const [isSettingPattern, setIsSettingPattern] = useState(false);
  const [isVerifyingPattern, setIsVerifyingPattern] = useState(false);

  useEffect(() => {
    const getStoredPattern = async () => {
      const storedPattern = await AsyncStorage.getItem('pattern');
      console.log('saved pattern', storedPattern)
      if (storedPattern) {
        setPattern(storedPattern);
      }
    };

    getStoredPattern();
  }, []);

  const handleCircleTap = (circleIndex) => {
    if (isSettingPattern) {
      setPattern([...pattern, circleIndex]);
    } else if (isVerifyingPattern) {
      if (pattern[0] === circleIndex) {
        // The pattern is correct so far
        setPattern(pattern.slice(1));

        if (pattern.length === 0) {
          // The pattern has been verified successfully
          onPatternVerified();
        }
      } else {
        // The pattern is incorrect
        setIsVerifyingPattern(false);
        alert('Incorrect pattern');
      }
    }
  };

  const handleSetPattern = () => {
    setIsSettingPattern(true);
  };

  const handleVerifyPattern = () => {
    setIsVerifyingPattern(true);
  };

  const savePattern = async () => {
    await AsyncStorage.setItem('pattern', pattern);
    console.log('first...', pattern)
  };

  const renderPatternLock = () => {
    return (
      <View style={styles.grid}>
        {CIRCLES.map((circle, index) => (
          <TouchableOpacity key={index} onPress={() => handleCircleTap(index)} style={styles.patternDot}>
            <View color={circle.color} />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderSetPatternScreen = () => {
    return (
      <View>
        <Text>Set a pattern lock</Text>
        {renderPatternLock()}
        <Button title="Save Pattern" onPress={savePattern} />
      </View>
    );
  };

  const renderVerifyPatternScreen = () => {
    return (
      <View>
        <Text>Verify your pattern lock</Text>
        {renderPatternLock()}
      </View>
    );
  };

  if (isSettingPattern) {
    return renderSetPatternScreen();
  } else if (isVerifyingPattern) {
    return renderVerifyPatternScreen();
  } else {
    return (
      <View>
        <Button title="Set Pattern" onPress={handleSetPattern} />
        <Button title="Verify Pattern" onPress={handleVerifyPattern} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  patternDot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'black',
        margin: 50,
      },
});

export default PatternLock;

