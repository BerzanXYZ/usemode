# useMode hook
🌙 🌞 Simplest way to handle theming in React.js apps

> useMode() hook is for all your theming purposes

> It saves theme to localstorage of the browser

> Supports TailwindCSS, but requires some settings

<br>

- You can use it like below
```jsx
const { toggleMode } = useMode()

return (
  <button onClick={toggleMode}> Click </button>
)
```

## Usage
- It has those `modeName`, `isDarkMode`, `setDarkMode`, `setLightMode`, `toggleMode`

```jsx
const { toggleMode, setDarkMode, setLightMode, modeName, isDarkMode } = useMode()
```

## Docs

#### toggleMode()
```jsx
toggleMode(): function
```
> Switches mode as dark and light

<br/>

#### setDarkMode()
```jsx
setDarkMode(): function
```
> Applies dark mode if it hasn't been done yet

<br/>

#### setLightMode()
```jsx
setLightMode(): function
```
> Applies light mode if it hasn't been done yet

<br/>

#### modeName
```jsx
modeName: "light" || "dark"
```
> Name of the current mode

<br/>

#### isDarkMode
```jsx
isDarkMode: true || false
```
> True, if dark mode is used currently. Otherwise, false.
