const Icon = (props) => {
    return <img className="char-img" id={props.type} src={props.url} alt={props.type} width="64" height="64"/>
}

export default Icon
