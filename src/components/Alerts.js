import React from 'react';

function Alerts(props) {
    return (
      props.Alerts &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {props.Alerts.type} :  {props.Alerts.msg}
        </div>
    );
}

export default Alerts;
