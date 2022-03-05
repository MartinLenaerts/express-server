# Express server project

This project is used to run built projects 

## Install

Run `yarn install` to install project

## Run
 
Run `yarn start --path [path-to-built-project-directory]`

## Exceptions that can be thrown


### Path argument not found

 ```
 'path' argument is expected !
 ``` 

 The `path` argument is missing please check the syntax 
 
 To give an argument please tap  `--path` after command `yarn start`

 ---

### Built directory doesn't exist

```
[path-to-built-project-directory] doesn't exist ! Please give a valid path !
```

The `path` is not found , please check that the directory exists