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
                xCoord: 92,
                yCoord: 78,
            },
            {
                name: "Monokuma",
                found: false,
                xCoord: 35,
                yCoord: 41,
            },
            {
                name: "Rei",
                found: false,
                xCoord: 61,
                yCoord: 49,
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
                xCoord: 90,
                yCoord: 22,
            },
            {
                name: "Meiko",
                found: false,
                xCoord: 54,
                yCoord: 51,
            },
            {
                name: "Shinya",
                found: false,
                xCoord: 40,
                yCoord: 48,
            }
        ]
    },
    2: {
        level: 3,
        name: "Hard",
        board: hardBoard,
        characters: [
            {
                name: "Faye",
                found: false,
                xCoord: 11,
                yCoord: 72,
            },
            {
                name: "Arita",
                found: false,
                xCoord: 52,
                yCoord: 65,
            },
            {
                name: "Roy",
                found: false,
                xCoord: 93,
                yCoord: 4,
            }
        ]
    }
}

export default levelData;