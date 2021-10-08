(function (window, navigator) {
  const doc = window.document;

  const handleShare = async (data, reporter) => {
    try {
      await navigator.share(data);
      reporter.textContent = 'Gubbins shared! :-)';
    } catch (e) {
      reporter.textContent = 'Failed to share Gubbins :-(';
    }
  };

  const buildReporter = (parent) => {
    const el = doc.createElement('p');
    el.id = 'reporter';
    parent.appendChild(el);
    return el;
  };

  const buildShareButton = (dataToShare, parent, reporter) => {
    const el = doc.createElement('button');
    el.textContent = 'Share my Gubbins';
    el.addEventListener('click', async () => handleShare(dataToShare, reporter));
    parent.appendChild(el);
    return el;
  };


  const initialiseShareButton = (navigator, reporter) => {
    const dataToShare = {
      title: 'My awesome list of fascinating Gubbins',
      text: 'Become fascinated by the Gubbins; learn why such Gubbins is awesome',
      url: 'http://example.com/gubbins',
    }

    const shareButton = buildShareButton(dataToShare, doc.body, reporter);
    doc.body.appendChild(shareButton);
  };

  const reporter = buildReporter(doc.body);
  if (!navigator.share) {
    reporter.textContent = 'Web sharing not supported in this environment (browser / os / transport protocol etc).'
    return;
  }
  initialiseShareButton(navigator, reporter);


})(window, navigator);
