import css from "./Dropdown.module.css";

import { getFilter } from "redux/selectors";
import { useSelector } from "react-redux";

export const Dropdown = ({ drop, onClick, children }) => {
    const filter = useSelector(getFilter);

    return (
        <div>
            <div className={css.btn}
                name={filter}
                onClick={onClick}
                component="span"
            >
                <div
                    className={css.dropList_title}
                >
                    {filter}
                </div>

            </div>
            {drop && <div
                className={css.dropList}
            >
                {children}
            </div>}

        </div >
    );
}

export default Dropdown;