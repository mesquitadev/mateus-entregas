import React from 'react';
import { View, Image } from 'react-native';


import styles from './styles';

const Preloader = ({navigation}) => {


    setTimeout(() => {
      navigation.replace('Login'); 
    }, 2000);

    return (

        <View style={styles.container}>
           
            <Image style={styles.logo} source={require('../../../res/img/MATEUSENTREGA.png')} />
            <View>
                <Image style={styles.pulse} source={require('../../../res/img/pulse.png')}/>
            </View>
        </View>

    );


}

export default Preloader;