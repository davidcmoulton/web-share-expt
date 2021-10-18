(function (win) {

  const render = (content) => {
    const div = win.document.createElement('p');
    div.innerHTML = content;
    win.document.querySelector('body').appendChild(div);
  };

  const getParams = (location) => location.search.substring(1).split('&');

  const displayAllowedFieldsFromParams = (params, allowedFields) => {
    const availableAllowedFieldsWithValues = params
      .filter((param) => allowedFields.includes(param.split('=')[0]))
      .map((param) => `<p><b>${param.split('=')[0]}</b>: ${decodeURIComponent(param.split('=')[1])}</p>`)
      .reduce((accumulator, currentValue) => accumulator + currentValue, '');
    render(availableAllowedFieldsWithValues);
  };

  const displayUrl = (url) => render(`The URL is: <b>${url}</b>`);

  displayAllowedFieldsFromParams(getParams(win.location), ['title', 'text', 'url']);
  displayUrl(win.location);

})(window);
