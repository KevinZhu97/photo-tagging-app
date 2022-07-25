import easyBoard from './assets/boards/easy-board.png'
import normalBoard from './assets/boards/normal-board.png'
import hardBoard from './assets/boards/hard-board.jpg'

const levelData = {
    0: {
        level: 1,
        name: "Easy",
        board: easyBoard,
        characters: [
            {
                name: "Akame",
                found: false,
                xCoord: 10,
                yCoord: 10,
            },
            {
                name: "Monokuma",
                found: false,
                xCoord: 10,
                yCoord: 10,
            },
            {
                name: "Rei",
                found: false,
                xCoord: 10,
                yCoord: 10,
            }
        ]
    },
    1: {
        level: 2,
        name: "Normal", 
        board: normalBoard,
        characters: [
            {
                name: "Mikasa",
                found: false,
                xCoord: 10,
                yCoord: 10,
            },
            {
                name: "Faye",
                found: false,
                xCoord: 10,
                yCoord: 10,
            },
            {
                name: "Shinya",
                found: false,
                xCoord: 10,
                yCoord: 10,
            }
        ]
    },
    2: {
        level: 3,
        name: "Hard",
        board: hardBoard,
        characters: [
            {
                name: "Meiko",
                found: false,
                xCoord: 10,
                yCoord: 10,
            },
            {
                name: "Arita",
                found: false,
                xCoord: 10,
                yCoord: 10,
            },
            {
                name: "Roy",
                found: false,
                xCoord: 10,
                yCoord: 10,
            }
        ]
    }
}

export default levelData;