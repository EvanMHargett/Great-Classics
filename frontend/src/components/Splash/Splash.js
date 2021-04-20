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
                <div className="about"> <span className="name"><p>Created By:</p><p>Evan Hargett</p></span> <a href="https://github.com/EvanMHargett"><img className="gh" src="/images/GitHub.png"></img></a><a href="https://www.linkedin.com/in/evan-hargett-47723b162/"><img className="li" src="/images/Linkedin.png"></img></a></div>
            </div>
            
        </div>
    )
}
