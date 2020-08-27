import React, { useState } from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';



const DeliverymanRegister = ({ navigation }) => {

    const [ name, setName ] = useState('');
    const [ user, setUser ] = useState('');
    const [ datanascimento, setDataNascimento ] = useState('');
    const [ tel, setTel ] = useState('');
    const [ email, setEmail] = useState('');
   
    return (
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
        <TextInput
          style={styles.inputs}
          placeholder="Data de Nascimento"
          value={datanascimento}
          onChange={text => setDataNascimento(text)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Telefone"
          type={"tel"}
          value={tel}
          onChange={text => setTel(text)}
        />
        <TextInput 
          style={styles.inputs}
          placeholder="E-mail"
          type={"email"}
          value={email}
          onChange={text => setEmail(text)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('DeliverymanPhotos')}
          style={styles.btnPrimary}>
          <Text style={styles.btnPrimaryText}>
            Confirmar
          </Text>
        </TouchableOpacity>

     </View>
    );
  
}

export default DeliverymanRegister;