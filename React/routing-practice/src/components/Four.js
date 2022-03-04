import { useParams } from 'react-router-dom';

const Four = (props) => {
    
    const { number } = useParams();
    return (
        <div>
            {
                isNaN(number)?
                <h2>The word is: { number }</h2>
                : <h2>The number is: { number }</h2>
            }
        </div>
    )
}

export default Four;