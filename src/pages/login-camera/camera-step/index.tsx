import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons'

const CameraStep = () => {
  const [type, setType] = useState<CameraType>(CameraType.back);
  const [image, setImage] = useState<CameraCapturedPicture | undefined>(undefined);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const camRef = useRef<Camera | null>(null);

  const getPermissionCamera = () => {
    Camera.requestCameraPermissionsAsync().then((result) => {
      setHasPermission(result.granted);
      Alert.alert(JSON.stringify(result));
    });
  }
  
  function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef?.current?.takePictureAsync({ base64: true, quality: 0 });
      setImage(data);
    }
  }

  if (hasPermission === false) {
    return <View>
      <Text>A câmera não esta habilitada neste dispositivo</Text>
      <TouchableOpacity onPress={getPermissionCamera}>
        <Text>Solicitar acesso {String(hasPermission)}</Text>
      </TouchableOpacity>
    </View>
  }

  return (
    <>
      {!image ?
        <View style={styles.container}>
          <Camera style={{ flex: 1, width: '100%' }} type={type} ref={camRef}>
            <View style={styles.containerButtons}>
              <TouchableOpacity
                style={styles.button}
                onPress={takePicture}>
                <FontAwesome name='camera' size={32} color={'white'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraType}>
                <FontAwesome name='rotate-right' size={32} color={'white'} />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
        :
        <Text>
          {image.base64}
        </Text>
      }
    </>
  );
}

export { CameraStep }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  containerButtons: {
    backgroundColor: 'transparent',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20
  },
  button: {
    marginLeft: 20,
    marginRight: 20
  }
});
