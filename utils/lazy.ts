require("globals/decorators");

export default function lazy<T>(action: () => T): () => T {
    let _value: T;
    return () => _value || (_value = action());
}

export function lazyExtend(nativeName: string, klass: Object): void {
    var action = () => global.__decorate([JavaProxy(nativeName)], klass);
    if (!global.__snapshot) {
        action();
    } else {
        global.__pendingJavaExtendCalls = global.__pendingJavaExtendCalls || [];
        global.__pendingJavaExtendCalls.push(action);
    }
}
