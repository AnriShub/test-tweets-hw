import { getIsFollowingIDs } from "redux/selectors"
import { useDispatch, useSelector } from 'react-redux';
import { addFollowing, deleteFollowing } from 'redux/cardsSlice'
import css from './CardItem.module.css'
import GoItLogo from 'images/go_it_logo.png'; 

export const CardItem = ({ card }) => {
    const { id } = card;
    const dispatch = useDispatch();
    const IsFollowingIDs = useSelector(getIsFollowingIDs);

    const handleClick = (id) => {
        if (IsFollowingIDs.includes(id)) {
            dispatch(deleteFollowing(id));
        } else {
            dispatch(addFollowing(id));
        }
    };

    const isFollowing = IsFollowingIDs.includes(id);

    return (
        <div
            className={css.container}>

            <div className={css.cardHeader}>
                <img className={css.goItLogo} src={GoItLogo} alt="goItLogo" />
            </div>

            <div className={css.avatarWrapper}>
                <div className={css.avatarRing}>
                    <img className={css.avatarIcon} src={card.avatar} alt="User avatar" />
                </div>
            </div>

            <div className={css.infoWrapper}>
                <p className={css.infoRecord}>
                    {card.tweets} TWEETS
                </p>
                <p className={css.infoRecord}>
                    {isFollowing ? (card.followers + 1).toLocaleString("en-US") : card.followers.toLocaleString("en-US")} FOLLOWERS

                </p>
                <button
                    className={isFollowing ? css.btnFollowersOff : css.btnFollowersOn}
                    onClick={() => {
                        handleClick(card.id)
                    }}
                >
                    {!isFollowing ? "FOLLOW" : "FOLLOWING"}
                </button>
            </div>
        </div>
    );
}

export default CardItem;