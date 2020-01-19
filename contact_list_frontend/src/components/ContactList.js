import React from 'react'
import PropTypes from 'prop-types'

import Contactcard from './ContactCard'
import AddContact from './AddContact'

const Contactlist = ({ contacts }) => {
    const renderContacts = () => {
        return contacts.map((contact) => <Contactcard contact={contact} />)
    }

    return (
        <div>
            <h1>Contact List </h1>
            <button >Show contacts</button>
            {renderContacts()}
            <AddContact />
        </div>
    )
}

Contactlist.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default Contactlist