import validator from 'validator';
import {Alert} from 'react-native';
import CPF from 'cpf';

const fullNameRegex = /^([a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]|\s)+$/;
const alertTitle = 'Mateus Entregas';
const alertMessage = (text, type, aditional) => {
  return `O campo ${text} ${
    type ? `deve conter ${type} e` : ''
  } não pode ser vazio ${aditional ? `e nem conter ${aditional}` : ''}`;
};

class Validators {
  constructor() {
    this.errors = [];
  }

  validateFullName(param) {
    if (!fullNameRegex.exec(param) || validator.isEmpty(param)) {
      Alert.alert(alertTitle, alertMessage('NOME COMPLETO', 'letras', 'números'));
      return;
    }
  }

  validateCpf(param) {
    if (!CPF.isValid(param) || validator.isEmpty(param)) {
      Alert.alert(alertTitle, alertMessage('CPF', 'números'));
      return;
    }
  }

  validateCnh(param) {
    if (validator.isEmpty(param)) {
      Alert.alert(alertTitle, alertMessage('CNH', 'números'));
      return;
    }
  }

  validateDataNascimento(param) {
    if (validator.isEmpty(param)) {
      Alert.alert(alertTitle, alertMessage('DATA NASCIMENTO'));
      return;
    }
  }

  validateTelefone(param) {
    if (validator.isEmpty(param)) {
      Alert.alert(alertTitle, alertMessage('TELEFONE', 'números'));
      return;
    }
  }

  validateEmail(param) {
    if (!validator.isEmail(param) || validator.isEmpty(param)) {
      Alert.alert(alertTitle, alertMessage('EMAIL'));
      return;
    }
  }
}

export default new Validators();
