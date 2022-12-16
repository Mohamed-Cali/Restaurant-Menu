import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ imgNo, title, desc, price}) => {
    return (
        <div className={styles.starterDish}>
            <div className={styles.starter_desc}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div>
                <p className={styles.price_section}>£{price}</p>
                </div>
            </div>
            
    
            <div className={styles.starterImg} >
                <Image src={`/img/food${imgNo}.jpg`} alt={title} width="80" height="80" />
            
                <div className={styles.add}>
                    <p className={styles.add_btn}>Add</p>
                </div>
            </div>
            
        </div>
    )
}

export default ProductCard