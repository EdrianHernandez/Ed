declare module "react" {
  export type CSSProperties = Record<string, string | number | undefined>;
  export type ReactNode = any;
  export function useEffect(effect: () => void | (() => void), deps?: unknown[]): void;
}

declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}