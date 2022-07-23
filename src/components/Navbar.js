import Characters from './Characters'


const Navbar = ({inGame, inHome, inLeaderboard, characters}) => {

    let gameCharacters = characters.map((character) => {
        return (
            <Characters 
                name={character.name} 
            />
        )
    })

    if (inHome === true) {
        return(
            <div className="nav-home">
                <h2 className="nav-button-1 game-title"> Where's Senpai? </h2>
                <p className="nav-button-2"> Leaderboard </p>
            </div>
        )
    } else if ( inGame === true) {
        return (
            <div className="nav-in-game">
                <p className="nav-button-1"> Home </p>
                <div className="nav-char-container">{gameCharacters}</div>
                <p className="nav-button-2"> Leaderboard </p>
            </div>
        )
    } else if ( inLeaderboard === true) {
        return (
            <div className="nav-in-leaderboard">
                <p className="nav-button-1"> Home </p>
            </div>
        )
    }
}

export default Navbar;