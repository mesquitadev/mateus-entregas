import React, { useState } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';


const DeliverymanPhotos = ({navigation}) => { 
    const [state, setState] = useState ({
        cnh:'',
        fotoperfil: ''
    
    })
    
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate()}
                    style={styles.btnSecondary}>
                    <Text style={styles.btnSecondaryText}>
                        CNH
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate()}
                    style={styles.btnSecondary}>
                    <Text style={styles.btnSecondaryText}>
                        Foto do Perfil
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            <TouchableOpacity
                onPress={() => navigation.navigate()}
                style={styles.btnPrimary}>
                <Text style={styles.btnPrimaryText}>
                    Confirmar
                </Text>
            </TouchableOpacity>
        </View>
    );

}

export default DeliverymanPhotos;
