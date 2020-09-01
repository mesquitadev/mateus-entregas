import React, { useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';



import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';


const Preloader = () => {

    const navigation = useNavigation();
  
    useEffect(() => {

        const timer = setTimeout(() =>{ 
            const loading = async () => {
                const token = await AsyncStorage.getItem('token');

                if(token) {
                    //validar o token
                } else {
                    navigation.navigate('Login');
                }
            }

        loading() 
    }, 1000);

        return () => clearTimeout (timer);
        
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image source={require('../../../res/img/logoMateusWhite.png')} />
                <Text style={styles.entrega}>Entrega</Text>
            </View>

            <View>
                <Image style={styles.logo} source={require('../../../res/img/pulse.png')}/>
            </View>
        </View> 

    );





}

export default Preloader;