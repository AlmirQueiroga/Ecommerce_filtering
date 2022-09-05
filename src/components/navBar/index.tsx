import { Brand, Container } from "./style";
import TBBImage from "../../assets/tbblogo.png"
import { memo } from "react";

const NavBar: React.FC = () => (
    <Container>
        <a href='/' title='Home'>
            <Brand src={TBBImage} alt='Logo TBB' />
        </a>
    </Container >
);

export default memo(NavBar);