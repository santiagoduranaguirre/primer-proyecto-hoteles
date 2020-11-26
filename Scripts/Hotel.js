const Hotel = ({
  name,
  photo,
  description,
  country,
  city,
  price,
  rooms,
  capacity,
  ...props }) => {
  return (
    <div className="hotelFull">
      <div className="hotelInfo">
        <h2>{name}</h2>
        <img src={photo} alt="" />
        <h3>{country}</h3>
        <h3>{city}</h3>
      </div>
      <p>{description}</p>
      <p>Precio: {price}</p>
      <p>Habitaciones: {rooms}</p>
      <button>Reservar</button>
    </div>
  );
};
