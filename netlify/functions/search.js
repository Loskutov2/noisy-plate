const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { SchemaType } from '@google/generative-ai';

exports.handler = async function (event) {
  const { q, albumToggle } = event.queryStringParameters;
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const genAI = new GoogleGenerativeAI(process.env.AI_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.OBJECT,
        properties: {
          title: {
            type: SchemaType.STRING,
          },
          authors: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.STRING
            }},
          modifications: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.STRING
              }
            }
          }
        }
      }
    }
  });
  try {
    const rawResponse = await axios.get(`https://api-v2.soundcloud.com/search/${albumToggle?"tracks":"playlists"}`, {
      params: {
        client_id,
        limit: 20,
        q,
        linked_partitioning: true,
      },
    });
    const items = rawResponse.data.collection.map((item) => ({
      id: item.id,
      title: item.title,
      thumbnail: item.artwork_url || item.user.avatar_url,
    }));
    const titles = items.map(item => item.title)
    const prompt = "Given an array of strings, each representing a song entry, split each string into three separate parts: song name, authors, and modifications. Array ="+String(titles)
    const ans = await model.generateContent(prompt)
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "Content-Type",
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify(ans.map((obj1, index) => {return {...items[index], obj1}})),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({ message: "Failed to fetch data." }),
    };
  }
};