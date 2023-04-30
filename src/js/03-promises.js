
import Notiflix from 'notiflix';


const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);


const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');


function onSubmit(evt){
  evt.preventDefault();
  let formDelay = inputDelay.valueAsNumber;
  const step = inputStep.valueAsNumber;
  const amount = inputAmount.valueAsNumber;

for(let position = 1; position <= amount; position += 1) {
 
  createPromise(position, formDelay)
  .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
  .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  formDelay += step;
  }
}

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random()  > 0.3;
    setTimeout(() => {
  if (shouldResolve) {
    resolve({ position, delay });
  } else {
  reject({ position, delay });
  }
    }, delay);
    });
  }

// Закоментований перший спосіб вирішення задачі. 

  // function onSubmit(evt){
  //   evt.preventDefault();
  //   let formDelay = inputDelay.valueAsNumber;
  //   const step = inputStep.valueAsNumber;
  //   const amount = inputAmount.valueAsNumber;
  
  // for(let position = 1; position <= amount; position += 1) {
   
  //       createPromise(position, formDelay)
  //       .then(onMakeSuccess)
  //       .catch(onMakeError);
  //       function onMakeSuccess(result){
  //         console.log(result)
  //        }
  //        function onMakeError(result){
  //          console.log(result)
  //        }
  //       formDelay += step;
  //   }
  // }
  
  // function createPromise(position, delay) {
  
  //   return new Promise((resolve, reject) => {
  //   const shouldResolve = Math.random()  > 0.3;
  //     setTimeout(() => {
  //   if (shouldResolve) {
  //     Notiflix.Notify.success(`✅ Fulfilled
  //      promise ${position} in ${delay}ms`);

  //   } else {
  //     Notiflix.Notify.failure(`❌ Rejected 
  //   promise ${position} in ${delay}ms`);

  //   }
  //     }, delay);
  //     });
  //   }



