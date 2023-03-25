import { Forms } from '../../components/Form';
import './style.css';


export function PageGenerate() {

  return (
    <div className='conteiner-generate'>
      <h1
        className='title-generate'
      >
        QR Code Image Generator
      </h1>
      <Forms />
    </div>
  );
}


