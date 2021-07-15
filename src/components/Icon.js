const Icon = (props) => {
    return <img className="char-img" id={props.type} src={props.url} alt={props.type} width={props.width} height={props.height}/>
}

export default Icon
