//set
export function setUrl(data) {
  localStorage.setItem('url', JSON.stringify(data));
}

//get
export function getUrl() {
  let result = localStorage.getItem('url');
  if (result !== 'undefined') {
    let data = JSON.parse(result!);
    return data;
  } else return false;
}
