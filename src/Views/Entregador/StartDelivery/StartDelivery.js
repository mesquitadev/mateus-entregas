import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const StartDelivery = ({ route: {params}, navigation }) => {
  return(
    <View style={styles.container}>

      <View style={styles.body}>
        <View style={styles.info}>
          <Text style={styles.label}>Origem</Text>
          <Text style={styles.text}>Loja -</Text>
          <Text style={styles.label}>Cliente</Text>
          <Text style={styles.text}>Sem nome</Text>
          <Text style={styles.label}>Endereço de entrega</Text>
          <Text style={styles.text}>{params.endereco.bairro}</Text>
          <Text style={styles.text}>{params.endereco.endereco}</Text>
          <Text style={styles.text}>{params.endereco.estado}, {params.endereco.cep}</Text>
          <Text style={styles.status}>Aguardando entrega</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('OrderDetails', {item: params})}>
          <Text style={styles.btnViewMoreText}>Ver mais</Text>
        </TouchableOpacity>
        <View style={styles.contact}>
          <TouchableOpacity 
            onPress={() => Linking.openURL(`tel:${params.cliente.telefone}`)} 
            style={styles.contactTouchable}>
            <Image source={require('../../../res/img/ligar.png')} />
            <Text style={styles.contactTouchableText}>Ligar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactTouchable}>
            <Image source={require('../../../res/img/localizar.png')} />
            <Text style={styles.contactTouchableText}>Localização</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.receipt}>
          <Image style={styles.receiptImg} source={require('../../../res/img/caixa.png')} />
          <Text style={styles.receiptText}>Comprovante de entrega</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.btnAction}>
        <Text style={styles.btnActionText}>
          Iniciar entrega
        </Text>
      </TouchableOpacity>

    </View>
      
  );
};

export default StartDelivery;