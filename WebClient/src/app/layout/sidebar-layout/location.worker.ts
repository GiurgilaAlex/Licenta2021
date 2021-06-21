/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  setInterval(() => {
    var locationRequest = {
      latitude: data.latitude,
      longitude: data.longitude,
      time: (new Date()).toLocaleString().slice(12, 17),
      date: (new Date()).toLocaleString().slice(0, 10),
      token: data.token
    };
    ajax('https://localhost:44301/api/AskMe/location', locationRequest, function (data) {
      self.postMessage(data);
    }, 'POST');
  }, 1000 * 60);
});

var ajax = function (url, data, callback, type) {
  var data_array, data_string, idx, req, value;
  if (data == null) {
    data = {};
  }
  if (callback == null) {
    callback = function () { };
  }
  if (type == null) {
    type = 'GET';
  }
  data_array = {};
  for (idx in data) {
    if (idx !== 'token') {
      value = data[idx];
      data_array[idx] = value;
    }
  }
  req = new XMLHttpRequest();
  req.open(type, url, false);
  req.setRequestHeader("Content-type", "application/json");
  req.setRequestHeader("Authorization", `Bearer ${data.token}`);
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      return callback(req.responseText);
    }
  };
  req.send(JSON.stringify(data_array));
  return req;
};