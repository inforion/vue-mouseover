import { MouseoverValueSettings } from './mouseover-value-settings';

export interface MouseoverOptions {
    defaultValues?: {
        noValueDirective?: MouseoverValueSettings;

        hasValueDirective?: MouseoverValueSettings;
    };

    immediate?: boolean;
}