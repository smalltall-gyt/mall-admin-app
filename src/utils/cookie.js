


export function setCookie(key,value,duration){
  const seconds = duration*24*60*60*1000;
  const nowTime = new Date().getTime();
  const expiresTime = nowTime + seconds;
  const expiresDate = new Date(expiresTime).toGMTString();
  document.cookie=`${key}=${value};expires=${expiresDate}`
}

export function getCookie(key){
  const cookies = document.cookie.split(';')
  for(let i = 0; i < cookies.length; i++){
    cookies[i] = cookies[i].trim();
    cookies[i] = cookies[i].split('=')
  }
  for(let i = 0; i < cookies.length; i++){
    if(cookies[i][0] === key){
      return cookies[i][1];
    }
  }
  return null;
}

export function getAllCookies(){
  const cookieStr = document.cookie;
  if(cookieStr === ''){
    return null
  }
  const cookies = cookieStr.split(';');
  const cookieObj = {};
  for(let i = 0; i < cookies.length; i++){
    cookies[i] = cookies[i].trim();
    cookies[i] = cookies[i].split('=');
    cookieObj[cookies[i][0]] = cookies[i][1];
  }
  return cookieObj
}

export function removeCookie(key){
  setCookie(key,'',0)
}