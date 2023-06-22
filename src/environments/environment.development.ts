export const environment = {
  serverUrl: '/api',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://dockerubuntu:8080/auth/',
    // Realm
    realm: 'ecommerce',
    clientId: 'demo-angular',
  },
};
