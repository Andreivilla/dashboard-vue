// src/services/ibgeService.js
import axios from 'axios';

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes';

export async function getNameFreq(name) {
  try {
    const response = await axios.get(`${BASE_URL}/${name}`);
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