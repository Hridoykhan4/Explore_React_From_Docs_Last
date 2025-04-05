const ShowDetails = ({ children, money, validity }) => {
  return <>{validity === "jamal" ? <p>{money || 'No money provided'}</p> : validity === 'kamal' ? <p>{children}</p> : <p>{children}</p>} </>; 
};

export default ShowDetails;
