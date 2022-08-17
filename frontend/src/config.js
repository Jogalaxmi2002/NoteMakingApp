const config = {

  
  MAX_ATTACHMENT_SIZE: 5000000,
    // Backend config
    s3: {
      REGION: "ap-south-1",
      BUCKET: "joga-notes-storagestack-uploadsbucketc4b27cc7-5g7b19e65fwt",
    },
    apiGateway: {
      REGION: "ap-south-1",
      URL:" https://eqo42z4y5l.execute-api.ap-south-1.amazonaws.com",
    },
    cognito: {
      REGION: "ap-south-1",
      USER_POOL_ID:"ap-south-1_JVWRU0cXv",
      APP_CLIENT_ID: "4oon7pl12vntr8ljdajl8135o",
      IDENTITY_POOL_ID: "ap-south-1:eff852e9-bc0b-4979-a4dc-5adde371fcaf",
    },
  };
  
  export default config;