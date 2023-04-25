import { TweetsCard } from 'components/TweetsCard/TweetsCard'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { setPage } from 'redux/pageSlice'
import css from "./Tweets.module.css"


const Tweets = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPage(1))
    })

    return (<div>
        <div
            style={{
                display: 'flex',
                marginTop: '50px',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 20,
                color: '#010101'
            }}
        >
            <div className={css.btnGoBack}>

                <Link to="/" style={{
                    color: '#FFF',
                    textDecoration: 'inherit',
                }}> Go back</Link>
            </div>
        </div>


        <TweetsCard />
    </div>
    );
}

export default Tweets;