import React from "react";

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.CartIcon}
          src="https://cdn-icons-png.flaticon.com/512/3737/3737372.png"
          alt="cart-icon"
        ></img>
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};
const styles = {
  CartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default Navbar;
