
Run `npm i postcss-rpx2rem-loader -D` in the root directory of your project.

Now you can use `rpx` in your style sheets.

```css
div {
  height: 20rpx;  
}
```

```css
div {
  height: 0.20rem;
}
```

## Integrate with Vue CLI

Run `npm i px2rpx-loader -D` in the root directory of your project.

In `package.json`

```json
{
  "name": "",
  "version": "",
  // ...
  "postcss": {
    "plugins": {
      "autoprefixer": {},
      "px2rpx-loader": { "fontSize": 100 } // Add root fontsize(default 100)
    }
  }
}
```
