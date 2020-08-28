import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const DeliverymanPhotos = ({navigation, route: {params}}) => {
  const [statusCheckCNH, setStatusCheckCNH] = useState(false);
  const [statuCheckProfile, setStatuCheckProfile] = useState(false);
  const [confirmationVisibility, setConfirmationVisibility] = useState(false);

  const types = {
    cnh: 'cnh',
    perfil: 'perfil',
  };

  useEffect(() => {
    const getStatusChecks = async () => {
      try {
        const checkCNH = await AsyncStorage.getItem(types.cnh);
        const checkPerfil = await AsyncStorage.getItem(types.perfil);
        console.log('cnhhhhh', checkCNH);
        console.log('perfilll', checkPerfil)
        setStatusCheckCNH(checkCNH);
        setStatuCheckProfile(checkPerfil);
      } catch (e) {}
    };
    getStatusChecks();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.replace('DeliverymanPhotoCnh')}
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
          onPress={() => navigation.replace('DeliverymanPhotoProfile')}
          style={styles.btnSecondary}>
          <Ionicons
            name={statuCheckProfile ? 'checkmark-circle' : 'information-circle'}
            size={28}
            color={statuCheckProfile ? '#00A349' : 'red'}
            style={styles.iconAlert}
          />
          <Text style={styles.btnSecondaryText}>Foto do Perfil</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        disabled={!confirmationVisibility}
        onPress={() => navigation.navigate('DeliverymanSetPassword')}
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
