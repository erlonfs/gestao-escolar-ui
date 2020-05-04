import * as axios from 'axios';
import { API } from './config';

const getPessoasFisicas = async function () {
  try {
    const response = await axios.get(`http://localhost:8888/pessoasFisicas`);

    let data = parseList(response);

    const result = data.map(h => {
      return h;
    });

    return result;

  } catch (error) {
    console.error(error);
    return [];
  }
};

const getPessoasFisica = async function (id) {
  try {

    const response = await axios.get(`${API}/pessoasFisicas/${id}`);
    let data = parseList(response);

    const result = data.map(h => {
      return h;
    });

    return result;

  } catch (error) {
    console.error(error);
    return null;
  }
};

const updatePessoasFisica = async function (pessoaFisica) {
  try {
    const response = await axios.put(`${API}/pessoasFisicas/${pessoaFisica.id}`, pessoaFisica);
    const updated = parseItem(response, 200);
    return updated;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const addPessoasFisica = async function (pessoaFisica) {
  try {
    const response = await axios.post(`${API}/pessoasFisicas`, pessoaFisica);
    const addedPessoaFisica = parseItem(response, 201);
    return addedPessoaFisica;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};

export const PessoaFisicaService = {
  getPessoasFisicas,
  getPessoasFisica,
  updatePessoasFisica,
  addPessoasFisica
};
