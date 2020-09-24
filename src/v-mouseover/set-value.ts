import toPath from 'lodash.topath';
import Vue from 'vue';

import { mouseoverName } from '../names';
import extractLastElement from '../utils/extract-last-element';
import getOrKeep from '../utils/get-or-keep';
import isArray from '../utils/is-array';
import { isObjectNonStrict } from '../utils/is-object';

export default function setValue(
    object: Record<string, unknown>,
    path: string,
    value: unknown
): void {
    const pathArray = toPath(path);

    if (pathArray.length === 0) {
        throw new Error(`The path provided to v-${mouseoverName} directive is empty`);
    }

    const {
        last: property,
        rest: targetPath
    } = extractLastElement(pathArray);

    const target = getOrKeep(object, targetPath);

    if (isObjectNonStrict(target) && property in target) {
        target[property] = value;
    } else if (isArray(target)) {
        Vue.set(target, property, value);
    } else {
        throw new Error(
            `The path [${path}] doesn't exist, please create it in Vue component's data object before using v-${mouseoverName} directive`
        );
    }
}