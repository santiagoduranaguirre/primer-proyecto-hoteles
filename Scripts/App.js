class AppHotels extends React.Component {
  state = {
    //Hotels has it all
    hotels: [],
    availabilityFrom: null,
    availabilityTo: null,
    rooms: null,
    country: null,
    price: null,
    dates: {
      availabilityFrom: moment(),
      availabilityTo: null,
    },
  };


  componentDidMount() {
    let hotels = hotelsData;
    this.setState({
      hotels: hotelsData,
    });
    console.log(hotels)
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]:value
    })
  }

  hotelFilters = () => {

    let {hotels, availabilityFrom, availabilityTo, rooms, price, country, dates} = this.state;
    if (country) {
      hotels = hotels.filter((pais) => pais.country === country)
    } if (price) {
      hotels = hotels.filter((precio) => precio.price == price)
    } if (rooms) {
      let criteria;
      switch (parseInt(rooms)){
        case 1:
          criteria = [0, 10];
          break;
        case 2:
          criteria = [10, 20];
          break;
        case 3:
          criteria = [20];
          break;
      }
      hotels = hotels.filter ((rooms) => rooms.rooms > criteria[0] && (criteria [1] ? rooms.rooms <= criteria[1] : true))
    }

    if (dates.availabilityTo) {
      hotels = hotels.filter(
        (hotels) => moment(hotels.availabilityTo).isSameOrAfter(dates.availabilityTo),
        "day"
      )
    }
    hotels=hotels.filter((hotels) =>
    moment(hotels.availabilityFrom).isSameOrBefore(dates.availabilityFrom,
      "day"
      )
    );

    return hotels;
  }

  onDateChange = (e) => {
    e.persist();
    const { target } = e,
    { dates } = this.state;
    dates[target.name] = moment(target.value);
    this.setState({ dates }, this.verificationDates);
  };

  verificationDates = (e) => {
    const { availabilityFrom, availabilityTo } = this.state.dates;
    if (availabilityTo && availabilityFrom.isBefore(availabilityFrom)){
      const _dates = this.state.dates;
      _dates.availabilityTo = _dates.availabilityFrom;
      this.setState({dates})
    }
  }


  render() {
    return (
      <div>
        <Header
        availabilityFrom={this.state.dates.availabilityFrom}
        availabilityTo={this.state.dates.availabilityTo}> </Header>
        <Filter
        handleChange={this.handleChange}
        onDateChange={this.onDateChange}
        ></Filter>
        <HotelContainer hotels={this.hotelFilters()} ></HotelContainer>
      </div>
    );
  }
}

ReactDOM.render(<AppHotels />, document.getElementById("App"));
