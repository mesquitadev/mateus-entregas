import validator from 'validator';
import {Alert} from 'react-native';
import CPF from 'cpf';

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
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
      this.errors.push(1);
      Alert.alert(alertTitle, alertMessage('NOME COMPLETO', 'letras', 'números'));
      return;
    }
    return;
  }

  validateCpf(param) {
    if (!cpfRegex.exec(param) || validator.isEmpty(param)) {
      Alert.alert(alertTitle, alertMessage('CPF', 'números'));
      this.errors.push(1);
      return false;
    }
    return true;
  }

  validateCnh(param) {
    if (validator.isEmpty(param)) {
      Alert.alert(alertTitle, alertMessage('CNH', 'números'));
      this.errors.push(1);
      return;
    }
  }

  validateDataNascimento(param) {
    if (validator.isEmpty(param)) {
      Alert.alert(alertTitle, alertMessage('DATA NASCIMENTO'));
      this.errors.push(1);
      return;
    }
  }

  validateTelefone(param) {
    if (validator.isEmpty(param)) {
      Alert.alert(alertTitle, alertMessage('TELEFONE', 'números'));
      this.errors.push(1);
      return;
    }
  }

  validateEmail(param) {
    if (!validator.isEmail(param) || validator.isEmpty(param)) {
      Alert.alert(alertTitle, alertMessage('EMAIL'));
      this.errors.push(1);
      return;
    }
  }
}

export default new Validators();
