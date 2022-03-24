import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


const Display = (props) => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                console.log(res.data)
                setPlayers(res.data)
            })
    }, [])
    const removeFromDom = id => {
        setPlayers(players.filter(player => player._id !== id));
    }

    return (
        <div>
            <Link to={'/add/player'}>Add A New Player!</Link>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                        <Link to={`/player/${player._id}`}> {player.name} </Link>
                                    </td>
                                    <td>
                                        {player.preferredPosition}
                                    </td>
                                    <td>
                                        <DeleteButton id={player._id} successCallback={()=>removeFromDom(player._id)}/>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    
                </tbody>
                
            </table>
        </div>
    )
}


export default Display;