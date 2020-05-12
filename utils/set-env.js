const fs = require('fs');
require('dotenv').config();

const filePath = './src/app/config/environment.ts';
const envConfigFile = `export const environment = {
   openWeatherApiKey: '${process.env.OPEN_WEATHER_API_KEY}',
   nodeEnv: '${process.env.NODE_ENV}',
   production: ${process.env.PRODUCTION === 'production' ? true : false}
};
`;

console.log(`Generating environment config (${filePath})`, envConfigFile);

fs.writeFile(filePath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   }
});
