// This RWeb3ConfigOptions interface comprises of three property types. 
export interface RWeb3ConfigOptions {
    handleRevert: boolean; // handleRevert is a boolean property type
    defaultAccount?: HexString; // defaultAccount is an optional property of type HexString  
    defaultBlock: BlockNumberOrTag; // defaultBlock is a BlockNumberOrTag property type
}

// Abstract class RWeb3Config is defined here, that cannot be instantiated directly.
export abstract class RWeb3Config {
    // A public property 'config' of type 'RWeb3ConfigOptions' is defined and initialized with some default values.
    public config: RWeb3ConfigOptions = {
        handleRevert: false, // handleRevert is initially set to false
        defaultAccount: undefined, // defaultAccount is initially set to undefined
        defaultBlock: 'latest', // defaultBlock is initially set to 'latest'
    };


    // A public constructor method is defined that accepts an object of type 'Partial<RWeb3ConfigOptions>'.
    // 'Partial' is a utility that makes all properties in RWeb3ConfigOptions as optional.
    // If no argument is passed, it defaults to an empty object.
    public constructor(options?: Partial<RWeb3ConfigOptions>) {
        // config object is being set using setConfig() method
        this.setConfig(options ?? {});
    }


    // A public method 'setConfig' is defined to set configuration values.
    public setConfig(options: Partial<RWeb3ConfigOptions>) {
        // Here properties from the 'options' object are copied into this.config  using the 'Object.assign()' function.
        // If there are properties with the same names in the destination (this.config) and source objects (options),
        // the method will take the properties from the source object.
        // TODO comment suggests there's a plan to improve and add a key check here in the future.
        Object.assign(this.config, options);
    }
}
