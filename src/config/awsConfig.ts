import AWS from 'aws-sdk';
import { AWS_ACCESS_KEY_ID,AWS_REGION,AWS_SECRET_ACCESS_KEY } from '@env'; 

AWS.config.update({
  region: AWS_ACCESS_KEY_ID,
  accessKeyId: AWS_REGION,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

export default AWS;
