import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

const Navbar = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <div className={styles.container}>
            
                
                    <Image src="/img/nandos-logo.png" alt='' className={styles.logo} width="40" height="40" />
                
               
            
            
                <ul className={styles.list}>
                    <li className={styles.listItem} onClick={scrollToTop}>Home</li>
                    
                    <Link href='#menu'><a className={styles.listItem}>Menu</a></Link>
        
                    <Link href='#contact'><a className={styles.listItem}>Contact</a></Link>
                </ul>
            
            
                <MenuIcon className={styles.menuIcon}/>
        </div>
    );
};

export default Navbar;