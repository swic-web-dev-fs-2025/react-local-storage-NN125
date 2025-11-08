# Nick Nolden

## 12-3 Reflection

### Questions

- What localStorage key did you use for your todos?

  - Like last time, my localStorage key is `tasks`.

- How did you structure each todo object? (e.g., just a string? an object with id and text?)

  - Each todo object is a JSON parsed one, but it falls back to a plain ol' string if the parsing fails.

  - ```js
    try {
        // try to parse JSON input (arrays, objects, numbers, booleans, etc.)
        newItem = JSON.parse(inputTrimmed);
    } catch {
        // if not valid JSON, keep as plain string
        newItem = inputTrimmed;
    }
    ```

- Open Developer Tools (F12), go to Application → localStorage, and take a screenshot showing your saved todos. Paste that screenshot in your reflection.

  - ![Screenshot showing Chrome's Dev Tools, and the current local storage of the app.](DevToolScreen.png)

- Explain what useEffect is doing inside the useLocalStorage hook. Why is it necessary?

  - `useEffect` saves whatever we give it (in this case, our tasks) to `localStorage`. This is necessary because React's main job is to update the UI based on the current state of the app. Using `useEffect` allows us to do necessary things, like saving to `localStorage`, after React is done updating the UI.

- When the user clicks "Add," which function runs first: the component's state setter or the useEffect?

  - The component's state setter runs first because `useEffect` runs after React updates the state.

### useEffect is **Not** a Magic Solution for Everything

`useEffect` sounds like it a great thing we should use all the time when we need to access something outside of React. However, that is not actually the case. Matter of fact, [you don't even need to use them](https://react.dev/learn/you-might-not-need-an-effect) most of the time. `useEffect` is a powerful tool, but it should only be used when it is absolutely needed. Saving things to `localStorage` is a good example of when you should use. Using `useEffect` for mundane things, like button clicks, input changes, or even handling the state, is completely unnessicary. `useState` exists for a reason. We should use that instead of `useEffect` for the state, or a custom hook that uses `useState`. Button clicks can simply use the `onClick` prop, and [`onChange`](https://react.dev/reference/react-dom/components/input) can be used for other input things.

### Things to Remember for Custom Hooks

Whenever you make a custom hook you should always start its name with `use` then the rest of the name (ie `useLocalStorage`). This tells React, along with every other developer on your team, that this is a hook. If you leave out `use`, it'll cause confusion, and worse, people using it like any other function.

Another thing to keep in mind is that you should never use a hook inside of a conditional thing, like an `if` statement. Doing it like that can cause the hook's call order to change every render. If you need to use conditionals, call the hook first, and then use the `if` statement.

```js
const [value, setValue] = useState(0);
if (!show) return null;
```

Lastly, you should avoid writing your hook calls that can cause an infinite render loop to occur. For example, if you tell your hook to update every time an array changes its length, it will make the state rerender for eternity (or until you run out of memory).
