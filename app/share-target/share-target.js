(function (win) {

  const createElement = (elementName, content, classes) => {
    const element = win.document.createElement(elementName);
    if (content) {
      element.innerHTML = content;
    }
    if (classes) {
      element.classList.add(classes);
    }
    return element;
  };

  const getParams = (location) => (
    location.search.substring(1).split('&').map((param) => param.split('='))
  );

  const extractFieldsFromParams = (params, allowedFieldNames) => (params
      .filter((param) => allowedFieldNames.includes(param[0]))
      .map((param) => {
        const obj = {};
        obj[param[0]] = decodeURIComponent(param[1]);
        return obj;
      })
  );

  const getTitleFromUrl = (location) => {
    const field = 'title';
    const title = extractFieldsFromParams(getParams(location), field)[0][field];
    console.log(title);
    return title;
  };

  const showSucess = () => {
    const img = createElement('img', null, 'message__image');
    img.src = './images/icon-192.png';
    img.alt = '';

    const text = createElement('p', `Added <b>${getTitleFromUrl(win.location)}</b> to your list.`)

    const messageEl = createElement('div', '', 'message');
    messageEl.appendChild(text);
    messageEl.appendChild(img);
    win.document.querySelector('body').appendChild(messageEl)
  };

  getTitleFromUrl(win.location);
  showSucess();

})(window);
