import { DirectiveOptions } from 'vue/types/options';
import { VNode, VNodeDirective } from 'vue/types/vnode';

import { getOptions } from '../options/current-options';
import { VNodeDirectiveWithExpression } from '../types-internal/directive-with-expression';
import { VNodeWithContext } from '../types-internal/v-node-with-context';
import isMouseOver from '../utils/is-mouse-over';
import EventListenersPair from './event-listeners-pair';
import { forgetListeners, rememberListeners } from './event-listeners-storage';
import { assignMouseEnterValue, assignMouseLeaveValue } from './update-context';

function isContextDefined(vNode: VNode): vNode is VNodeWithContext {
    return vNode.context != null;
}

function isExpressionDefined(binding: VNodeDirective): binding is VNodeDirectiveWithExpression {
    return binding.expression != null;
}

function inserted(
    element: HTMLElement,
    binding: VNodeDirective,
    vNode: VNode
): void {
    if (!isContextDefined(vNode) || !isExpressionDefined(binding)) {
        return;
    }

    const onMouseEnter = (): void => assignMouseEnterValue(binding, vNode);
    const onMouseLeave = (): void => assignMouseLeaveValue(binding, vNode);

    rememberListeners(element, new EventListenersPair(onMouseEnter, onMouseLeave));

    element.addEventListener('mouseenter', onMouseEnter);
    element.addEventListener('mouseleave', onMouseLeave);

    if (!getOptions().immediate) {
        return;
    }

    if (isMouseOver(element)) {
        assignMouseEnterValue(binding, vNode);
    } else {
        assignMouseLeaveValue(binding, vNode);
    }
}

function unbind(element: HTMLElement): void {
    const pair = forgetListeners(element);

    if (pair == null) {
        return;
    }

    element.removeEventListener('mouseenter', pair.onMouseenter);
    element.removeEventListener('mouseleave', pair.onMouseleave);
}

export default {
    inserted,
    unbind
} as DirectiveOptions;