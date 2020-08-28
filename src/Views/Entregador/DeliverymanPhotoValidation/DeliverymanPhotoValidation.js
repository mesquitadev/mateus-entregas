import React, { useState, useEffect } from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const DeliverymanPhotoValidation = ({
  route: {params},
  navigation: {navigate, goBack, push},
}) => {

  const types = {
    cnh: {
      photoType: 'cnh',
      routeRedirectError: 'DeliverymanPhotos',
      eventGoBack: () => goBack(),
    },
    perfil: {
      photoType: 'perfil',
      routeRedirectError: 'DeliverymanPhotos',
      eventGoBack: () => goBack(),
    },
  };

  const setStatusInStorage = async () => {
    try {
      console.log('infernooo', params.photoType)
      const data =  await AsyncStorage.setItem(`${params.photoType}`, params.photoType);
      return data;
    } catch (e) {
      navigate(types[params.photoType].routeRedirectError);
    }
  };

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
          onPress={() => goBack(types[params.photoType].eventGoBack)}
          style={[styles.button, styles.buttonTirarOutra]}>
          <Text style={styles.textTirarOutra}>Tirar outra</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            await setStatusInStorage();
            push('DeliverymanPhotos');
          }}
          style={[styles.button, styles.buttonSalvar]}>
          <Text style={styles.textSalvar}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliverymanPhotoValidation;
