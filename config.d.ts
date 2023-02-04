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
declare const Configuration: ConfigType;
export { Configuration };
//# sourceMappingURL=config.d.ts.map