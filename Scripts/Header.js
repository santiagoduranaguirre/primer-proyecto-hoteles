class Header extends React.Component {
  render() {
    const convertFrom = moment(this.props.availabilityFrom).format("LL");
    const convertTo = this.props.availabilityTo ? moment(this.props.availabilityTo).format("LL") : "";

const titleHeader = convertFrom && convertTo ? `Tu reserva va desde  ${convertFrom} hasta ${convertTo}` : `¿Preparado para reservar tu proximo hotel?`;

  return (
    <div>
      <h2>{titleHeader}</h2>
    </div>
    )
  }
}
