import React from "react";
import "../componentscss/Button.css";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    const variantClass = `button-${variant}`;
    const sizeClass = `button-${size}`;
    
    return (
      <Comp
        className={`button ${variantClass} ${sizeClass} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
