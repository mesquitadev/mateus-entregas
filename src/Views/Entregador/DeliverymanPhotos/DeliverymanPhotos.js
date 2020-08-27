import React, { useState } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';



const DeliverymanPhotos = ({navigation}) => { 

    const [ cnh, setCnh ] = useState('true');
    const [ fotoprofile, setFotoProfile] = useState('false');
   
    return (
        
        <View style={styles.container}>
            
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DeliverymanPhotoCnh')}
                    style={styles.btnSecondary}>
                    <Ionicons 
                    name="information-circle" 
                    size={28} 
                    color={"red"}
                    style={styles.iconAlert} 
                    />
                    <Text style={styles.btnSecondaryText}>
                        CNH
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('DeliverymanPhotoProfile')}
                    style={styles.btnSecondary}>
                    <Ionicons 
                        name="information-circle" 
                        size={28} 
                        color={"red"}
                        style={styles.iconAlert}
                        />
                    <Text style={styles.btnSecondaryText}>
                        Foto do Perfil
                    </Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity
                onPress={() => navigation.navigate('DeliverymanSetPassword')}
                style={styles.btnPrimary}>
                <Text style={styles.btnPrimaryText}>
                    Confirmar
                </Text>
            </TouchableOpacity>
        </View>
    );

}

export default DeliverymanPhotos;
