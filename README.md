# @augustindev/modal
*Composant `Modal` create with `React`*.

## Installation and usage
install package **npm**.

> `yarn add @augustindev/modal`

Then use it in your app :

### With React Component

```jsx
import React, { useState } from 'react'
import { Modal } from "@augustindev/modal/dist"

export default function App() {

    const [stateModal, setStateModal] = useState(false)

    return (
        <Modal content='Text modale' show={stateModal} onClose={() => setStateModal(false)} />
    )
}

```

## Props

- `content` - Text show in Modal
- `show` - State Modal (Show/Hide).
- `onClose` - Callback function when user click on close button.
