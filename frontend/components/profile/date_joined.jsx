import React from 'react';

class DateJoined extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.createdDate = this.createdDate.bind(this);
  }

  createdDate(timestamp) {
    const months = {
      "01": "JANUARY",
      "02": "FEBRUARY",
      "03": "MARCH",
      "04": "APRIL",
      "05": "MAY",
      "06": "JUNE",
      "07": "JULY",
      "08": "AUGUST",
      "09": "SEPTEMBER",
      "10": "OCTOBER",
      "11": "NOVEMBER",
      "12": "DECEMBER",
    };
    Object.freeze(months);

    const createdDateStr = timestamp.split("-");
    const createdYear = createdDateStr[0];
    const createdMonth = months[createdDateStr[1]];
    let createdDay = createdDateStr[2].slice(0, 2);
    if (createdDay[0] === "0") {
      createdDay = createdDay.slice(1);
    }

    return `${createdMonth} ${createdDay}, ${createdYear}`;
  }

  render() {
    return (
      <p>MEMBER SINCE:&nbsp;{this.createdDate(this.props.timestamp)}</p>
    );
  }
}

export default DateJoined;