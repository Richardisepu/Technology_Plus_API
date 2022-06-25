const getCookie = (name) => {
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [k, v] = el.split("=");
    cookie[k.trim()] = v;
  });
  return cookie[name];
};

const setCookie = (name, value) => {
  const cookieValue = `${name}=${value}`;
  document.cookie = cookieValue;

  return cookieValue;
};

const deleteCookie = () => {};

export { getCookie, setCookie, deleteCookie };
