const Header = ({ title, subtitle }) => {
    return (
        <header>
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
        </header>
    )
}

// Default properties
Header.defaultProps = {
    title:"header title",
    subtitle: "header subtitle"
}

// CSS in JS
// const headingStyle = {
//     "text-align": "center"
// }

export default Header
