import s from './SideBar.module.css'
import {Link} from "react-router-dom";
import {Sidebar} from "./SideBar";

export const Nav = () => {
    return (


        <Sidebar/>
        // <nav className={s.nav}>
        //     <div className={s.navItemWrapper}>
        //         <div className={s.navItem}>
        //         <div className={s.navDiv}>
        //             <div className={s.item}><Link  to='/profile'>Profile </Link></div>
        //         </div>
        //         <div className={s.navDiv}>
        //             <div className={s.item}><Link to="/dialogs">Message</Link></div>
        //         </div>
        //         <div className={s.navDiv}>
        //             <div className={s.item}><Link to="/music">Music</Link></div>
        //         </div>
        //         <div className={s.navDiv}>
        //             <div className={s.item}><Link to='/users'>Users </Link></div>
        //         </div>
        //         <div className={s.navDiv}>
        //             <div className={s.item}><Link to="/news">News</Link></div>
        //         </div>
        //         <div className={s.navDiv}>
        //             <div className={s.item}><Link to="/settings">Settings</Link></div>
        //         </div>
        //     </div></div>
        //
        // </nav>
    )
}