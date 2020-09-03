import React, {useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import patchIcon from '../../../res/img/cancel.png';

const DeliverymanSetRegister = ({navigation}) => {
  const [entrega, SetEntrega] = useState('');
  const [analise, setAnalise] = useState('');
  const [icon, setIcon] = useState('');

  return (
    <>
      <CustomHeader
        headerTitle="Cadastro"
        pathIcon={patchIcon}
        event={() => navigation.navigate('Login')}
      />
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('../../../res/img/cadastro.png')} />

          <Text style={styles.textmsg}>
            Falta pouco para você começar a entregar!
          </Text>

          <Text style={styles.nameDeliveryman}>Nome do entregador</Text>

          <Text style={styles.cpfDeliveryman}>CPF: 0000000000-00</Text>

          <View style={styles.divider} />

          <Text style={styles.msg}>
            Estamos analisando seus documentos. Você poderá acompanhar o
            processo de verificação por aqui.
          </Text>

          <View style={styles.wrapper}>
            <View style={styles.result}>
              <Text style={styles.approved}>Pré cadastro</Text>
              <Text style={styles.resultConfirm}>Realizado</Text>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={28} color={'#00A349'} />
            </View>
          </View>

          <View style={styles.wrapper}>
            <View style={styles.result}>
              <Text style={styles.approved}>Foto da CNH</Text>
              <Text style={styles.resultConfirm}>Enviada</Text>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={28} color={'#00A349'} />
            </View>
          </View>

          <View style={styles.wrapper}>
            <View style={styles.result}>
              <Text style={styles.approved}>Foto do Perfil</Text>
              <Text style={styles.resultConfirm}>Enviada</Text>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={28} color={'#00A349'} />
            </View>
          </View>

          <View style={styles.wrapper}>
            <View style={styles.result}>
              <Text style={styles.approved}>Definição de senha</Text>
              <Text style={styles.resultConfirm}>Realizada</Text>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={28} color={'#00A349'} />
            </View>
          </View>

          <View style={styles.wrapper_espera}>
            <View style={styles.result}>
              <Text style={styles.approved}>Lista de espera</Text>
              <Text style={styles.resultConfirm}>Em análise</Text>
            </View>
            <View>
              <Ionicons name="time" size={28} color={'#D98016'} />
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={styles.btnPrimary}>
              <Text style={styles.btnPrimaryText}>Iniciar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default DeliverymanSetRegister;
