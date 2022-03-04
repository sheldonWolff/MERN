import { useParams } from 'react-router-dom';

const HelloColors = (props) => {
    const { word, fontColor, backgroundColor } = useParams();
    if (isNaN(word)) {
        return (
            <h2 style={{ color: fontColor, backgroundColor: backgroundColor }}>
                Word is: {word}
            </h2>
            );
    } else {
        return 'Not a word.'
    }
};
export default HelloColors;