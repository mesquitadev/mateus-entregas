import React, {useState} from 'react';
import {Modal, View, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RNCamera} from 'react-native-camera';

import styles from './styles';

const Camera = ({
  isVisible,
  validatePhoto,
  onCloseCamera,
  route,
  photoType,
}) => {
  const [camera, setCamera] = useState();

  const onTakePicture = async () => {
    try {
      const photo = await camera.takePictureAsync({
        quality: 0.5,
        // base64: true,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true,
      });

      validatePhoto(route, photo, photoType);
      onCloseCamera();
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao tirar a foto.');
    }
  };

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <RNCamera
        ref={(ref) => setCamera(ref)}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a câmera',
          message: 'Precisamos da sua permissão para usar a câmera.',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}
        captureAudio={false}>
        {/* <View style={styles.containerCinza}>
          <View style={styles.containerBranco}> */}
            <Icon
              style={styles.iconClose}
              name="close"
              size={50}
              color={'#fff'}
              onPress={onCloseCamera}
            />
          {/* </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Use a área marcada como guia</Text>
          </View>
        {/* </View> */}
        <View style={styles.borderButton} onTouchEnd={onTakePicture}>
          <View style={styles.buttonAround} />
        </View>
      </RNCamera>
    </Modal>
  );
};

export default Camera;
