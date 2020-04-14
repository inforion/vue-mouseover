import { VNodeDirective } from 'vue/types/vnode';

import { MouseoverValueSettings } from '../../types';
import { getOptions } from '../options/current-options';
import isObject from '../utils/is-object';

function isSettingsLike(value: unknown): value is MouseoverValueSettings {
    return isObject(value);
}

export function mouseEnterValue(
    valueDirective: VNodeDirective | null
): unknown {
    const value = valueDirective?.value;

    if (value === undefined) {
        return getOptions().defaultValues.noValueDirective.mouseenter;
    }

    if (!isSettingsLike(value)) {
        return value;
    }

    return value.mouseenter === undefined
        ? getOptions().defaultValues.hasValueDirective.mouseenter
        : value.mouseenter;
}

export function mouseLeaveValue(
    valueDirective: VNodeDirective | null
): unknown {
    const value = valueDirective?.value;

    if (value === undefined) {
        return getOptions().defaultValues.noValueDirective.mouseleave;
    }

    return !isSettingsLike(value) || value.mouseleave === undefined
        ? getOptions().defaultValues.hasValueDirective.mouseleave
        : value.mouseleave;
}