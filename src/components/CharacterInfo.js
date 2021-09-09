import styled from 'styled-components'
import CharacterIcons from "./CharacterIcons";

const CharacterInfoContainer = styled.div`
    display: flex;
    height: fit-content;
`;

const Table = styled.table`
    width: 300px;
    /* border: 1px solid green; */
    border-collapse: collapse;
    margin-right: 10px;
`;

const TableProperty = styled.td`
    padding: 20px;
    text-align: right;
`;

const TableValue = styled.td`
    text-align: center;
    width: 170px;
`;

const CharacterInfo = ({character}) => {
    return (
        <CharacterInfoContainer>       
            <Table>
                <tbody>
                    <tr>
                        <TableProperty>Faction:</TableProperty>
                        <TableValue>{character.faction}</TableValue>
                    </tr>
                    <tr>
                        <TableProperty>Race:</TableProperty>
                        <TableValue>{character.race}</TableValue>
                    </tr>
                    <tr>
                        <TableProperty>Gender:</TableProperty>
                        <TableValue>{character.gender}</TableValue>
                    </tr>
                    <tr>
                        <TableProperty>Class:</TableProperty>
                        <TableValue>{character.class}</TableValue>
                    </tr>
                    <tr>
                        <TableProperty>Spec:</TableProperty>
                        <TableValue>{character.spec}</TableValue>
                    </tr>
                </tbody>
            </Table>
            <CharacterIcons character={character} />
        </CharacterInfoContainer>
    )
}

export default CharacterInfo
