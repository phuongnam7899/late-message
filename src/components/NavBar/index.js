import { useBreakout } from '@hooks'
import { NavBarDesk, NavBarMobile } from './components';

export const NavBar = () => {
    const screenType = useBreakout();
    return screenType === 'mobile' ? <NavBarMobile/> : <NavBarDesk/>
}