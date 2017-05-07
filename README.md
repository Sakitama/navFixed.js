# navFixed.js
## 简介
navFixed.js 是一款超轻量级的 jQuery 插件。它可以让原本不固定在顶部的导航条，在滚动到它的位置时固定在顶部，移动端表现良好。
## 使用方法
1. navFixed.js 依赖于 jQuery，在引入 jQuery 后，再引入 navFixed.js 。
2. 然后在 $(function(){}) 里使用 $(selector).navFixed() 即可。
## 注意事项
需要定位的元素里初始状态下不能有`style`属性，因为本插件是在滚动到它的位置时通过添加行内样式实现固定，撤销的时候会把整个行内样式清空。可以通过动态添加`class`来解决，但是略显繁琐。而且标准不建议使用行内样式。