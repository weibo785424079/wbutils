var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// 将二进制转换成base64
function binToBase64 (bitString) {
  var result = ''
  var tail = bitString.length % 6
  var bitStringTemp1 = bitString.substr(0, bitStringTemp1.length - tail)
  var bitStringTemp2 = bitString.substr(-tail)
  for (var i = 0; i < bitStringTemp1.length; i += 6) {
    var index = parseInt(bitStringTemp1.substr(i, 6), 2)
    result += code[index]
  }
  bitStringTemp2 += new Array(7 - tail).join('0')
  if (tail) {
    result += code(parseInt(bitStringTemp2, 2))
    result += new Array((6 - tail) / 2 + 1).join('=')
  }
  return result
}

// base64转二进制
function base64ToBin (str) {
  var bitString = ''
  var tail = 0
  for (var i = 0; i< str.length; i++) {
    if (str[i] != '=') {
       var decode = code.indexOf(str[i]).toString(2)
       bitString += (new Array(7 - decode.length)).join('0') + decode
    } else {
      tail++  
    }
  }
  return bitString.substr(0, bitString.length - tail * 2)
}

// 字符串转二进制
function stringToBin (str) {
  var result = ''  
  for (var i =0; i < str.length; i++) {
    var charCode = str.charCodeAt(i).toString(2)
    result += (new Array(9 - charCode.length).join('0') + charCode)  
  }
  return result
}

// 二进制转换成字符串
function BinToStr (Bin) {
  var result = ''  
  for (var i = 0; i<Bin.length;i++) {
      result += String.fromCharCode(parseInt(Bin.substr(i, 8), 2))
  }
  return result
}
exports.base64 = function (str) {
  return binToBase64(stringToBin(str))
}
exports.decodeBase64 = function (str) {
  return BinToStr(base64ToBin(str))
}

function getCanvas(w, h) {
    var c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return c;
  }
    
  function getPixels(img) {
    var c = getCanvas(img.width, img.height);
    var ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return ctx.getImageData(0, 0, c.width, c.height);
  }

  function img2Base64(img) {
    var imgData = getPixels(img).data;
    var imgWidth = getPixels(img).width;
    var imgHeight = getPixels(img).height;
    var bin = "";
    for (var i = 0; i < imgData.length; i++) {
      bin += base.numToString(imgData[i]);
    }
    bin = bin + base.stringToBin("$$" + imgWidth + "," + imgHeight + "$$");
    return base.binToBase64(bin);
  }


  function paint(imgData) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, imgData.width, imgData.height);
    ctx.putImageData(imgData, 0, 0);
  }
  
function base642img(data) {
  var str = base.BinToStr(base.base64ToBin(data));
  var imgWidth = str.match(/\$\$(\d+),(\d+)\$\$$/, "")[1];
  var imgHeight = str.match(/\$\$(\d+),(\d+)\$\$$/, "")[2]
  var imgData = base.base64ToBin(data).replace(base.stringToBin("$$" + imgWidth + "," + imgHeight + "$$"), "");
  
  var ImageDataArray = new Uint8ClampedArray(imgWidth * imgHeight * 4);
  for (var i = 0; i < ImageDataArray.length; i++) {
    ImageDataArray[i] = parseInt(imgData.substr(i * 8, 8), 2);
  }
  return new ImageData(ImageDataArray, imgWidth, imgHeight);
  
}