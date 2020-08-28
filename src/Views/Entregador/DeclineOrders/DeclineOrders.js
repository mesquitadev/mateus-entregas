import React, {useState, useEffect} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const pathInfoIcon = require('../../../res/img/info.png');
const pathSelectionIcon = require('../../../res/img/selection.png');

const DeclineOrders = ({navigation}) => {
  const [listBoxes, setListBoxes] = useState([]);
  const [buttonVisibility, setButtonVisibility] = useState(false);

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


  useEffect(() => {
    setListBoxes([])
  }, [])

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
      <View style={styles.container}>
        {listBoxes.map((box, index) => (
          <View style={styles.box} key={index}>
            <Image source={pathInfoIcon} />
            <Text style={styles.text}>{box.message}</Text>
            {box.selected ? (
              <Image
                source={pathSelectionIcon}
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

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DeclineOrdersInformation', {
              status: 'cancelada',
              message: 'Entrega de pedido cancelada',
            })
          }
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
            {backgroundColor: buttonVisibility ? '#D98016' : '#DAE0E3'},
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
    </>
  );
};

export default DeclineOrders;
