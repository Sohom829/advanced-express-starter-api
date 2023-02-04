type ConfigType = {
  PORT?: number;
  HostName?: string;
  LoggerConfig?: {
    APPName?: string;
    LoggerMainColor?: string;
    LoggerMainStyle?: {
      style1?: string;
      style2?: string;
      styleColor?: string;
    };
    LoggerPortColor?: string;
    LoggerHostNameColor?: string;
  };
};

const Configuration: ConfigType = {
  PORT: 3000, // You can change it.
  HostName: "http://localhost",
  LoggerConfig: {
    APPName: "Express Starter API", // The logger APP name.
    LoggerMainColor: "#ff2200",
    LoggerMainStyle: {
      style1: "[",
      style2: "]",
      styleColor: "#00a6ff",
    },
    LoggerPortColor: "#00ff7b",
    LoggerHostNameColor: "#ff002b",
  },
};

export { Configuration };
