import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const response = await responseServer.json();
        return response;
      }

      throw new Error('Não foi possível buscar os dados');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const response = await responseServer.json();
        return response;
      }

      throw new Error('Não foi possível buscar os dados');
    });
}

function create(objetoCategoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoCategoria),
  })
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const response = await responseServer.json();
        return response;
      }

      throw new Error('Não foi possível buscar os dados');
    });
}

export default {
  getAll,
  getAllWithVideos,
  create,
};
