import Character from './Characters'

//where do we pull characters from
const Navbar = ({inGame, inHome, inLeaderboard, characters}) => {

    let gameCharacters = characters.map((character) => {
        return (
            <Character
                name={character} 
                key={character}
            />
        )
    })

    if (inHome === true) {
        return(
            <div className="nav">
                <h2 className="nav-button-1 game-title"> Where's Senpai? </h2>
                <p className="nav-button-2"> Leaderboard </p>
            </div>
        )
    } else if ( inGame === true) {
        return (
            <div className="nav">
                <p className="nav-button-1"> Home </p>
                <div className="nav-char-container"> { gameCharacters } </div>
                <p className="nav-button-2"> Leaderboard </p>
            </div>
        )
    } else if ( inLeaderboard === true) {
        return (
            <div className="nav">
                <p className="nav-button-1"> Home </p>
            </div>
        )
    }
}

//set all nav container into the same class

export default Navbar;