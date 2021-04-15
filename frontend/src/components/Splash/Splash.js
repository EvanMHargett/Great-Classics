import { Link } from 'react-router-dom';
import './Splash.css'

export default function Splash(){
    return (
        <div className="splash">
            <div className='main'>
                <h1 className="head">Great Classics</h1>
                <p className="splash-text">A site for reviewing classic books</p>
                <p>
                    <Link to='/books' className="pure-button splash-button">See all books</Link>
                </p>
                <div>Created by Evan Hargett <a href="https://github.com/EvanMHargett"><img src="/images/GitHub.png"></img></a><a href="https://www.linkedin.com/in/evan-hargett-47723b162/">Linkedin</a></div>
            </div>
            
        </div>
    )
}
