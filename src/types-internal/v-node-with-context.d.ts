import { VNode } from 'vue/types/vnode';
import { Vue } from 'vue/types/vue';

export interface VNodeWithContext extends VNode {
    context: Vue;
}