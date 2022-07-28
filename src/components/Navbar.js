import Character from './Characters';
import { Link } from 'react-router-dom';

//where do we pull characters from
const Navbar = ({
    inGame, 
    inHome, 
    inLeaderboard, 
    characters
}) => {

    let gameCharacters = characters.map((character) => {
        console.log(characters)
        return (
            <Character  
                name={character.name} 
                key={character.name}
            />
        )
    })

    if (inHome === true) {
        return(
            <div className="nav">
                <h2 className="nav-button-1 game-title"> Where's Senpai? </h2>
                <Link to='/leaderboard'> <p className="nav-button-2"> Leaderboard </p> </Link>
            </div>
        )
    } else if ( inGame === true) {
        return (
            <div className="nav">
                <Link to='/'> <p className="nav-button-1"> Home </p> </Link>
                <div className="nav-char-container"> { gameCharacters } </div>
                <Link to='/leaderboard' className="nav-button-2"> <p className="nav-button-2"> Leaderboard </p> </Link>
            </div>
        )
    } else if ( inLeaderboard === true) {
        return (
            <div className="nav">
                <Link to='/'> <p className="nav-button-1"> Home </p> </Link>
            </div>
        )
    }
}

//set all nav container into the same class

export default Navbar;