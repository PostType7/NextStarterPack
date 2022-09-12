export const P7rest = {
  post: (endpoint: string, payload: any, callback: any) => {
    fetch(endpoint, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(payload),
      cache: "default",
    })
      .then((response) => response.text())
      .then((response) => {
        return callback(response);
      });
  },
};

export const getCookie = (name: string) => {
  var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
};
