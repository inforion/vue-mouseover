import { Vue } from 'vue/types/vue';

import { MouseoverOptions } from '../types';
import { mouseoverName, mouseoverValueName } from './names';
import { setOptions } from './options/current-options';
import Mouseover from './v-mouseover';
import MouseoverValue from './v-mouseover-value';

export default function install(
    vue: typeof Vue,
    options?: MouseoverOptions
): void {
    setOptions(options);
    vue.directive(mouseoverValueName, MouseoverValue);
    vue.directive(mouseoverName, Mouseover);
}