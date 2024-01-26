import React from 'react'
import '../../style/services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ServiceCard({service}) {
  return (
    <div className='service-card'>
      <FontAwesomeIcon className='service-card-icon' icon={service.icon}></FontAwesomeIcon>
        <h4 className='service-card-title'>{service.name}</h4>
        <p className='service-card-para'>{service.body}</p>
    </div>
  )
}
