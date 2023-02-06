// Import App
const app = require("./server/app");
// Import Configuration obj.
const { Configuration } = require("./config.js");
// Import chalk for logging.
const chalk = require("chalk");
// Import CORS
const cors = require("cors");
// Configuration setup
let port = Configuration.PORT;
let hostname = Configuration.HostName;
let appName = Configuration.LoggerConfig.APPName;
let loggerMainColor = Configuration.LoggerConfig.LoggerMainColor;
let loggerStyle1 = Configuration.LoggerConfig.LoggerMainStyle.style1;
let loggerStyle2 = Configuration.LoggerConfig.LoggerMainStyle.style2;
let loggerStyleColor = Configuration.LoggerConfig.LoggerMainStyle.styleColor;
let loggerHostNameColor = Configuration.LoggerConfig.LoggerHostNameColor;
let loggerPortColor = Configuration.LoggerConfig.LoggerPortColor;
let portColor = chalk.hex(`${loggerPortColor}`);
let hostNameColor = chalk.hex(`${loggerHostNameColor}`);
let mainColor = chalk.hex(`${loggerMainColor}`);
let styleColor = chalk.hex(`${loggerStyleColor}`);

// Use CORS
app.use(cors());

// ERROR Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Listen to the APP.
app.listen(port, () => {
  console.log(
    styleColor(`${loggerStyle1}`),
    mainColor(`${appName}`),
    styleColor(`${loggerStyle2}`),
    mainColor(`: Server started on`),
    hostNameColor(`${hostname}`) + ":" + portColor(`${port}`)
  );
});
