export declare const hasOwnProperty: (v: PropertyKey) => boolean
export declare const isArray: (arg: any) => arg is any[]
export declare const isUint8Array: (x: unknown) => x is Uint8Array
export declare const isFunction: (f: any) => f is (...args: any[]) => any
export declare const isObject: (x: unknown) => x is Record<string, any>
export declare const isEmptyObject: (x: unknown) => x is Record<string, any>
export declare const isUndefined: (x: unknown) => x is undefined
export declare const isString: (x: unknown) => x is string
export declare const isEmptyString: (x: unknown) => boolean
export declare const isNull: (x: unknown) => x is null
export declare const isNullish: (x: unknown) => x is null | undefined
export declare const isDate: (x: unknown) => x is Date
export declare const isNumber: (x: unknown) => x is number
export declare const isBoolean: (x: unknown) => x is boolean
export declare const isDocument: (x: unknown) => x is Document
export declare const isFormData: (x: unknown) => x is FormData
export declare const isFile: (x: unknown) => x is File
