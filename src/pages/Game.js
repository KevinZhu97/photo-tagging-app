import { useEffect, useState, } from "react";
import allLevelData from '../allLevelData'
import CharacterDropdown from "../components/CharacterDropdown";
import OutsideClickHandler from 'react-outside-click-handler';
import Modal from '../components/Modal'
import { firestore } from '../firebase'

const Game = ({
    setInGame,
    setInHome,
    setInLeaderboard,
    level,
    levelData,
    characters,
    setCharacters,
    updateUsername,
    username,
    setLevel,
}) => {

    console.log(username)
    const [image, setImage] = useState('')
    const [coords, setCoords] = useState();
    const [clickLocation, setClickLocation] = useState({left: "0%", top: "0%"})
    const [showDropdown, setShowDropdown] = useState(false)
    const [gameover, setGameover] = useState(false)
    const [elapsedSeconds, setElapsedSeconds] = useState()
    const [startTime, setStartTime] = useState(Date.now());    
    const [gameId, setGameId] = useState(null);


    console.log(startTime)

    const isFound = (character) => {
        if (character.found === false) {
            return false;
        } else {
            return true;
        }
    }

    useEffect(()=>{
        setGameover(characters.every(isFound))
    }, [characters])

    useEffect(()=>{
        let endTime = Date.now()
        let score = (endTime - startTime) / 1000
        console.log(score)
        setElapsedSeconds(score)
        let date = new Date().toString().split(" ").splice(1, 3).join(" ");
        firestore.collection("games").add({
            startTime: startTime,
            endTime: endTime,
            level: Number(level) + 1,
            characters: characters,
            elapsedSeconds: score,
            date: date,
    
        })
        .then((docRef) => {
            setGameId(docRef.id);
            firestore
                .collection('games')
                .doc(docRef.id)
                .onSnapshot((doc)=>{
                    const data = doc.data();
                    setElapsedSeconds(data.elapsedSeconds)
                })
        })
    }, [gameover])

    const submitScore = async () => {
        const highscoreRef = await firestore.collection("games").doc(gameId).get();
        const highscoreData = highscoreRef.data();
        const newHighscore = {
            gameId,
            level: highscoreData.level,
            time: highscoreData.elapsedSeconds,
            date: highscoreData.date,
            name: username,
        }
        firestore.collection("highscores").add(newHighscore)
        setLevel(highscoreData.level)
    }

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

    const isCoordWithinTwoDegrees = (coord1, coord2) => {
        return (
          coord1 === coord2 ||
          coord1 + 1 === coord2 ||
          coord1 + 2 === coord2 ||
          coord1 - 1 === coord2 ||
          coord1 - 2 === coord2
        );
      };

    const dropdownClick = (character) => {

        const gameSelection = { coords, character, level };
        // add gameSelection to firestore

        const selectedCharacter = characters.find((char) => {
            return char.name === character;
        })
        const { xCoord, yCoord } = selectedCharacter;
        const isCharacterAtCoords =
            isCoordWithinTwoDegrees(xCoord, coords.xCoord) &&
            isCoordWithinTwoDegrees(yCoord, coords.yCoord);
        if (isCharacterAtCoords) {
            const updatedCharacters = characters.map((char) =>
                char.name === character ? { ...char, found: true } : char
        );
        setCharacters(updatedCharacters);
        }

        hideDropdown();
    }

    const hideDropdown = () => setShowDropdown(false)

    const getLocationImageClick = (e) => {
        const xCoord = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100)
        const yCoord = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100)
        const newClickCoords = { xCoord, yCoord }
        return newClickCoords
    }

    const updateClickLocation = (coords) => {
        const { xCoord, yCoord } = coords;
        const updatedCoords = { left: xCoord + "%", top: yCoord + "%"}
        setClickLocation(updatedCoords)
        if (showDropdown === true) {
            setShowDropdown(false)
        } else {
            setShowDropdown(true);
        }
    }

    const imageClick = (e) => {
        const coords = getLocationImageClick(e)
        setCoords(coords);
        updateClickLocation(coords)
    }

    return(
        <div className="board-display-container">
            <OutsideClickHandler onOutsideClick={hideDropdown}>
                <img 
                    className="board-display" 
                    src={image} 
                    alt='Game Level'
                    onClick={imageClick}
                />
                <CharacterDropdown
                    show={showDropdown}
                    characters={characters}
                    clickLocation={clickLocation}
                    clicked={dropdownClick}
                />
                <Modal
                    showModal={gameover}
                    seconds={elapsedSeconds}
                    submitScore={submitScore}
                    username={username}
                    updateUsername={updateUsername}
                />
            </OutsideClickHandler>
        </div>
    )
}


export default Game;