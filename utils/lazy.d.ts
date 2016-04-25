declare module "utils/lazy" {
    /**
     * A function that evaluates the action only once.
     * @param action The action to be evaluated to get the result.
     * Returns the evaluated result.
     */
    export default function lazy<T>(action: () => T): () => T;

    /**
     * A function that executes the extend call immediately or delays
     * it if running in the context of a snapshot.
     * @param nativeName The name to be used for the native class
     * @param klass The JavaScript class implementation
     */
    export function lazyExtend(nativeName: string, klass: Object): void;
}