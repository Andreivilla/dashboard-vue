// src/services/ibgeService.js
import axios from 'axios';

const URL_NAME = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes';
const URL_RANKING = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking'

export async function getNameFreq(name) {
  try {
    const response = await axios.get(`${URL_NAME}/${name}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados do IBGE:', error);
    throw error;
  }
}

export async function getNameRankingGeral() {
  try {
    const response = await axios.get(`${URL_RANKING}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados do IBGE:', error);
    throw error;
  }
}



export function addPercentFreq(json) {
  json.forEach(item => {
    const maxFrequencia = Math.max(...item.res.map(r => r.frequencia));
    
    item.res.forEach(r => {
      r.porcentagem = ((r.frequencia / maxFrequencia) * 100).toFixed(2) + '%';
    });
  });

  return json;
}