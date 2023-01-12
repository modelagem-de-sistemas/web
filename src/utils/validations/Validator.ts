import * as yup from 'yup';

yup.addMethod(yup.string, 'url', function (message = 'Invalid URL') {
  return this.test('url', message, function (value) {
    if (!value) return true;
    let url;
    try {
      url = new URL(value);
    } catch (_) {
      return false;
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
  });
});

yup.addMethod(yup.string, 'html', function (message = 'Invalid HTML') {
  return this.test('html', message, function (value) {
    if (!value) return true;
    let html;
    try {
      html = new DOMParser().parseFromString(value, 'text/html');
    } catch (_) {
      return false;
    }
    return html.body.textContent !== null;
  });
});

yup.addMethod(yup.string, 'email', function (message = 'Invalid email') {
  return this.test('email', message, function (value) {
    if (!value) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  });
});

export { yup as Validator };
