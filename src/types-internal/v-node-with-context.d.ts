import { VNode } from 'vue/types/vnode';
import { Component } from 'vue/types/vue';

export interface VNodeWithContext extends VNode {
    context: Component;
}