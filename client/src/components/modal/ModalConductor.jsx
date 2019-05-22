import React from 'react';

import AddMealModal from './AddMealModal';

const ModalConductor = props => {
  switch (props.currentModal) {
    case 'ADD_MEAL':
      return <AddMealModal {...props}/>;

    default:
      return null;
  }
};

export default ModalConductor;