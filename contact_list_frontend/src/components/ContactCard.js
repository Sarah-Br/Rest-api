import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

const Contactcard = ({ contact }) => {
  return (
    <div>
      <Card title="Default size card" extra={<a href="https://google.com">More</a>} style={{ width: 300 }}>
        <p>{contact.name}</p>
        <p>{contact.age}</p>
        <p>{contact.email}</p>
      </Card>
    </div>
  )
};

Contactcard.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contactcard;