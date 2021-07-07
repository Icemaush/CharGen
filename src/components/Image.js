const Image = (props) => {
    return <img className="char-preview-image" id={props.type} src={props.url} alt={props.type} />
}

export default Image
