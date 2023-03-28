
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import './style.css'

export const User = ()=>{
    const [data, setData]= useState([])
    const [search, setSearch] = useState(false)
    const {name, id} = useParams()

    const gertUse = async()=>{
        try {
            const user = await api(`${name}/${id}`)

            setData(user.data)
            setSearch(true)
            return
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        gertUse()
        console.log(data)
    },[search])

    return(
        <div className='conteiner-user'>
            <header>
                <h4>Hello, my name is {data.name}</h4>
            </header>
            <section>
                <h1 className='title-large'>
                    My history
                </h1>
                <p>
                    {data.description}
                </p>
                <div className='user-links'>
                    <Link 
                    className='link'
                    to={data.github}
                    >
                        GitHub
                    </Link>
                    <Link 
                    className='link'
                    to={data.linkedin}
                    >
                        LinkedIn
                    </Link>
                </div>
            </section>
        </div>
    )
}