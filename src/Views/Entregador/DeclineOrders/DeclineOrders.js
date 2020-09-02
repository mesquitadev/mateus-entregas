import React, {useState, useEffect} from 'react';
import {Alert, View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import ModalBottom from '../../../Components/ModalBottom/ModalBottom';
import ServiceCancelDelivery from '../../../services/cancelDelivery';
import ServicePuttOffDelivery from '../../../services/puttOffDelivery';

const DeclineOrders = ({route: {params}, navigation}) => {
  const [idCard, setIdCard] = useState(null);
  const [listBoxes, setListBoxes] = useState([]);
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [modalBottomVisibility, setModalBottomVisibility] = useState(false);

  const _data = params.data;

  const boxes = [
    {
      id: 1,
      valor: 1,
      message: 'Não foi possível encontrar o endereço de entrega',
      selected: false,
    },
    {
      id: 2,
      valor: 2,
      message: 'Cliente ausente',
      selected: false,
    },
    {
      id: 3,
      valor: 3,
      message: 'Itens danificados, cliente não quis receber',
      selected: false,
    },
  ];

  const selectionCard = (id) => {
    const newListBoxes = listBoxes.map((box) => {
      return box.id === id
        ? {...box, selected: !box.selected}
        : {...box, selected: false};
    });
    setListBoxes(newListBoxes);
  };

  const enableButtons = (id) => {
    let boxSelected = listBoxes.find((box) => {
      return box.id === id;
    });
    if (boxSelected.selected === true) setButtonVisibility(false);
    else setButtonVisibility(true);
  };

  const openBottonModal = () => setModalBottomVisibility(true);
  const closeBottonModal = () => setModalBottomVisibility(false);
  const resetView = () => {
    setListBoxes(boxes);
    setModalBottomVisibility(false);
    setButtonVisibility(false);
  };

  const confirmCancelDelivery = async () => {
    const payload = {
      idEntregaPedido: _data.id,
      valor: boxes[idCard].valor,
    };
    try {
      await ServiceCancelDelivery(payload);
      closeBottonModal();
      navigation.navigate('DeclineOrdersInformation', {
        status: 'cancelada',
        message: 'Entrega de pedido cancelada!',
        routeReturn: 'DeliveryOrders',
      });
    } catch (error) {
      if (error) {
        Alert.alert('App Entregas', 'Erro no cancelamento entrega.')
      };
      resetView();
      return;
    }
  };

  const confirmPutOffDelivery = async () => {
    const payload = {
      idEntregaPedido: _data.id,
      valor: boxes[idCard].valor,
    };
    try {
      await ServicePuttOffDelivery(payload);
      closeBottonModal();
      navigation.navigate('DeclineOrdersInformation', {
        status: 'adiada',
        message: 'Entrega de pedido adiada!',
        routeReturn: 'DeliveryOrders',
      });
    } catch (error) {
      if (error) {
        Alert.alert('App Entregas', 'Erro no adiamento da entrega.')
      };
      resetView();
      return;
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      resetView();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    setListBoxes(boxes);
  }, []);

  return (
    <>
      {modalBottomVisibility ? (
        <ModalBottom
          text={'Quer realmente desistir da entrega?'}
          buttonValue={'Confirmar'}
          closeBottonModal={closeBottonModal}
          event={confirmCancelDelivery}
        />
      ) : null}

      <View style={{flex: 1, zIndex: 0}}>
        <View style={[styles.container]}>
          {listBoxes.map((box, index) => (
            <View
              style={[
                styles.card,
                {
                  borderWidth: box.selected ? 2 : 1,
                  borderColor: box.selected ?? '#0000003D',
                },
              ]}
              onTouchEnd={() => {
                setIdCard(box.id - 1);
                selectionCard(box.id);
                enableButtons(box.id);
              }}
              key={index}>
              <Text style={styles.text}>{box.message}</Text>

              {box.selected ? (
                <Ionicons
                  name={'checkmark-circle'}
                  size={40}
                  color={'#7E878B'}
                  style={{marginRight: -5}}
                />
              ) : (
                <View style={styles.circleCheckBox} />
              )}
            </View>
          ))}
        </View>

        <View style={[styles.buttonsContainer]}>
          <TouchableOpacity
            onPress={openBottonModal}
            disabled={!buttonVisibility}
            style={[
              styles.button,
              styles.buttonCancelar,
              {backgroundColor: buttonVisibility ? '#F92121' : '#DAE0E3'},
            ]}>
            <Text
              style={[
                styles.textCancelar,
                {color: buttonVisibility ? '#fff' : '#787B7D'},
              ]}>
              Desistir
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={!buttonVisibility}
            onPress={confirmPutOffDelivery}
            style={[
              styles.button,
              styles.buttonAdiar,
              {backgroundColor: buttonVisibility ? '#0095DA' : '#DAE0E3'},
            ]}>
            <Text
              style={[
                styles.textAdiar,
                {color: buttonVisibility ? '#fff' : '#787B7D'},
              ]}>
              Adiar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DeclineOrders;
