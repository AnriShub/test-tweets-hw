import clsx from "clsx";
import css from "./ButtonDrop.module.css";

export const ButtonDrop = ({
    selected = false,
    type = "button",
    children,
    ...otherProps
}) => {
    return (
        <button
            className={clsx(css.btn, {
                [css.isSelected]: selected
            })}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};