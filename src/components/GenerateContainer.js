import WowCharacterCard from './WowCharacterCard'

const GenerateWindow = ({characters}) => {
    return (
        <div>
            {characters.map(character => 
                <WowCharacterCard character={character} />
            )}
        </div>
    )
}

export default GenerateWindow
