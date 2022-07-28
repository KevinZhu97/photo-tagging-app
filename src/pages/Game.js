import { useEffect, useState } from "react";
import allLevelData from '../allLevelData'


const Game = ({
    setInGame,
    setInHome,
    setInLeaderboard,
    level,
    levelData,
    characters,
    setCharacters,

}) => {

    const [image, setImage] = useState('')


    useEffect(()=>{
        setInHome(false);
        setInLeaderboard(false);
        setInGame(true);
    })

    useEffect(() => {
        let loadedCharacters = allLevelData[level].characters;
        setImage(allLevelData[level].board)
        setCharacters(loadedCharacters)

    }, [level, levelData, setCharacters])

    return(
        <div className="board-display-container">
            <img className="board-display" src={image} alt='Game Level'></img>
        </div>
    )
}

export default Game;