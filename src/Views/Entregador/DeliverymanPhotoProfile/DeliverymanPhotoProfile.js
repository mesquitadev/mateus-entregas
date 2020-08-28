import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Camera from '../../../Components/Camera/Camera';

import styles from './styles';

const DeliverymanPhotoProfile = ({navigation}) => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  const onCloseCamera = () => {
    setIsCameraVisible(false);
  };

  const validatePhoto = (route, photo, photoType) => {
    navigation.navigate(route, {
      photo: photo,
      photoType: photoType,
      title: 'Deseja usar essa Foto?',
      description: 'Foto poderá ser utilizada para reconhecimento do entregador'
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoPerfil}>Tire uma foto para perfil</Text>
      <TouchableOpacity
        onPress={() => setIsCameraVisible(true)}
        style={styles.btnPrimary}>
        <Text style={styles.btnPrimaryText}>Tirar Foto</Text>
      </TouchableOpacity>

      <Camera
        isVisible={isCameraVisible}
        onCloseCamera={onCloseCamera}
        validatePhoto={validatePhoto}
        route={'DeliverymanPhotoValidation'}
        photoType={'perfil'}
      />
    </View>
  );
};

export default DeliverymanPhotoProfile;
