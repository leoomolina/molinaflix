import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoVideo),
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
  create,
};
