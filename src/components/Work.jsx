import PropTypes from 'prop-types';

export const Work = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </>
  )
};

Work.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
