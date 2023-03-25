
import { Link, NavLink } from 'react-router-dom'
import './style.css'

export const User = ()=>{
    return(
        <div className='conteiner-user'>
            <header>
                <h4>Hello, my name is John</h4>
            </header>
            <section>
                <h1 className='title-large'>
                    My history
                </h1>
                <p>
                    lorem ipsum dolor  sit amet, consectetur
                </p>
                <div className='user-links'>
                    <Link 
                    className='link'
                    to='https://www.google.com'
                    >
                        GitHub
                    </Link>
                    <Link 
                    className='link'
                    to='https://www.google.com'
                    >
                        LinkedIn
                    </Link>
                </div>
            </section>
        </div>
    )
}