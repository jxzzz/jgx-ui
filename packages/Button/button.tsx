const Button = (props: any) => {
  const {
    // action,
    children,
    disabled,
    className,
    ...otherProps
  } = props;

  const _props: any = {
    disabled: disabled,
    className: `font-bold text-primary focus:outline-none disabled:opacity-50 ${
      className ? className : ''
    }`,
    ...otherProps,
  };
  return <button {..._props}>{children}</button>;
};

export default Button;
