import Characters from './Characters'


const Navbar = ({inGame, inHome, inLeaderboard, characters}) => {

    let gameCharacter = characters.map((character) => {
        return (
            <Characters 
                name={character.name} 
            />
        )
    })

    if (inHome === true) {
        return(
            <div className="navbar-home">
                <h2 className="nav-button-1 game-title"> Where's Senpai? </h2>
                <p className="nav-button-2"> Leaderboard </p>
            </div>
        )
    } else if ( inGame === true) {
        return (
            <div className="navbar-game">
                <p className="nav-button-1"> Home </p>
                {/* <Characters/> */}
                <p className="nav-button-2"> Leaderboard </p>
            </div>
        )
    } else if ( inLeaderboard === true) {
        return (
            <div className="navbar-leaderboard">
                <p className="nav-button-1"> Home </p>
            </div>
        )
    }
}

export default Navbar;