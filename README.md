# lcr
left|center|right frame
# dev
https://codepen.io/gnjo/pen/arXVoG
# demo
https://codepen.io/gnjo/pen/NVJYKP
# usage
```
//pug
head
 link(href="https://gnjo.github.io/lcr/lcr.css" rel="stylesheet")
 script(src="https://gnjo.github.io/lcr/lcr.js")
body
```
```lcr(leftWidth,centerWidth,rightWidth)``` or ```lcr(centerWidth)```
```
let app=lcr('auto','50rem','auto')
app.sethtml('<div class="lay">xyz</div>','c')
app.l //element
app.c //element
app.r //element

```
# useful class
```
.lay
```
