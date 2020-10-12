import React, { useCallback, useState } from 'react';
import TimeRegistrationModal from './TimeRegistrationModal';

const Shifts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shifts, setShifts] = useState([]);
  const onOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const submitShift = (shift) => {
  setShifts((currentState) => {
    console.log('shift added:', shift);

    return currentState.concat(shift);
  });
}, [name, start, end]);


const onShowShifts = () => {
  
}

  return (
    <div>
      <h1>Time Registration</h1>
      <button className="button" onClick={onOpenModal}>
        Add a shift
      </button>
      <button className="button" onClick={onShowShifts}>
        Shift Overview
      </button>
      
{isOpen && (<TimeRegistrationModal setShift={submitShift} onCloseModal={onCloseModal}/>)} 
      <ul>
        {shifts.map((shift) => (
          <li>
            {shift.name} {shift.start}
            {shift.end}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shifts;
