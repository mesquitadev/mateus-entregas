import React, { useState } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const DeliverymanPhotoCnh = ({navigation}) => { 

    return (
        <View style={styles.container}>
            
            <Text style={styles.textoCnh}>Tire uma foto inteira da sua CNH</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate()}
                style={styles.btnPrimary}>
                <Text style={styles.btnPrimaryText}>
                    Tirar Foto
                </Text>
            </TouchableOpacity>
            
        </View>

    );
}

export default DeliverymanPhotoCnh;