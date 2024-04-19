import axios from 'axios';

async function criarItemAPI(itemJson) {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/create', itemJson, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Item criado com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar item:', error);
    throw error;
  }
}

async function atualizarItemAPI(id, camposModificados) {
  try {
    const response = await axios.patch(`http://127.0.0.1:8000/api/${id}/`, camposModificados, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Item atualizado com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar item:', error);
    throw error;
  }
}

async function substituirItemAPI(id, novoItemJson) {
  try {
    const response = await axios.put(`http://127.0.0.1:8000/api/${id}/`, novoItemJson, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Item substituído com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao substituir item:', error);
    throw error;
  }
}

async function obterItemAPI(id) {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/${id}/`);

    console.log('Item obtido com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter item:', error);
    throw error;
  }
}

// Função para excluir um item da API (requisição DELETE)
async function excluirItemAPI(id) {
  try {
    const response = await axios.delete(`http://127.0.0.1:8000/api/delete/${id}`);

    console.log('Item excluído com sucesso');
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir item:', error);
    throw error;
  }
}

export default {excluirItemAPI, obterItemAPI, substituirItemAPI, atualizarItemAPI, criarItemAPI}