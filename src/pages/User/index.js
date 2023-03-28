
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import './style.css'

export const User = () => {
    const [user, setUser] = useState([])
    const [search, setSearch] = useState(false)
    const { name, id } = useParams()

    useEffect(() => {
        const gertUse = async () => {
            try {
                const user = await api(`${name}/${id}`)

                setUser(user.data)
                setSearch(true)
                return
            } catch (error) {
                console.log(error)
            }
        }

        gertUse()
    }, [search, id, name])

    return (
        <div className='conteiner-user'>
            <header>
                <h4>Hello, my name is {user.name}</h4>
            </header>
            <section>
                <h1 className='title-large'>
                    My history
                </h1>
                <p>
                    {user.description}
                </p>
                <div className='user-links'>
                    <Link
                        className='link'
                        to={user.github}
                    >
                        GitHub
                    </Link>
                    <Link
                        className='link'
                        to={user.linkedin}
                    >
                        LinkedIn
                    </Link>
                </div>
            </section>
        </div>
    )
}