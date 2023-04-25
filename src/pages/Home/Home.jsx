import { Link } from 'react-router-dom';
import css from './Home.module.css'

export const Home = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>
                Welcome page{' '}
                <span role="img" aria-label="Greeting icon">
                    <br />
                    <br />
                    😃
                </span>
            </h1>
            <div
                className={css.btnTweets}
            >
                <Link to="/tweets" style={{
                    color: '#FFF',
                    textDecoration: 'inherit',
                }}>Tweets</Link>
            </div>
        </div>
    );
}

export default Home;