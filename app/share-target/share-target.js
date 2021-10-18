(function (win) {

  const render = (content) => {
    const div = win.document.createElement('p');
    div.innerHTML = content;
    win.document.querySelector('body').appendChild(div);
  };

  const displayUrl = (url) => render(`The URL is: <b>${url}</b>`);

  displayUrl(win.location);

})(window);
