const axios = require("axios");

exports.handler = async function (event) {
  const { q, albumToggle } = event.queryStringParameters;
  const client_id = process.env.REACT_APP_CLIENT_ID;
  try {
    const response = await axios.get(`https://api-v2.soundcloud.com/search/${albumToggle?"tracks":"playlists"}`, {
      params: {
        client_id,
        limit: 20,
        q,
        linked_partitioning: true,
      },
    });
    const items = response.data.collection.map((item) => ({
      id: item.id,
      title: item.title,
      thumbnail: item.artwork_url || "",
    }));

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(items),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ message: "Failed to fetch data."}),
    };
  }
};