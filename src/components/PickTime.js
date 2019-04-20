import React from  'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

import 'rc-time-picker/assets/index.css';

class PickTime extends React.Component {

  handleChange = (e) => {
    const format2 = 'HH:mm'
    var m = moment(e)
    console.log(m.hours())
    console.log(m.utc())
    this.props.updateTime(m.format(format2));
  }
    
  render(){
    const format = 'h:mm A';
    const now = moment().hour(7).minute(0);
    return (
      <div>
        <TimePicker
          showSecond={false}
          className="xxx"
          format={format}
          defaultValue={now}
          onChange={this.handleChange}
          use12Hours
          inputReadOnly
        />,
      </div>
    )
  }
}

export default PickTime