import React from 'react'
import { useEffect, UseEffect, useState } from 'react'
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
    
    const [leaderboardData, setLeaderboardData] = useState([])
    
    useEffect(()=>{
        setInHome(false)
        setInGame(false)
        setInLeaderboard(true)
    })
    

    let levelsArr = Object.keys(allLevelData).map((index) => {
        const number = parseInt(index)
        const level = allLevelData[number]
        return { name: level.name, image: level.board, number, index}
    })

    const Levels = () => {
        return levelsArr.map((i) => {
            return(
                <Card 
                    img={i.image}
                    alt={i.name}
                    clicked={()=>setLevel(i.number)}
                    key={i.index}
                />
            )
        })
    }

    return(
        <div className="leaderboard-container">
            <div className="leaderboard-levels-grid"> <Levels/> </div>
            <span className="level-name"></span>
            <LeaderboardTable/>
        </div>
    )
}

export default Leaderboard;