
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getUser } from "./js/pixabay-api";
import { picturesTemplate } from "./js/render-functions";

const form = document.querySelector('.form');
const ulElem = document.querySelector('.gallery');
const btnNextImg = document.querySelector('.btn-next-image');
const lightbox = new SimpleLightbox('.gallery a', {});
const img = document.querySelector('.gallery');

form.addEventListener('submit', onFormSubmit);

const params = {
  total: 100,
  query: '',
  page: 1,
};

async function onFormSubmit(e) {
  e.preventDefault();
  ulElem.innerHTML = '';
  params.query = e.target.elements.query.value.trim();
  params.page = 1;
  if (!params.query) {
     btnNextImg.classList.add('hidden');
     iziToast.error({
       backgroundColor:'#6e0e0e',
       timeout: 2000,
       message: 'Please , enter your query!',
      });
      return ;
  }
  
  document.querySelector('.loader').style.display = 'block';
  e.target.reset();
  
  try {
    const response = await getUser(params.query, params.page);
    params.total = response.data.total;
    
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
      checkBtnStatus();
    }
  } catch (error) {
     
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
        backgroundColor:'#6e0e0e',
        message: 'Щось пішло не так. Спробуйте пізніше!',
    });
  }
}

btnNextImg.addEventListener('click', loadImg);

async function loadImg() {
   btnNextImg.classList.add('hidden');
  document.querySelector('.loader_next').style.display = 'block';
  params.page += 1;
  try {
    const response = await getUser(params.query, params.page);
    document.querySelector('.loader_next').style.display = 'none';
    ulElem.insertAdjacentHTML('beforeend', picturesTemplate(response.data.hits));
    lightbox.refresh();
    checkBtnStatus();
} catch (error) {
    console.log(error);
  };
  scrollPage();
}


function showLoadMoreBtn() {  
  btnNextImg.classList.remove('hidden');
}

function hideLoadMoreBtn() {
  btnNextImg.classList.add('hidden');
}

function checkBtnStatus() {
  const perPage = 40;
  const maxPage = Math.ceil(params.total / perPage);
  if (params.page >= maxPage) {
    hideLoadMoreBtn();
    iziToast.error({
        titleColor: 'white',
        timeout: 2000,
        message: "We're sorry, but you've reached the end of search results.",
      });
  } else {
    showLoadMoreBtn();
  }
}


function scrollPage() {
  const imgHeight = img.firstElementChild.getBoundingClientRect();
  const height = imgHeight.height;
  scrollBy({
    behavior: 'smooth',
    top: height * 3,
  });
}