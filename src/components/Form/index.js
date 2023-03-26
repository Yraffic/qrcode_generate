import { yupResolver } from '@hookform/resolvers/yup';
import { toDataURL } from 'qrcode';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button } from '../Button';
import './style.css';

const validateForms = yup.object().shape({
    name: yup.string().required("required name"),
    linkedIn: yup.string().required('required linkedIn'),
    gitHub: yup.string().required('required gitHub'),
    description: yup.string().required('required description')
})

export const Forms = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validateForms)
    })
    const [qrcodeLink, setQrCodeLink] = useState('')

    const handleGenerate = (link_url) => {
        toDataURL(link_url, {
            width: 600,
            margin: 3
        }, function (err, url) {
            if (err) {
                return console.log(err)
            }
            return setQrCodeLink(url)

        })
    }

    const download = async (user) => {
        handleGenerate(`http://localhost:3000/${user}`);

        const img = new Image();
        img.src = qrcodeLink;
        img.width = '300px'
        img.height = '300px'

        img.onload = () => {
            const link = document.createElement('a');
            link.href = qrcodeLink;
            link.download = `${user}-qrcode.png`;

            link.appendChild(img);

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);
        }
    }

    const form = async (data) => {
        const user = data.name

        // gera o QR Code
        download(user)
    }




    return (
        <form onSubmit={handleSubmit(form)}>
            <div className='conteiner-input-component' >
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
            <div className='conteiner-input-component' >
                <div className="label-component">
                    <label htmlFor='Description' >
                        Description
                    </label>
                </div>
                <input
                    type='text'
                    id='Description'
                    name='description'
                    {...register('description')}
                    className='input-component'
                />
                <span
                    className='error-message'
                >
                    {errors.description?.message}
                </span>
            </div>
            <Button
                type='submit'
                width='30%'
            >
                Genereate Image
            </Button>
        </form>
    )
}