(function (win) {

  const display = (content) => {
    const div = win.document.createElement('p');
    div.innerHTML = content;
    win.document.querySelector('body').appendChild(div);
  };

  const getParams = (location) => (
    location.search.substring(1).split('&').map((param) => param.split('='))
  );

  const extractAllowedFieldsFromParams = (params, allowedFieldNames) => (params
    .filter((param) => allowedFieldNames.includes(param[0]))
    .map((param) => `<p><b>${param[0]}</b>: ${decodeURIComponent(param[1])}</p>`)
    .reduce((acc, current) => acc + current, '')
  );

  const fields = extractAllowedFieldsFromParams(getParams(win.location), ['title', 'text', 'url']);
  display(fields);
  display(`The URL is: <b>${win.location}</b>`);

})(window);
