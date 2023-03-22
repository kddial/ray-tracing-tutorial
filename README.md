# demo


https://3d.kevindial.com/

<img src="./public/3dworld-preview.png" width="200px" />


- on desktop, use WASD to move player and mouse to move screen
- on mobile, touch bottom left quadrant to move player and touch bottom right quadrant to move screen


# learning ray tracing (path tracer)

resource: https://raytracing.github.io/books/RayTracingInOneWeekend.html

vector library source: https://github.com/evanw/lightgl.js/blob/master/src/vector.js


```
yarn start
yarn build
```



# benchmarks

```
Should aim for 16ms.

1. simple javascript
249 ms to render 256 x 256

```


# to debug gpu.js

```
window.kernalFn = kernal.toString(cameraOrigin, cameraAngle)
console.log(window.kernalFn);
```

