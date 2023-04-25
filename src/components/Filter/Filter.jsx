import React, { useState, useEffect } from 'react';

import { getFilter } from "redux/selectors";
import { filters } from "redux/constants";
import { setFilter } from 'redux/filterSlice';
import { useSelector, useDispatch } from "react-redux";
import { ButtonDrop } from "components/ButtonDrop/ButtonDrop";
import { Dropdown } from 'components/Dropdown/Dropdown'
import css from "./Filter.module.css";

export const Filter = () => {
    const [showDrop, setShowDrop] = useState(false)
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const handleFilterChange = (e) => {
        dispatch(setFilter(e))
        setShowDrop(false);
    };

    useEffect(() => {
        let handler = (e) => {
            if (e.target.className === "") setShowDrop(false);
        }
        document.addEventListener("mousedown", handler)
    }, [showDrop])

    const onDropDownClick = () => {
        setShowDrop(prevState => !prevState);
    };
    return (
        <div
            className={css.filterWrapper}
        >
            <h2>
                Filter by followings
            </h2>

            <Dropdown
                title="title"
                onClick={onDropDownClick}
                drop={showDrop}

            >
                <ButtonDrop
                    selected={filter === filters.showAll}
                    onClick={() => handleFilterChange(filters.showAll)}
                >
                    showAll
                </ButtonDrop>
                <br>
                </br>
                <ButtonDrop
                    selected={filter === filters.follow}
                    onClick={() => handleFilterChange(filters.follow)}
                >
                    follow
                </ButtonDrop>
                <br>
                </br>
                <ButtonDrop
                    selected={filter === filters.followingsShowAll}
                    onClick={() => handleFilterChange(filters.followingsShowAll)}
                >
                    followingsShowAll
                </ButtonDrop>
            </Dropdown>
        </div >
    );
};