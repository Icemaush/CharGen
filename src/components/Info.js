import Label from './Label'

const Info = (props) => {
    return (
        <div className="info">
            <table>
                <tbody>
                <tr>
                    <td className="property"><Label text="Faction:"/></td>
                    <td className="value">{props.faction}</td>
                </tr>
                <tr>
                    <td className="property"><Label text="Race:"/></td>
                    <td className="value">{props.race}</td>
                </tr>
                <tr>
                    <td className="property"><Label text="Gender:"/></td>
                    <td className="value">{props.gender}</td>
                </tr>
                <tr>
                    <td className="property"><Label text="Class:"/></td>
                    <td className="value">{props.class}</td>
                </tr>
                <tr>
                    <td className="property"><Label text="Spec:"/></td>
                    <td className="value">{props.spec}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Info
