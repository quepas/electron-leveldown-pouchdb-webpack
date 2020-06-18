# electron-leveldown-pouchdb-webpack

"Hey, webpack? Why don't you see me." - said leveldown.
"In electron environment..." - whispered.

## In the webpack world

Instead of using this:


```json
const webpack = require("webpack");
{
   ...
   plugins: [new webpack.ExternalsPlugin("commonjs", ["leveldown"])]
}
```

You can also use [this](https://github.com/pouchdb/pouchdb/issues/7807#issuecomment-524543522):

```json
{
   ...
   externals: {
      "pouchdb": "require('pouchdb')"
   }
}
```