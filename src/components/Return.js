import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ReturnButton = styled.div`
    display: flex;
    position: absolute;
    top: 8px;
    left: 10px;
    align-items: center;
`;

const Return = () => {
    return (
        <Link to="/">
            <ReturnButton>
                <ArrowBackIcon color="secondary"></ArrowBackIcon>
                <span style={{fontFamily: 'Syncopate', marginLeft: 5}}>Return</span>
            </ReturnButton>
        </Link>
    )
}

export default Return
