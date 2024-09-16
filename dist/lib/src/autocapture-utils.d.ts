import { AutocaptureConfig, Properties } from './types'
export declare function splitClassString(s: string): string[]
export declare function getClassNames(el: Element): string[]
export declare function makeSafeText(s: string | null | undefined): string | null
export declare function getSafeText(el: Element): string
export declare function isElementNode(el: Node | Element | undefined | null): el is Element
export declare function isTag(el: Element | undefined | null, tag: string): el is HTMLElement
export declare function isTextNode(el: Element | undefined | null): el is HTMLElement
export declare function isDocumentFragment(el: Element | ParentNode | undefined | null): el is DocumentFragment
export declare const autocaptureCompatibleElements: string[]
export declare function getParentElement(curEl: Element): Element | false
export declare function shouldCaptureDomEvent(
    el: Element,
    event: Event,
    autocaptureConfig?: AutocaptureConfig | undefined,
    captureOnAnyElement?: boolean,
    allowedEventTypes?: string[]
): boolean
export declare function shouldCaptureElement(el: Element): boolean
export declare function isSensitiveElement(el: Element): boolean
export declare function shouldCaptureValue(value: string, anchorRegexes?: boolean): boolean
export declare function isAngularStyleAttr(attributeName: string): boolean
export declare function getDirectAndNestedSpanText(target: Element): string
export declare function getNestedSpanText(target: Element): string
export declare function getElementsChainString(elements: Properties[]): string
