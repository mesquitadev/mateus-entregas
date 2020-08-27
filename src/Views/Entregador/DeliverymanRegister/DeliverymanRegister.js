import React, { useState } from 'react';
import {Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';



const DeliverymanRegister = ({ navigation }) => {

    const [ name, setName ] = useState('');
    const [ user, setUser ] = useState('');
    const [ datanascimento, setDataNascimento ] = useState('');
    const [ tel, setTel ] = useState('');
    const [ email, setEmail] = useState('');
  

    return (
      <ScrollView>
      <View style={styles.container}>
        <TextInput
          style= {styles.inputs} 
          placeholder="Nome completo"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInputMask 
          type={"cpf"}
          placeholder="CPF"
          value={user}
          onChangeText={text => setUser(text.replace(/[^\d]+/g,''))}
          style={styles.inputs}
          maxLength={14}
        />
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY'
          }}
          value={datanascimento}
          onChangeText={text => setDataNascimento(text)}
          style={styles.inputs}
          placeholder="Data de Nascimento"
        />
        <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99)'
          }}
          value={tel}
          onChangeText={text => setTel(text)}
          style={styles.inputs}
          placeholder="Telefone"
        />
        <TextInput 
          style={styles.inputs}
          placeholder="E-mail"
          type={"email"}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('DeliverymanPhotos')}
          style={styles.btnPrimary}>
          <Text style={styles.btnPrimaryText}>
            Confirmar
          </Text>
        </TouchableOpacity>

     </View>
     </ScrollView>
    );
  
}

export default DeliverymanRegister;