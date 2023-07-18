function domainName(url){
    url = url.replace("http://", "").replace("www.", "")
    return url.slice(0, url.indexOf(".")) 
  }


function method1(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function method2(url){
    return url.replace("http://", "").replace("https://", "").replace("www.", "").split(".")[0]
}

function method3(url){
    return url.replace(/.+\/\/|www.|\..+/g, "")
}

function method4(url){
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split(".")[0]
}

  let url = "http://www.youtube.com.gp"
  console.log(method4(url))

//   return url.match(/((?<=(\/|.?))[a-zA-Z0-9\-]{3,}(?=(\.[a-z]{2,})$))/g)[0]