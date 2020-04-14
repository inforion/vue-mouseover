import merge from 'lodash.merge';

import { MouseoverOptions } from '../../types';
import { DeepReadonlyRequiredObject } from '../types-internal/deep-readonly-required-object';
import defaultOptions from './default-options';

let currentOptions = merge({}, defaultOptions);

export function setOptions(options?: MouseoverOptions): void {
    currentOptions = merge(defaultOptions, options);
}

export function getOptions(): DeepReadonlyRequiredObject<MouseoverOptions> {
    return currentOptions;
}