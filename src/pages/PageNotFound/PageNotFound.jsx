import { Link } from 'react-router-dom';

import css from './PageNotFound.module.css';

export const PageNotFound = () => {
    return (

        <div className={css.container}>
            <h1 className={css.title}>
                Page not found!{' '}
                <span role="img" aria-label="Greeting icon">
                    <br />
                    <br />
                    😞
                </span>
            </h1>
            <div
                className={css.btnPageNotFound}
            >
                <Link to="/tweets" style={{
                    // textAlign: 'center',
                    color: '#FFF',
                    textDecoration: 'inherit',
                }}>Go to home</Link>
            </div>
            {/* <TweetsCard /> */}
        </div>


    );
};

export default PageNotFound;