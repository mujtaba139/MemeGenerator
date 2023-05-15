import trollface from './images/trollface.png'
export default function Header(){
    return(
        <header className='header'>
        <img className='header-image' src={trollface} alt='someimage' />
        <h2 className='header-title'>Meme Generator</h2>
        
        </header>
    )
}