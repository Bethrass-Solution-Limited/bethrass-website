interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  const combinedClassName = `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className || ""}`.trim();

  return (
    <Component
      className={combinedClassName}
      {...props}
    >
      {children}
    </Component>
  );
}
