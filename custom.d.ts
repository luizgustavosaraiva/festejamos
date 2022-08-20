import React from 'react';

declare module '*.svg' {
  export const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

export declare type IconType = (props: IconBaseProps) => JSX.Element;

export declare type SVGIconType = (
  props: React.FC<React.SVGProps<SVGSVGElement>>
) => JSX.Element;
