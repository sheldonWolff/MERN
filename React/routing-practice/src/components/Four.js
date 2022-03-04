import { useParams } from 'react-router-dom';

const Four = (props) => {
    const { number } = useParams();
    let type = 'number'
    if (isNaN(number)) {
        type = 'word'
    }
    return (
        <div>
            <h2>The {type} is: { number }</h2>
        </div>
    )
}

export default Four;