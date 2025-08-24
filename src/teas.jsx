import PropTypes from "prop-types";

const teas = ({ Items }) => {
  return (
    <div>
      <h3>Teas</h3>
      {Items.map((Item, index) => (
        <p key={index}>{Item}</p>
      ))}
    </div>
  );
};

teas.defaultProps = {
  Items: ["Green Tea", "Chamomile Tea", "Earl Grey Tea"],
};

teas.propTypes = {
  Items: PropTypes.array
};

export default teas;
