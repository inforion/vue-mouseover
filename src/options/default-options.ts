import { MouseoverOptions } from '../../types';
import { DeepReadonlyRequiredObject } from '../types-internal/deep-readonly-required-object';

export default {
    defaultValues: {
        noValueDirective: {
            mouseenter: true,
            mouseleave: false
        },
        hasValueDirective: {
            mouseenter: null,
            mouseleave: null
        }
    },
    immediate: true
} as DeepReadonlyRequiredObject<MouseoverOptions>;