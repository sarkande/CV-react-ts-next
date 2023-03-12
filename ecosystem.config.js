module.exports = {
  apps : [{
    name   : "cv-react-ts-next",
    script : "npm run start",
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }]
}
