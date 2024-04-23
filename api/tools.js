import {excluirItemAPI, obterItemAPI, substituirItemAPI, atualizarItemAPI, criarItemAPI} from './api';

function criarItemJson(nomeProduto, descricao, preco, estoque) {
    const item = {
      NomeProduto: nomeProduto,
      Descricao: descricao,
      Preco: preco,
      Estoque: estoque
    };
  
    const jsonItem = JSON.stringify(item);
    return criarItemAPI(jsonItem);
  }

function criaPutJson(id, nomeProduto, descricao, preco, estoque) {

    const item = {
      NomeProduto: nomeProduto,
      Descricao: descricao,
      Preco: preco,
      Estoque: estoque
    };
  
    const jsonItem = JSON.stringify(item);
    substituirItemAPI(id, jsonItem);
}

function getById(id){
  const resultado = obterItemAPI(id);
    return resultado;
}

function deleteById(id){
  excluirItemAPI(id);
}
function criaPatchJson(id, nomeProduto, descricao, preco, estoque) {
    const item = {
      NomeProduto: nomeProduto,
      Descricao: descricao,
      Preco: preco,
      Estoque: estoque
    };
  
    const jsonItem = JSON.stringify(item);
    atualizarItemAPI(id, jsonItem);
  }

  export {criaPatchJson, criaPutJson, criarItemJson, deleteById, getById}