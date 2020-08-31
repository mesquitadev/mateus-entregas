import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const DeliverymanPhotos = ({ navigation, route: {params}}) => {
  const [statusCheckCNH, setStatusCheckCNH] = useState(false);
  const [statusCheckProfile, setstatusCheckProfile] = useState(false);
  const [confirmationVisibility, setConfirmationVisibility] = useState(false);

  const types = {
    cnh: 'cnh',
    perfil: 'perfil',
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const getStatusChecks = async () => {
        try {
          const checkCNH = await AsyncStorage.getItem(types.cnh);
          const checkPerfil = await AsyncStorage.getItem(types.perfil);

          setStatusCheckCNH(checkCNH);
          setstatusCheckProfile(checkPerfil);
        } catch (e) {
          return;
        }
      };
      getStatusChecks();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (statusCheckCNH && statusCheckProfile)
      return setConfirmationVisibility(true);
  }, [statusCheckCNH, statusCheckProfile]);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          disabled={statusCheckCNH ? true : false}
          onPress={() => navigation.navigate('DeliverymanPhotoCnh')}
          style={styles.btnSecondary}>
          <Ionicons
            name={statusCheckCNH ? 'checkmark-circle' : 'information-circle'}
            size={28}
            color={statusCheckCNH ? '#00A349' : 'red'}
            style={styles.iconAlert}
          />
          <Text style={styles.btnSecondaryText}>CNH</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={statusCheckProfile ? true : false}
          onPress={() => navigation.navigate('DeliverymanPhotoProfile')}
          style={styles.btnSecondary}>
          <Ionicons
            name={
              statusCheckProfile ? 'checkmark-circle' : 'information-circle'
            }
            size={28}
            color={statusCheckProfile ? '#00A349' : 'red'}
            style={styles.iconAlert}
          />
          <Text style={styles.btnSecondaryText}>Foto do Perfil</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        disabled={!confirmationVisibility}
        onPress={() => {
          navigation.navigate('DeliverymanSetPassword');
        }}
        style={[
          styles.btnPrimary,
          {
            backgroundColor: confirmationVisibility ? '#0095DA' : '#DAE0E3',
          },
        ]}>
        <Text
          style={[
            styles.btnPrimaryText,
            {
              color: confirmationVisibility ? '#fff' : '#787B7D',
            },
          ]}>
          Confirmar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliverymanPhotos;
