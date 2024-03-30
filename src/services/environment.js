var environment = {
   
    Development: {
      API_URL: "http://localhost:8080/rightease/api",
      BASE_URL: "http://localhost:9000",
    },
   
  };
  
  var env = process.env.VUE_APP_ENVIRONMENT || "Development";
  
  export default environment[env];
  