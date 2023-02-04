const app = require("./server/app");
const { Configuration } = require("./config.js");
const chalk = require("chalk");
let port = Configuration.PORT;
let hostname = Configuration.HostName;
let appname = Configuration.LoggerConfig.APPName;
let loggerMainColor = Configuration.LoggerConfig.LoggerMainColor;
const loggerStyle1 = Configuration.LoggerConfig.LoggerMainStyle.style1;
const loggerStyle2 = Configuration.LoggerConfig.LoggerMainStyle.style2;
let loggerStyleColor = Configuration.LoggerConfig.LoggerMainStyle.styleColor;
let loggerHostNameColor = Configuration.LoggerConfig.LoggerHostNameColor;
let loggerPortColor = Configuration.LoggerConfig.LoggerPortColor;
let portColor = chalk.hex(`${loggerPortColor}`);
const hostNameColor = chalk.hex(`${loggerHostNameColor}`);
let mainColor = chalk.hex(`${loggerMainColor}`);
let styleColor = chalk.hex(`${loggerStyleColor}`);

app.listen(port, () => {
  console.log(
    styleColor(`${loggerStyle1}`),
    mainColor(`${appname}`),
    styleColor(`${loggerStyle2}`),
    mainColor(`: Server started on`),
    hostNameColor(`${hostname}`) + ":" + portColor(`${port}`)
  );
});
