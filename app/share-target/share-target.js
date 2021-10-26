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

  const getParamValueFromUrl = (location, paramName) => {
    const extractedFields = extractFieldsFromParams(getParams(location), [paramName]);
    return extractedFields.length ? extractedFields[0][paramName] : '';
  };

  const showSuccess = () => {
    const messageEl = createElement('div', '', 'message');

    const textEl = createElement('p', `Added <b>${getParamValueFromUrl(win.location, 'title')}</b> to your list.`)
    messageEl.appendChild(textEl);

    const urlValue = getParamValueFromUrl(win.location, 'url');
    if (urlValue) {
      const urlEl = createElement('p', `(${ urlValue })`)
      messageEl.appendChild(urlEl);
   }

    const img = createElement('img', null, 'message__image');
    img.src = './images/icon-192.png';
    img.alt = '';
    messageEl.appendChild(img);

    win.document.querySelector('body').appendChild(messageEl)
  };

  showSuccess();

})(window);
