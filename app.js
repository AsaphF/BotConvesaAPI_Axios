const axios = require('axios');

// URL of the third-party API you want to request
const apiUrl = 'https://backend.botconversa.com.br/api/v1/webhook/subscriber/';
const customFildUrl = 'https://backend.botconversa.com.br/api/v1/webhook/subscriber/id/custom_fields/String/'
const apiKey = 'API-KEY'; // Replace this with your actual API key

async function fetchData() {
  try {
    // Make a GET request to the API with the API key in the headers
    const response = await axios.get(apiUrl, {
      headers: {
        'API-KEY': `${apiKey}`,
      }
    });

    const data = response.data;
    console.log('API Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();

// Function to make the API request
async function postData() {
  try {
    // Make a GET request to the API
    const response = await axios.post(apiUrl, {
      phone: '5511933776782',
      full_name: 'Asaph Ferreira',
      first_name: 'Asaph',
      last_name: 'Ferreira'
    }, {
      headers: {
        'API-KEY': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const responseData = response.data;
    // console.log('API Response:', responseData);
  } catch (error) {
    // Handle errors
    if (error.response.status === 400) {
      console.log('Esse cliente já possui cadastro no botConversa.')
    } else if (error.response.status === 401) {
      console.log('Esse telefone já está cadastrado.')
    } else {
      console.log('A API Key está inválida')
    }
  }
}

// Call the function to fetch data

postData();