import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Form } from 'react-bootstrap';


const Calendario = () => {

    
    const [searchValue, setSearchValue] = useState('');
    
    const [firstSelectValue, setFirstSelectValue] = useState('');
    const [secondSelectValue, setSecondSelectValue] = useState('');
    
    const [calendarValue, setCalendarValue] = useState(new Date());
    
    const selectOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
    ];

        const handleDayClick = (value, event) => { // el dia que selecciona el user se guarda en el localstorage
           
            localStorage.setItem('selectedDate', value.toString());            
            window.location.href = "/formularioClases";
        };

  return (
    <Form style={{ backgroundColor: 'red', width:"100%",margin:"auto", backgroundColor:"#1F165B"}}>
    <div className="container " >
      
      <div className="row mb-3">
        <div className="col">
          <Form.Control
            
            type="text"
            placeholder="Buscar..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <Form.Select
          
            value={firstSelectValue}
            onChange={(e) => setFirstSelectValue(e.target.value)}
            placeholder="Selecciona una opción"
          >
            <option value="">Horarios disponibles</option>
            {selectOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </Form.Select>
        </div>
        <div className="col">
          <Form.Select
         
            value={secondSelectValue}
            onChange={(e) => setSecondSelectValue(e.target.value)}
            placeholder="Selecciona una opción"
          >
            <option value="">Nivel</option>
            {selectOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </Form.Select>
        </div>
      </div>
      
      
      <div className="row justify-content-center">
        <div className="col"  >
          <Calendar
            onChange={(date) => setCalendarValue(date)}
            value={calendarValue}
            onClickDay={handleDayClick} // Funcion para capturar el día que selecciona el usuario            
          />
        </div>
      </div>
    </div>
    </Form>
  );
};
export default Calendario;