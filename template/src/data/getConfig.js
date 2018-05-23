//获取配置文件在这里获取

let get = function(url) {
  return new Promise((resolve,reject) => {
	  var xhr = new XMLHttpRequest();
    xhr.open('get',url,true);
    xhr.onload = function () {
      if(xhr.status == 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(null);
      }
    };
    xhr.onerror = function () {
      reject(null)
    }
    xhr.send(null)
  })
};

export default {
  getConfig() {
    return get('/config/config.json')
  }
}
