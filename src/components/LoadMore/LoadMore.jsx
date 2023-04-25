import React from 'react';
import css from 'components/LoadMore/LoadMore.module.css';

export const LoadMore = ({ onClick }) => {
    return <div
        className={css.loadMoreWrapper}
    >
        <button type="button"
            name="loadButton"
            onClick={onClick}
            className={css.btnLoadMore}
        >
            Load More
        </button>
    </div>
}