import PropTypes from "prop-types";

const coffees = ({Items}) => {
    return (
        <div>
            <h3>Coffees</h3>
            {Items.map((Item, index) => (<p key={index}>{Item}</p>))}
        </div>

    );
};

coffees.defaultProps = {
    Items: ["Espresso","Cappuccino", "Latte"]
};
coffees.propTypes = {
    Items: PropTypes.array
}

export default coffees;