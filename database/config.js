module.exports = {
    development: {
      username: "root",
      password: '',
      database: "iotusers",
      host: "localhost",
      dialect: "mysql",
      define: {
        timestamps: false,
       }
    },
    test: {
      username: "root",
      password: '',
      database: "iotusers",
      host: "localhost",
      dialect: "mysql"
    },
    production: {
      username: "root",
      password: '',
      database: "iotusers",
      host: "localhost",
      dialect: "mysql"
    }
  };