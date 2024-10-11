import Logo from '../assets/images/svg/logo.svg';

export default function Footer() {
    return (
        <div className='bg-darkGrey flex flex-col justify-center items-center p-8'>
            <img src={Logo} alt="Logo" height={100} width={100}/>
            <p className='font-gothanBook text-lightText text-sm '>Todos os direitos reservados - 2024</p>
        </div>
    )
  }