import classes from "./Checkout.module.css";

const Checkout = (props) => {
  <form>
    <div className={classes.control}>
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" />
    </div>
    <div className={classes.control}>
      <label htmlFor="street">Your Street</label>
      <input type="text" id="street" />
    </div>
    <div className={classes.control}>
      <label htmlFor="postal">Postal code</label>
      <input type="text" id="postal" />
    </div>
    <button type="button" onClick={props.onCancel}>
      Cancel
    </button>
    <button>Confirm</button>
  </form>;
};

export default Checkout;
