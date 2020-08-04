# Emotic React

> Collect user feedback in your React app

[![NPM](https://img.shields.io/npm/v/emotic.svg)](https://www.npmjs.com/package/emotic) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add --save emotic-react
```

## Usage

```tsx
import React, { Component } from 'react'

import { Emotic } from 'emotic-react'

class Example extends Component {
  render() {
    return <Emotic/>;
  }
}
```

## Development

1. Launch library hot reload server
    
   ```bash
   yarn
   yarn start
   ```
   
1. Launch storybook to preview the component
   
   ```bash
   cd ../story
   yarn
   yarn start
   ```
   
1. Visit `http://localhost:6006` to view the widget.

## License

MIT © [short-d](https://github.com/short-d)
