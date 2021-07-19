const GenerateWindow = () => {
    return (
        <div>
            {characters.map(character => 
                <WowCharacterCard character={character} />
            )}
        </div>
    )
}

export default GenerateWindow
