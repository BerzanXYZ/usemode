# useMode hook
🌙 🌞 Simplest way to handle theming in React.js apps

> useMode is for applying dark and light mode easily, safely and quickly

> It saves theme to localstorage of the browser

> Supports TailwindCSS, but requires some settings

<br>

- You can use it like below
```jsx
const mode = useMode()
```
```jsx
<button onClick={mode.toggle}>Switch</button>

```

> Mode will be changed if the user clicks the button

<br>

This library needs TailwindCSS to be configured especially to work

> Add this line to tailwind.config.js 
```javascript
module.exports = {
   ...
   darkMode: 'class',
   ...
}
```

## Usage
- Import the library

```jsx
import useMode from "usemode"
```

- `mode` object has those `toggle`, `setSystem`, `setDark`, `setLight`, `name`, `isDark` properties

```jsx
const mode = useMode()
```

## Installation

#### NPM
```
npm i usemode
```

#### Yarn
```
yarn add usemode
```

## Docs

#### toggle()
```jsx
mode.toggle(): function
```
> Switches mode as dark and light

<br/>

#### setSystem()
```jsx
mode.setSystem(): function
```
> Applies system preferred mode

<br/>

#### setDark()
```jsx
mode.setDark(): function
```
> Applies dark mode if it hasn't been done yet

<br/>

#### setLight()
```jsx
mode.setLight(): function
```
> Applies light mode if it hasn't been done yet

<br/>

#### name
```jsx
mode.name: "light" || "dark"
```
> Name of the current mode

<br/>

#### isDark
```jsx
mode.isDark: true || false
```
> True, if dark mode is used currently. Otherwise, false.
