# studioalloy

> WIJ MAKEN IMPACT MET PIXELS

## Build Setup

```bash
# install dependencies
$ yarn install # Or yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

## Adding new flex fields

1. Create the new fields in ACF
1. Run the file `apollo/queries/schema.gql` you can do this in a app called GraphiQL or if you have the VScode extention you'll get an `Execute Query` in the file
1. Modify the response from `{"data": {"__schema": {...}, }, }` to  `{"__schema": {...}, }`, stip off the `data` and make it `__schema` is on top of the file. Take a look at `apollo/client-configs/schema.json` for an example
1. Next add the new fields to where you call the queries for this project that is `pagesBySlug.gql` and `dienstenBySlug.gql`


For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
