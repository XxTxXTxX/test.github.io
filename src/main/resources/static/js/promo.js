//图片地址数组。我用的网络图。你可以自行替换
let imgArr = ["https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile03.16sucai.com%2F2016%2F10%2F1100%2F16sucai_p20161004049_098.JPG&refer=http%3A%2F%2Ffile03.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627526069&t=254d86f033e2279617c40b2035e57849",
"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.soutu123.com%2Felement_origin_min_pic%2F16%2F10%2F09%2F0257f936320f509.jpg%21%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.soutu123.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627526146&t=d429d67bd3e56f8f7ff772debe79aff6",
"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzkres1.myzaker.com%2F202110%2F615d7753b15ec03a1072d375_1024.jpg&refer=http%3A%2F%2Fzkres1.myzaker.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664502719&t=37790778733d4de05824630bc34b65d1"
]

let img = document.getElementById("img"); //img标签
let pret = document.getElementById("pret"); //上一个按钮dom
let next = document.getElementById("next"); //下一个按钮dom
var i = 0;
defaultImg(imgArr, img, i);
next.addEventListener("click", () => {
nextFn(imgArr, img)
})
pret.addEventListener("click", () => {
prextFn(imgArr, img)
})
function defaultImg(arr, img, index) { //默认的图片  arr-图片数组 。img是图片dom，index-是下标 text-是文字标签dom
img.src = arr[index];
}
function prextFn(arr) { //上一张
if (i == 0) {
    i = arr.length - 1;
    img.src = arr[arr.length - 1];//加上这个就是到了第一张，再次点击就回到最后一张，不想要可以注释
    return
}
i--;
img.src = imgArr[i];
}
function nextFn(arr) { //下一张
if (i == arr.length - 1) {
    i = 0;
    img.src = arr[0]; //加上这个就是到了最后一张，再次点击就回到第一张，不想要可以注释
    return
}
i++;
img.src = arr[i];
}