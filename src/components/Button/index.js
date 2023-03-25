import './style.css'

export const Button = ({type,children, width,...props}) => {
    return (
        <button
            style={{width:`${width}`}}
            type={type}
            className='btn'
            onClick={props.onClick}
        >
            {children}
        </button>
    )
}