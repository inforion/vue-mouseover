import { VNode, VNodeDirective } from 'vue/types/vnode';

import { mouseoverValueName } from '../names';
import { VNodeWithContext } from '../types-internal/v-node-with-context';
import { mouseEnterValue, mouseLeaveValue } from './choose-value';
import setValue from './set-value';

function findValueDirective(vNode: VNode): VNodeDirective | null {
    return vNode.data?.directives
        ?.find((x) => x.name === mouseoverValueName) ?? null;
}

function updateContext(
    binding: VNodeDirective,
    vNode: VNodeWithContext,
    chooseValue: (valueDirective: VNodeDirective | null) => unknown
): void {
    const valueDirective = findValueDirective(vNode);
    const value = chooseValue(valueDirective);
    setValue(vNode.context.$data, binding.expression, value);
}

export function assignMouseEnterValue(
    binding: VNodeDirective,
    vNode: VNodeWithContext
): void {
    return updateContext(binding, vNode, mouseEnterValue);
}

export function assignMouseLeaveValue(
    binding: VNodeDirective,
    vNode: VNodeWithContext
): void {
    return updateContext(binding, vNode, mouseLeaveValue);
}