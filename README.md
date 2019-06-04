# lcr
left|center|right frame
# contrast
```
Dont 16.0> too bright
AAA 16.0 very good
AA 7.0 good
A  4.5 low limit
B  2.0 wipe color
Dont <2.0 too dark
```
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
