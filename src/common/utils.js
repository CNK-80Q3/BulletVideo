export function addThousandDivide(num) {
  /* *
  定义数字千分符函数
  * */
  return (+num || 0)
    .toString()
    .replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
}

export function numberFormat(number) {
  /* *
  定义数字格式化函数
  * */
  if (number <= 10000) {
    return addThousandDivide(number.toFixed(1));
  } else if (number > 10000 && number < 100000000) {
    return `${addThousandDivide((number / 10000).toFixed(1))}万 `;
  } else if (number >= 100000000) {
    return `${(number / 100000000).toFixed(1)}亿 `;
  }
}

export function dateFormat(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
