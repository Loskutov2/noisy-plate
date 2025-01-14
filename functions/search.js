const axios = require("axios");

exports.handler = async function (event) {
  const { query } = event.queryStringParameters;
  const CLIENT_ID = "57GDonO1e5SInnyt8DyMGWwbrg0AOq1H";

  try {
    const response = await axios.get("https://api-v2.soundcloud.com/search", {
      params: {
        client_id: CLIENT_ID,
        limit: 20,
        q: query,
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
      body: JSON.stringify(items),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ message: "Failed to fetch data." }),
    };
  }
};