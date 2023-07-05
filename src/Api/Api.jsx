import axios from 'axios';

async function fetchPixabay(searchQuery, pageNum,pagesPerPage) {
  try {
    const responce = await axios(
      `https://pixabay.com/api/?key=35917773-69c30edf6ec6a269aa0ed0b0d&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${pagesPerPage}&page=${pageNum}`
    );
    return responce.data;
  } catch (e) {
    console.log(e);
  }
}

export { fetchPixabay };
