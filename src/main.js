
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getUser } from "./js/pixabay-api";
import { picturesTemplate } from "./js/render-functions";

const form = document.querySelector('.form');
const ulElem = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {});
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  ulElem.innerHTML = '';
  const imageQ = e.target.elements.query.value.trim();
   if (!imageQ) {
     iziToast.error({
       titleColor: 'white',
       timeout: 2000,
       message: 'Please , enter your query!',
      });
      return ;
  }
  
  document.querySelector('.loader').style.display = 'block';
  e.target.reset(); 
  getUser(imageQ).then(response => {
    if (response.data.hits.length === 0) {
      document.querySelector('.loader').style.display = 'none';
      iziToast.error({
        titleColor: 'white',
        timeout: 2000,
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });

    } else {
      document.querySelector('.loader').style.display = 'none';
      ulElem.insertAdjacentHTML("beforeend", picturesTemplate(response.data.hits));
      lightbox.refresh();
    }
  }).catch(function (error) {
    document.querySelector('.loader').style.display = 'none';
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
     iziToast.error({
        titleColor: 'white',
        message: 'Щось пішло не так. Спробуйте пізніше!',
    });
  });
}






