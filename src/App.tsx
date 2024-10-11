import './styles/global.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <div className='h-screen flex flex-col bg-black'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
   
  )
}
