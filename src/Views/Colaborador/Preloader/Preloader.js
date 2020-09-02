import React from 'react';
import { View, Image, Text, Animated} from 'react-native';


import styles from './styles';

const Preloader = ({navigation}) => {


    setTimeout(() => {
       navigation.replace('Login'); 
    }, 2000);

    return (

        <View style={styles.container}>
           
            <Image style={styles.logo} source={require('../../../res/img/logoMateusWhite.png')} />
            <Text style={styles.subtitle}>Entrega</Text>
           
            <View>
                <Image style={styles.pulse} source={require('../../../res/img/pulse.png')}/>
            </View>
        </View>

    );


}

export default Preloader;