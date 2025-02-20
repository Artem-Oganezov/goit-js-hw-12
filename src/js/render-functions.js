function pictureTemplate(option) {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = option;
    return `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
    </a>
    <table class="photo-info">
              <tr class="name-info" >
                <td>Likes <br>
                <span class="total">${likes}</span></td>
                <td>Views<br>
                <span class="total">${views}</span></td>
                <td>Comments<br>
                <span class="total">${comments}</span></td>
                <td>Downloads<br>
                <span class="total">${downloads}</span></td>
              </tr>
            </table>    
         </li>`;
  }

export function picturesTemplate(options) {
    const markup = options.map(pictureTemplate).join('');
    return markup;
  }