function request(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if (xhr.status !== 200) {
      callback(xhr.status + ': ' + xhr.statusText);
    } else {
      callback(null, JSON.parse(xhr.responseText))
    }
  }
}

export default request;