declare const win: (Window & typeof globalThis) | undefined
export declare const ArrayProto: any[]
export declare const nativeForEach: (
    callbackfn: (value: any, index: number, array: any[]) => void,
    thisArg?: any
) => void
export declare const nativeIndexOf: (searchElement: any, fromIndex?: number) => number
export declare const navigator: Navigator | undefined
export declare const document: Document | undefined
export declare const location: Location | undefined
export declare const fetch: typeof globalThis.fetch | undefined
export declare const XMLHttpRequest:
    | {
          new (): XMLHttpRequest
          prototype: XMLHttpRequest
          readonly UNSENT: 0
          readonly OPENED: 1
          readonly HEADERS_RECEIVED: 2
          readonly LOADING: 3
          readonly DONE: 4
      }
    | undefined
export declare const AbortController:
    | {
          new (): AbortController
          prototype: AbortController
      }
    | undefined
export declare const userAgent: string | undefined
export declare const assignableWindow: Window & typeof globalThis & Record<string, any>
export { win as window }
