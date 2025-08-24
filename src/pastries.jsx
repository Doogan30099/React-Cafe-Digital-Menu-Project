import PropTypes from "prop-types";

const pastries = ({Items}) => {
    return (
        <div>
            <h3>Pastries</h3>
            {Items.map((Item, index) => (<p key={index}>{Item}</p>))}
        </div>

    );
};

pastries.defaultProps = {
    Items: ["Croissants", "Bagels", "Muffins"]
};

pastries.propTypes = {
    Items: PropTypes.array
}

export default pastries;