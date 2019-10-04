import React from 'react'
import PropTypes from 'prop-types'

const StudentName = ({ cssClass, lastname, firstname, isOnline }) => {
    return (
        <div className={"lls-student__header-name " + cssClass}>
            <span>{`${lastname} ${firstname}`}</span>
            <span>{isOnline ? 'connecté' : 'déconnecté'}</span>
        </div>
    );
};

StudentName.propTypes = {
    cssClass: PropTypes.string,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default StudentName;