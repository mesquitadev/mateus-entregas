import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import ModalBottom from '../../../Components/ModalBottom/ModalBottom';

const DeclineOrders = ({navigation}) => {
  const [listBoxes, setListBoxes] = useState([]);
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [modalBottomVisibility, setModalBottomVisibility] = useState(false);

  const handleBoxSelection = (id) => {
    const newListBoxes = listBoxes.map((box) => {
      return box.id === id
        ? {...box, selected: !box.selected}
        : {...box, selected: false};
    });
    setListBoxes(newListBoxes);
  };

  const habilityButtonAdiar = (id) => {
    let boxSelected = listBoxes.find((box) => {
      return box.id === id;
    });
    if (boxSelected.selected === true) setButtonVisibility(false);
    else setButtonVisibility(true);
  };

  const openBottonModal = () => setModalBottomVisibility(true);
  const closeBottonModal = () => setModalBottomVisibility(false);

  const goToConfirmation = () => {
    closeBottonModal();
    navigation.navigate('DeclineOrdersInformation', {
      status: 'cancelada',
      message: 'Entrega de pedido cancelada',
      routeReturn: 'OrderList',
    });
  };

  useEffect(() => {
    setListBoxes([]);
  }, []);

  useEffect(() => {
    const boxes = [
      {
        id: 1,
        message: 'Não foi possível encontrar o endereço de entrega',
        selected: false,
      },
      {
        id: 2,
        message: 'Cliente ausente',
        selected: false,
      },
      {
        id: 3,
        message: 'Itens danificados, cliente não quis receber',
        selected: false,
      },
    ];
    setListBoxes(boxes);
  }, []);

  return (
    <>
      {modalBottomVisibility ? (
        <ModalBottom
          text={'Quer realmente desistir da entrega?'}
          buttonValue={'Confirmar'}
          closeBottonModal={closeBottonModal}
          goToConfirmation={goToConfirmation}
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
                handleBoxSelection(box.id);
                habilityButtonAdiar(box.id);
              }}
              key={index}>
              <Text style={styles.text}>{box.message}</Text>
              {box.selected ? (
                <Ionicons
                  name={'checkmark-circle'}
                  size={40}
                  color={'#7E878B'}
                  style={{marginRight: -5}}
                  onTouchEnd={() => {
                    handleBoxSelection(box.id);
                    habilityButtonAdiar(box.id);
                  }}
                />
              ) : (
                <View
                  style={styles.circleCheckBox}
                  onTouchEnd={() => {
                    handleBoxSelection(box.id);
                    habilityButtonAdiar(box.id);
                  }}
                />
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
              {
                backgroundColor: buttonVisibility ? '#F92121' : '#DAE0E3',
              },
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
            onPress={() =>
              navigation.navigate('DeclineOrdersInformation', {
                status: 'adiada',
                message: 'Entrega de pedido adiada!',
              })
            }
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
