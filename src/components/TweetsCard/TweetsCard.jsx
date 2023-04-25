import { useFetchCardsQuery, useFetchCountQuery } from 'redux/cardsApi'
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { CardItem } from 'components/CardItem/CardItem'
import { getIsFollowingIDs, getFilter, getPage, getLimit } from "redux/selectors";
import { filters } from "redux/constants";
import { Filter } from 'components/Filter/Filter'
import { setPage } from 'redux/pageSlice'
import { LoadMore } from 'components/LoadMore/LoadMore'
import css from "./TweetsCard.module.css";

export const TweetsCard = () => {
    const page = useSelector(getPage);
    const limit = useSelector(getLimit);
    // eslint-disable-next-line
    const { data: data = [] } = useFetchCountQuery();
    const input = { page, limit }
    const { data: cards = [], isFetching } = useFetchCardsQuery(input);
    const IsFollowingIDs = useSelector(getIsFollowingIDs);
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if ((cards[cards.length - 1] !== users[users.length - 1])) {
            setUsers(users => [...users, ...cards]);
        }
        // eslint-disable-next-line
    }, [cards])

    const loadflagClick = () => {
        dispatch(setPage(page + 1))
    }


    const getVisibleCards = (cards, filter) => {
        switch (filter) {
            case filters.follow:
                return cards.filter(card => !IsFollowingIDs.includes(card.id));
            case filters.followingsShowAll:
                return cards.filter(card => IsFollowingIDs.includes(card.id));
            default:
                return cards;
        }
    };

    const filter = useSelector(getFilter);
    const visibleCards = getVisibleCards(users, filter);
    return (
        <div >
            <div className={css.btnDropDown}>
                <Filter />
            </div>
            <ul className={css.cardWrapper}>
                {isFetching ? <Oval
                    height="40"
                    width="40"
                    radius="9"
                    color="#000000"
                    ariaLabel="three-dots-loading"
                    visible={true}
                /> : visibleCards.map((card, index) => (
                    <li
                        key={index}>
                        <CardItem
                            card={card}
                        />
                    </li>

                ))}
            </ul>
            {!(visibleCards.length % limit)
                && (visibleCards.length < data.length)
                && (filter === "showAll")
                && <LoadMore onClick={loadflagClick} />}
        </div>
    );
}
