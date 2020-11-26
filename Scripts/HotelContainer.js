const HotelContainer = ({ hotels }) => {
  return (
    <div className="hotelContainer">
      {hotels.length ? hotels
      .map((hotel, index)=> <Hotel key={index} {...hotel}/>) :
      <h2>Lo siento, no tenemos hoteles en tus fechas de búsqueda</h2>
    }
    </div>
  )
}