import React, {useState, useEffect} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const DeliverymanPhotoValidation = ({
  route: {params},
  navigation,
}) => {
  const types = {
    cnh: {
      photoType: 'cnh',
      routeRedirectError: 'DeliverymanPhotos',
      eventGoBack: () => navigation.goBack(),
    },
    perfil: {
      photoType: 'perfil',
      routeRedirectError: 'DeliverymanPhotos',
      eventGoBack: () => navigation.goBack(),
    },
  };

  const setStatusInStorage = async () => {
    try {
      const data = await AsyncStorage.setItem(
        `${params.photoType}`,
        params.photoType,
      );
      return data;
    } catch (e) {
      navigation.navigate(types[params.photoType].routeRedirectError);
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
          onPress={() => navigation.goBack(types[params.photoType].eventGoBack)}
          style={[styles.button, styles.buttonTirarOutra]}>
          <Text style={styles.textTirarOutra}>Tirar outra</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            await setStatusInStorage();
            navigation.navigate('DeliverymanPhotos');
          }}
          style={[styles.button, styles.buttonSalvar]}>
          <Text style={styles.textSalvar}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliverymanPhotoValidation;
