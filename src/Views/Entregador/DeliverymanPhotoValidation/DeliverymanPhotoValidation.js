import React, {useState, useEffect} from 'react';
import {Image, View, Text, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import deliverymanPhotos from '../../../services/deliverymanPhotos';
import { KEY_ID_DADOS_PESSOAIS } from '../../../Utils/keys';

const DeliverymanPhotoValidation = ({route: {params}, navigation}) => {
  const [idUser, setIdUser] = useState();

  const types = {
    cnh: {
      photoType: 'cnh',
      routeRedirect: 'DeliverymanPhotos',
      eventGoBack: () => navigation.goBack(),
    },
    perfil: {
      photoType: 'perfil',
      routeRedirect: 'DeliverymanPhotos',
      eventGoBack: () => navigation.goBack(),
    },
  };

  const getIdUserInStorage = async () => {
    try {
      const data = await AsyncStorage.getItem(KEY_ID_DADOS_PESSOAIS);
      setIdUser(data);
    } catch (e) {
      return;
    }
  };

  const setStatusInStorage = async () => {
    try {
      const data = await AsyncStorage.setItem(
        `${params.photoType}`,
        params.photoType,
      );
      return data;
    } catch (e) {
      Alert.alert(
        'Mateus Entregas',
        'Houve um erro ao salvar o status do check no storage!',
      );
      return;
    }
  };

  const saveImage = async () => {
    try {
      const base64 = `data:image/jpeg;base64,${params.photo.base64}`;
      await deliverymanPhotos({
        imagemSelfie: params.photoType === 'perfil' ? base64 : '',
        imagemCnh: params.photoType === 'cnh' ? base64 : '',
        idUser: idUser,
      });
      await setStatusInStorage();
      navigation.navigate(types[params.photoType].routeRedirect);
    } catch (error) {
      Alert.alert('Mateus Entregas', 'Houve um erro ao salvar a foto!');
      return;
    }
  };

  useEffect(() => {
    getIdUserInStorage();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        {params.photoType === 'cnh' ? (
          <Image
            resizeMode="cover"
            source={{uri: params.photo.uri}}
            style={styles.photoCNH}
          />
        ) : null}

        {params.photoType === 'perfil' ? (
          <Image
            resizeMode="cover"
            source={{uri: params.photo.uri}}
            style={styles.photoPerfil}
          />
        ) : null}

        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.description}>{params.description}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack(types[params.photoType].eventGoBack)}
          style={[styles.button, styles.buttonTirarOutra]}>
          <Text style={styles.textTirarOutra}>Tirar outra</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            saveImage();
          }}
          style={[styles.button, styles.buttonSalvar]}>
          <Text style={styles.textSalvar}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliverymanPhotoValidation;
