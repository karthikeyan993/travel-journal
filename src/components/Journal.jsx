import PropTypes from "prop-types";

export default function Journal(props) {
  return (
    <div className="journal">
      <img
        className="journal__mainImage"
        src={`/images/${props.data.image}`}
        alt={props.data.imageDescription}
      />
      <div className="journal__info">
        <div>
          <div className="journal__location">
            <img src="/images/location.png" alt="location pin image" />
            <h3>{props.data.location}</h3>
            <a href={props.data.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="journal__title">{props.data.title}</h1>
        </div>
        <div className="journal__description">
          <div className="journal__date">
            <h3>{props.data.startDate}</h3>
            <p>-</p>
            <h3>{props.data.endDate}</h3>
          </div>
          <p>{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}

Journal.propTypes = {
  data: PropTypes.object,
};
