
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

