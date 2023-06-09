import React from 'react'
import AlertContext from '../../context/alert/alertContext'
import { useContext } from 'react'

const Alert = () => {
  const alertContext=useContext(AlertContext);
  const {alert}=alertContext;
  return (
    alert!=null && (
        <div className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle'></i> {alert.message}
        </div>
    )
  );
};

export default Alert;
