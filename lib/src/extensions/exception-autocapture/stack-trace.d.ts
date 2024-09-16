export interface StackFrame {
    filename?: string
    function?: string
    module?: string
    platform?: string
    lineno?: number
    colno?: number
    abs_path?: string
    context_line?: string
    pre_context?: string[]
    post_context?: string[]
    in_app?: boolean
    instruction_addr?: string
    addr_mode?: string
    vars?: {
        [key: string]: any
    }
    debug_id?: string
}
export type StackParser = (stack: string, skipFirst?: number) => StackFrame[]
export type StackLineParserFn = (line: string) => StackFrame | undefined
export type StackLineParser = [number, StackLineParserFn]
export declare const chromeStackLineParser: StackLineParser
export declare const geckoStackLineParser: StackLineParser
export declare const winjsStackLineParser: StackLineParser
export declare const opera10StackLineParser: StackLineParser
export declare const opera11StackLineParser: StackLineParser
export declare const defaultStackLineParsers: StackLineParser[]
export declare function reverse(stack: ReadonlyArray<StackFrame>): StackFrame[]
export declare function createStackParser(...parsers: StackLineParser[]): StackParser
export declare const defaultStackParser: StackParser
