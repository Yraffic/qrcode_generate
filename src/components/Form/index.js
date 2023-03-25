import { Button } from '../Button'
import './style.css'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {toDataURL} from 'qrcode'
import { useState } from 'react';
import QRCode from 'react-qr-code';

const validateForms =  yup.object().shape({
    name: yup.string().required("required name"),
    linkedIn:yup.string().required('required linkedIn'),
    gitHub: yup.string().required('required gitHub')  
})

export const Forms = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validateForms)
    })
    const elementQrCode = false
    const [nameQrCode, setNameQrCode] = useState('')
    const [qrCode, setQrCode] = useState('')
    const [qrcodeLink, setQrCodeLink] = useState('')
    
    const handleGenerate = (link_url)=>{
        toDataURL(link_url,{
            width: 600,
            margin: 3
        }, function(err, url){
            setQrCodeLink(`http://localhost:3000/${url}`)
        })
    }
    const form = (data)=>{
        setQrCode(`http://localhost:3000/${data.name}`)
        handleGenerate(data.name)
        setNameQrCode(data.name)
    }

    return (
        <form onSubmit={handleSubmit(form)}>
            <div className='conteiner-input-component' >
                {elementQrCode && <QRCode value={qrCode} />}
                <div className="label-component">
                    <label htmlFor='name' >
                        name
                    </label>
                </div>
                <input
                    type='text'
                    id='name'
                    name='name'
                    {...register('name')}
                    className='input-component'
                />
                <span className='error-message'>{errors.name?.message}</span>
            </div>
            <div className='conteiner-input-component' >
                <div className="label-component">
                    <label htmlFor='linkedIn' >
                        linkedIn URL
                    </label>
                </div>
                <input
                    type='text'
                    id='linkedIn'
                    name='linkedIn'
                    {...register('linkedIn')}
                    className='input-component'
                />
                <span 
                className='error-message'
                >
                    {errors.linkedIn?.message}
                </span>
            </div>
            <div className='conteiner-input-component' >
                <div className="label-component">
                    <label htmlFor='gitHub' >
                        gitHub URL
                    </label>
                </div>
                <input
                    type='text'
                    id='gitHub'
                    name='gitHub'
                    {...register('gitHub')}
                    className='input-component'
                />
                <span 
                className='error-message'
                >
                    {errors.gitHub?.message}
                </span>
            </div>
            <Button
                type='submit'
                width='30%'
            >
               <a 
               href={qrcodeLink}
               download={`${nameQrCode}-qrcode.png`}
               > Gerenate Image</a>
            </Button>
        </form>
    )
}