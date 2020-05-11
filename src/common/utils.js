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
  if (number > 10000 && number < 100000000) {
    return `${addThousandDivide((number / 10000).toFixed(1))}万 `;
  } else if (number >= 100000000) {
    return `${(number / 100000000).toFixed(1)}亿 `;
  }
}
