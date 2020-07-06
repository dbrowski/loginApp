export default {
  // Application authorization details. For more information check "Getting Started" in README.md
  authDetails: {
    environmentId: "fa669f8d-f31c-4b71-93b7-ca1906954c6f",
    responseType: "token id_token",
    clientId: "8445b17e-1d8e-4ebb-88be-502653b5570d",
    clientSecret: "",
    grantType: "implicit",
    // redirectUri: "https://loginApp.surge.sh",
    redirectUri: "http://localhost:8080",
    logoutRedirectUri: "http://localhost:8080",
    scope: "profile address email phone",
    prompt: "login",
    tokenEndpointAuthMethod: "none",
    maxAge: 3600,
  },

  API_URI: "https://api.pingone.com/v1",
  AUTH_URI: "https://auth.pingone.com",
};
