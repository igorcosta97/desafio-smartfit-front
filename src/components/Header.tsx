import Logo from '../assets/images/svg/logo.svg';

export default function Header() {
  return (
    <div className='bg-black flex justify-center'>
        <img className="p-2" src={Logo} alt="Logo" height={150} width={150}/>
    </div>
  )
}