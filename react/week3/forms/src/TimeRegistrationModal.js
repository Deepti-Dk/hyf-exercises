import React, { useCallback, useState } from 'react';
import './TimeRegistration.css';

const dates = [
  '2020-10-11 10:00:00',
  '2020-10-11 11:00:00',
  '2020-10-11 12:00:00',
  '2020-10-11 13:00:00',
  '2020-10-11 14:00:00',
  '2020-10-11 15:00:00',
  '2020-10-11 16:00:00',
  '2020-10-11 17:00:00',
];

const TimeRegistrationModal = (props) => {
  const [name, setName] = useState('');
  const [start, setStartTime] = useState('');
  const [end, setEndTime] = useState('');
  const { onCloseModal, setShift } = props;

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const onChangeStartTime = useCallback((e) => {
    setStartTime(e.target.value);
  }, []);
  const onChangeEndTime = useCallback((e) => {
    setEndTime(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {
    const shift = {
      name,
      start,
      end,
    };
    setShift(shift);
  }, [name, start, end]);

  return (
    <div className="my-modal">
      <button className="close-button" onClick={onCloseModal}>
        X
      </button>
      <br />
      <label>Employee Name: </label>
      <input type="text" value={name} onChange={onChangeName} />
      <br />
      <br />
      <label>Start Time: </label>

      <select onChange={onChangeStartTime}>
        {dates.map((date) => {
          return (
            <option key={date} value={date}>
              {date}
            </option>
          );
        })}
      </select>
      <br />
      <br />
      <label>End Time: </label>
      <select onChange={onChangeEndTime}>
        {dates.map((date) => {
          return (
            <option key={date} value={date}>
              {date}
            </option>
          );
        })}
      </select>
      <br />
      <br />
      <button className="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};
export default TimeRegistrationModal;
