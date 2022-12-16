import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container} id='contact'>
            <div className={styles.item}>
                <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="background" />
            </div>
            <div className={styles.item}>
                
                <div className={styles.card}>
                    <h1 className={styles.title}>ADDRESS</h1>
                    <p className={styles.text}>
                    1, 1a High St,
                        <br /> Hounslow TW3 1RH
                        <br />
                        <br />
                        <div className={styles.phone}>Phone:</div>
                         020 8570 5881
                    </p>
                    
                    
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>OPENING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY - FRIDAY
                        <br /> 9:00 – 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 – 23:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
