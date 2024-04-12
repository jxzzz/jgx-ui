interface X {
  label: string;
}

declare module 'jgx-ui' {
  /** 按钮  */
  export const Button: React.FC<any>;
  export const Input: React.FC<X>;
}
