import ProductCard from "./ProductCard"
import styles from "../styles/ProductList.module.css";

const ProductList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title} id='menu'>Menu</h1>
            <div className={styles.menu_section}>
                <p className={styles.desc}>
                Starter
                </p>
                <div className={styles.wrapper}>
                    <ProductCard imgNo="1" title="Sweet Potato Wedges with Garlic PERinaise" desc="Crispy wedges served with our creamy plant-based Garlic PERinaise dip. Perfect for sharing! 10p from each one goes directly towards fighting malaria in our Southern African homeland." price="4.25" />
                    <ProductCard imgNo="2" title="Halloumi Sticks & Dip" desc="Five chunky sticks of grilled halloumi with our chilli jam for dipping." price="4.95" />
                    <ProductCard imgNo="3" title="Houmous with PERi-PERi Drizzle" desc="With warm pitta triangles. Great to share." price="4.25" />
                    <ProductCard imgNo="4" title="Spicy Mixed Olives" desc="Spicy mixed olives co-starring mushrooms, garlic and red pepper." price="3.25" />
                

                </div>
            </div>

            <div className={styles.menu_section}>
                <p className={styles.desc}>
                Peri-Peri Chicken
                </p>
                <div className={styles.wrapper}>
                    <ProductCard imgNo="5" title="Chicken Butterfly" desc="Two chicken breasts, flame-grilled with crispy skin. Infused with PERi-PERi and served in your choice of spice." price="13.75" />
                    <ProductCard imgNo="6" title="4 Boneless Chicken Thighs" desc="Flame-grilled with crispy skin. Infused with PERi-PERi and served in your choice of spice." price="13.95" />
                    <ProductCard imgNo="7" title="5 Chicken Wings" desc="Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served in your choice of spice." price="11.75" />
                    <ProductCard imgNo="8" title="1/4 Chicken" desc="Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served on the bone with crispy skin, in your choice of spice." price="9.25" />
                

                </div>
            </div>

            <div className={styles.menu_section}>
                <p className={styles.desc}>
                Burgers & Wraps
                </p>
                <div className={styles.wrapper}>
                    <ProductCard imgNo="10" title="Grilled Chicken Wrap" desc="Chicken breast infused with PERi-PERi and grilled to your favourite spice. Served in a wrap with lettuce, lightly spiced yoghurt mayo and chilli jam." price="12.25" />
                    <ProductCard imgNo="9" title="Sunset Burger" desc="Two chicken thighs, melting cheddar cheese, smoky red pepper chutney with lettuce and mayo in a bolo do caco – a soft, sweet roll. Deliciously messy." price="13.95" />
                    <ProductCard imgNo="11" title="Grilled Chicken Burger" desc="Grilled Chicken Burger on a plate with optional sides PERi-Salted Chips and Mixed Leaf Salad" price="12.50" />
                    <ProductCard imgNo="12" title="Butterfly Burger" desc="A Butterfly Burger on a plate with an optional side of PERi-Salted Chips" price="16.00" />
                

                </div>
            </div>

            <div className={styles.menu_section}>
                <p className={styles.desc}>
                Sharing Platters
                </p>
                <div className={styles.wrapper}>
                    <ProductCard imgNo="13" title="Full Platter" desc="A Whole Chicken with 2 large or 4 regular sides. Great for two people." price="24.00" />
                    <ProductCard imgNo="14" title="Boneless Platter" desc="A Chicken Butterfly and 4 Boneless Chicken Thighs, served with either 2 large or 4 regular sides. A perfect meal for two!" price="25.75" />
                    <ProductCard imgNo="15" title="Wing Platter" desc="10 Chicken Wings with either 2 large or 4 regular sides. Great for two people." price="21.00" />
                    <ProductCard imgNo="16" title="Family Platter" desc="2 Whole Chickens and 5 large sides. Perfect for 4-6 people." price="49.95" />
                

                </div>
            </div>

            <div className={styles.menu_section}>
                <p className={styles.desc}>
                Sides
                </p>
                <div className={styles.wrapper}>
                    <ProductCard imgNo="17" title="PERi-Salted Chips" desc="Crispy and sprinkled with PERi-PERi salt." price="3.50" />
                    <ProductCard imgNo="18" title="Macho Sprouts" desc="Shredded Brussels sprouts with mint, parsley and chilli. So wrong but so right." price="3.50" />
                    <ProductCard imgNo="19" title="Coleslaw" desc="Packed full of crunchy chopped vegetables in a lightly spiced mayo." price="3.50" />
                    <ProductCard imgNo="20" title="Spicy Rice" desc="Lightly spiced rice. One of our signature sides!" price="3.50" />
                

                </div>
            </div>

            <div className={styles.menu_section}>
                <p className={styles.desc}>
                Drinks
                </p>
                <div className={styles.wrapper}>
                    <ProductCard imgNo="21" title="Coca-Cola" desc="330ml. A classic!" price="1.75" />
                    <ProductCard imgNo="22" title="Fanta Orange" desc="330ml. Fruity fizz. Need we say more?" price="1.75" />
                    <ProductCard imgNo="23" title="Sprite" desc="330ml. Refreshing and fizzy." price="1.75" />
                    <ProductCard imgNo="24" title="Still Water" desc="500ml. The perfect way to hydrate." price="2.40" />
                

                </div>
            </div>
        </div>
    )
}

export default ProductList