const Filter = ({
 availabilityFrom,
 availabilityTo,
 rooms,
 country,
 price,
 handleChange,
 onDateChange,
 ...props
}) => {
  return (
    <div className="filterContainer">
      <div className="filters">
        <label htmlFor="availabilityFrom">Desde: </label>
        <input type="date" name="availabilityFrom" value={availabilityFrom}  onChange={onDateChange}/>
      </div>

      <div className="filters">
        <label htmlFor="availabilityFrom">Hasta: </label>
        <input type="date" name="availabilityTo" min={availabilityFrom} value={availabilityTo}  onChange={onDateChange}/>
      </div>

      <div className="filters">
        <label htmlFor="country">País: </label>
        <select name="country" value={country} onChange={handleChange}>
          <option value="">Todos</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>
      </div>

        <div className="filters">
        <label htmlFor="price">Precio: </label>
        <select name="price" value={price} onChange={handleChange}>
          <option value="">Cualquier precio</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
      </div>

        <div className="filters">
        <label htmlFor="rooms">Tamaño: </label>
        <select name="rooms" value={rooms}  onChange={handleChange}>
          <option value="">Cualquier tamaño</option>
          <option value="1">Hotel pequeño</option>
          <option value="2">Hotel mediano</option>
          <option value="3">Hotel grande</option>
        </select>
      </div>
    </div>
  );
}
