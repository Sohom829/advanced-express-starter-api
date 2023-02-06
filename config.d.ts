/**
 * @type ConfigType
 * @author Sohom829
 */
type ConfigType = {
    PORT: number;
    HostName: string;
    LoggerConfig: {
        APPName: string;
        LoggerMainColor: string;
        LoggerMainStyle: {
            style1: string;
            style2: string;
            styleColor: string;
        };
        LoggerPortColor: string;
        LoggerHostNameColor: string;
    };
};
/**
 * @author Sohom829
 * @object Configuration
 * @description Configuration of the **logger**, edit the logger using the Configuration object.
 */
declare const Configuration: ConfigType;
export { Configuration };
//# sourceMappingURL=config.d.ts.map