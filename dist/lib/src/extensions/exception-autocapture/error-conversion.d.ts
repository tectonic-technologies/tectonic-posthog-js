import { StackFrame } from './stack-trace'
import { ErrorEventArgs, ErrorProperties } from '../../types'
export declare function parseStackFrames(
    ex: Error & {
        framesToPop?: number
        stacktrace?: string
    }
): StackFrame[]
export declare function errorToProperties([event, source, lineno, colno, error]: ErrorEventArgs): ErrorProperties
export declare function unhandledRejectionToProperties([ev]: [ev: PromiseRejectionEvent]): ErrorProperties
