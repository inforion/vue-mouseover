import { VNodeDirective } from 'vue/types/vnode';

export interface VNodeDirectiveWithExpression extends VNodeDirective {
    expression: string;
}