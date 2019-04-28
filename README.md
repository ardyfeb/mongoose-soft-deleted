# Mongoose Soft Delete Plugin
A soft delete plugin for mongoose, inspired from [Laravel Soft Delete](https://laravel.com/docs/5.8/eloquent#soft-deleting)

## Installation
Using NPM `npm install mongoose-soft-deleted`
Using Yarn `yarn add mongoose-soft-deleted`

## Usage
- Mongoose (CommonJS)
```
const mongoose = require('mongoose')
const softDelete = require('mongoose-soft-deleted')

mongoose.plugin(softDelete({ excludeDeleted: false }))
```
- Typegoose (Typescript)
```
import { Typegoose, plugin } from 'typegoose
import softDelete from 'mongoose-soft-deleted'

@plugin(softDelete())
class SomeModel extends Typegoose {}
```

## Option
- `excludeDeleted` for exclude deleted document, currently affected only on `.find()` method

## Method
-  `softDeleteOne(<condition>, <option>)` deleting one document
- `softDeleteMany(<condition>, <option>)` deleting manu document
- `restoreOne(<condition>, <option>)` restore one deleted document
- `restoreMany(<condition>, <option>)` restore many deleted document

## Information 
Pull Request are welcome :)


