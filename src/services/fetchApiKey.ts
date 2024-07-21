import AWS from '../config/awsConfig';

const secretName = 'weatherApiKey';

const getSecretValue = async () => {
  const client = new AWS.SecretsManager();

  try {
    const data = await client.getSecretValue({ SecretId: secretName }).promise();
    if ('SecretString' in data) {
      const secret = JSON.parse(data.SecretString);
      return secret.weatherApiKey;
    }
    throw new Error('Secret not found');
  } catch (err) {
    console.error('Error fetching secret:', err);
    throw new Error('Failed to fetch secret');
  }
};

export default getSecretValue;
