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
      description: 'Confira se o documento está legível'
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoCnh}>Tire uma foto inteira da sua CNH</Text>
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
        photoType={'cnh'}
      />
    </View>
  );
};

export default DeliverymanPhotoProfile;
