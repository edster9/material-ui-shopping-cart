# material-ui-shopping-cart &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]

## Introduction

This project shows a simple static shopping cart done in ReactJS. It is coded to demonstrate state management of the application using the React Context API. It also utilizes Typescript and the Material-UI framework.

### Tech Stack

This test project is a javascript application using the following tech stacks.

- **ReactJS:** 17.1
- **TypeScript:** 4.1.2
- **Material UI:** 4.12.3

## Installation

### Requirements

- Any PC or MAC with NodeJS 12+ installed.
- Git command line tool
- There are no needs for local web servers or databases

### Repo Install

The project can be cloned from GitHub for free with the following command

``` bash
git clone https://github.com/edster9/material-ui-shopping-cart

cd material-ui-shopping-cart
yarn
```

### Usage

``` bash
yarn start
```

### TODO

- Add lite JSON REST server for loading shopping card data
- Add unit tests

## Design Consideration

### Typescript

Typescript adds strong type safety to the project. This does increase the amount of code overall but the benefits of strong type safety reduces the errors in the long run.

### Context API

ReactJS has many choices for application level state management. The Context API was chosen over Redux to demonstrate the its features. Context API has the capability to create separate reducers and contexts very similar to Redux.

### Material UI

Material UI framework is used here as the UI framework. This is ReactJS specific framework and allows for very fast layout design for desktop and mobile browsers.
