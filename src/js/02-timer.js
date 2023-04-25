// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const myInput = document.getElementById('datetime-picker');
const myBtn = document.querySelector('[data-start]');

const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');

// -------------Бібліотека flatpickr 1
const choosseDates = flatpickr(myInput, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    // ----------Вибір дати Метод onClose() 2
    onClose(selectedDates) {
    if(selectedDates[0] < Date.now()) {
      myBtn.setAttribute('disabled', '');

      return Notiflix.Notify.failure("Please choose a date in the future");
    }

    myBtn.removeAttribute('disabled', '');
    const targetDates = selectedDates[0];

    myBtn.addEventListener('click', clickOnStart);
    function clickOnStart(){
       
        setInterval( () => {
        const currentTime = Date.now();
        const minusDate = convertMs(targetDates - currentTime);
            // console.log(minusDate);
        const currentDate = minusDate.days;
        const currentHour = minusDate.hours;
        const currentMinute = minusDate.minutes;
        const currentSecond = minusDate.seconds;
    
        day.textContent = `${currentDate.toString().padStart(2, '0')}`;
        hour.textContent = `${currentHour.toString().padStart(2, '0')}`;
        minute.textContent = ` ${currentMinute.toString().padStart(2, '0')}`;
        second.textContent = ` ${currentSecond.toString().padStart(2, '0')}`;
        day.style.color = 'red';
        hour.style.color = 'red';
        minute.style.color = 'red';
        second.style.color = 'red';
        }, 1000)
    }


    },
});
  
 // ------------------------------------------

 function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
 // ------------------------------------------

