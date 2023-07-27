Here is the commented version of your code:

/*
    Copyright 2023 All Rigo Chain Developers

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/


// Various required imports:
import { RWeb3PkgInfo } from './version.js'; // version info for RWeb3
iimport { RWeb3Context } from 'rweb3-core'; // bringing in the RWeb3 context 
import RWeb3Rigo from 'rweb3-rigo'; // import RWeb3Rigo module
import { isNullish } from 'rweb3-validator'; // validator to check for null or undefined values
import { RWeb3RigoInterface } from './types'; // specific types for RWeb3Rigo

// Exporting RWeb3 as a class that extends the base RWeb3Context from rweb3-core
export class RWeb3 extends RWeb3Context {
    // Static properties to provide version and module info
    public static version = RWeb3PkgInfo.version; // assign the version info
    public static modules = {
        RWeb3Rigo, // RWeb3Rigo as a module
    };

    // Declare a type for rigo, our RWeb3Rigo module
    public rigo: RWeb3RigoInterface;

    // Constructor for RWeb3 class which may receive a provider
    public constructor(provider?: string) {
        super(provider); // call the superclass' constructor
        
        // Check if the provider is null, undefined or an empty string
        if (isNullish(provider) || (typeof provider === 'string' && provider.trim() === '')) {
            // If no valid provider is given, show a warning message
            console.warn(
                'NOTE: rweb3.js is running without provider. You need to pass a provider in order to interact with the network!',
            );
        }

        // Creating a reference to the class (self) and initializing the RWeb3Rigo (rigo) module
        const self = this;
        const rigo = self.use(RWeb3Rigo);

        console.log('rigo', rigo); // display the rigo object for debugging purposes

        // Assign rigo object to this.rigo property
        this.rigo = Object.assign(rigo, {});

        console.log('this.rigo', this.rigo); // display the updated this.rigo object for debugging purposes
    }
}

// Export RWeb3 as the default export
export default RWeb3;