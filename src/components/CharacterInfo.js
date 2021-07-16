import Label from './Label'
import styled from 'styled-components'

const Table = styled.table`
    display: flex;
    width: 300px;
    border: 1px solid green;
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
        <Table>
            <tbody>
                <tr>
                    <TableProperty><Label text="Faction:"/></TableProperty>
                    <TableValue>{character.faction}</TableValue>
                </tr>
                <tr>
                    <TableProperty><Label text="Race:"/></TableProperty>
                    <TableValue>{character.race}</TableValue>
                </tr>
                <tr>
                    <TableProperty><Label text="Gender:"/></TableProperty>
                    <TableValue>{character.gender}</TableValue>
                </tr>
                <tr>
                    <TableProperty><Label text="Class:"/></TableProperty>
                    <TableValue>{character.class}</TableValue>
                </tr>
                <tr>
                    <TableProperty><Label text="Spec:"/></TableProperty>
                    <TableValue>{character.spec}</TableValue>
                </tr>
            </tbody>
        </Table>
    )
}

export default CharacterInfo
