export declare function isEvent(candidate: unknown): candidate is Event
export declare function isPlainObject(candidate: unknown): candidate is Record<string, unknown>
export declare function isInstanceOf(candidate: unknown, base: any): boolean
export declare function isPrimitive(
    candidate: unknown
): candidate is number | string | boolean | bigint | symbol | null | undefined
export declare function isError(candidate: unknown): candidate is Error
export declare function isErrorEvent(event: string | Error | Event): event is ErrorEvent
export declare function isErrorWithStack(candidate: unknown): candidate is Error
export declare function isBuiltin(candidate: unknown, className: string): boolean
export declare function isDOMException(candidate: unknown): boolean
export declare function isDOMError(candidate: unknown): boolean
