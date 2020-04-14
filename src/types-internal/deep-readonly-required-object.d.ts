type DeepReadonlyRequired<T> =
    T extends (infer R)[] ? ReadonlyArray<DeepReadonlyRequired<R>> :
        T extends Function ? T :
            T extends object ? DeepReadonlyRequiredObject<T> :
                T;

export type DeepReadonlyRequiredObject<T> = {
    readonly [P in keyof T]-?: DeepReadonlyRequired<T[P]>;
};