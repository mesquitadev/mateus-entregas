import React from 'react';
import { Text, View, Image } from 'react-native';


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

            <Text style={{color: '#FFF'}}>Beta v0.1.1 </Text>
        </View>

    );


}

export default Preloader;