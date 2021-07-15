import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const ModeButtons = () => {
    return (
        <Tabs
            // value={value}
            // onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="Generate Character" />
            <Tab label="Build Character" />
        </Tabs>
    )
}

export default ModeButtons
