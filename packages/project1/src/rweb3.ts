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

// Import necessary files and packages
import { RWeb3PkgInfo } from './version.js';
import { RWeb3Context } from 'rweb3-core';
import RWeb3Rigo from 'rweb3-rigo';
import { isNullish } from 'rweb3-validator';
import { RWeb3RigoInterface } from './types';

// RWeb3 class which extends the RWeb3Context class
export class RWeb3 extends RWeb3Context {

    // Static properties
    public static version = RWeb3PkgInfo.version;
    public static modules = {
        RWeb3Rigo,
    };

    // Declare rigo of type RWeb3RigoInterface
    public rigo: RWeb3RigoInterface;

    // Constructor with optional provider parameter of type string
    public constructor(provider?: string) {
        // Call to parent class constructor
        super(provider);

        // Warn if provider is missing or empty
        if (isNullish(provider) || (typeof provider === 'string' && provider.trim() === '')) {
            console.warn(
                'NOTE: rweb3.js is running without provider. You need to pass a provider in order to interact with the network!',
            );
        }

        // Have to use local alias to initiate contract context
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        const rigo = self.use(RWeb3Rigo);

        // Log the rigo instance
        console.log('rigo', rigo);
        
        // Initialize rigo by merging rigo with an empty object
        this.rigo = Object.assign(rigo, {});

        // Log this instance of rigo
        console.log('this.rigo', this.rigo);
    }
}

// Export RWeb3 as default
export default RWeb3;
