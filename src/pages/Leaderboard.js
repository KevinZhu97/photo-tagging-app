import React from 'react'
import { useEffect } from 'react'
import LeaderboardTable from '../components/LeaderboardTable'
import allLevelData from '../allLevelData'
import Card from '../components/Card'

const Leaderboard = ({
    level,
    setLevel,
    setInHome,
    setInGame,
    setInLeaderboard,
}) => {
        
    useEffect(()=>{
        setInHome(false)
        setInGame(false)
        setInLeaderboard(true)
    })


    let levelsArr = Object.keys(allLevelData).map((index) => {
        const number = parseInt(index)
        const level = allLevelData[number]
        return { name: level.name, image: level.board, stage: level.level, number, index}
    })

    const Levels = () => {
        return levelsArr.map((i) => {
            return(
                <Card 
                    img={i.image}
                    alt={i.name}
                    clicked={()=> setLevel(i.stage)}
                    key={i.index}
                />
            )
        })
    }

    return(
        <div className="leaderboard-container">
            <div className="leaderboard-levels-grid"> 
                <Levels/> 
            </div>
            <span className="level-name"></span>
            <LeaderboardTable level={level}/>
        </div>
    )
}

export default Leaderboard;