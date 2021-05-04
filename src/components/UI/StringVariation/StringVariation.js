import CharChanging from './CharChanging/CharChanging';

const stringVariation = props => <span>{props.children.split('').map((char, i) => <CharChanging posInQueue={i} key={i}>{char}</CharChanging>)}</span>;

export default stringVariation;