# Nick Nolden

## 13-1 Reflection

### Template Repair

I had a sneaking suspicion this was going to be a part of the assignment considering the fact that Tailwind didn't work for me while working on that unneeded custom app. I also didn't realize it went deeper than tailwind. Honestly I also find it insane that the Vite + React repo ignores the VS Code files by default.

Anyway, after fixing up some of the problems, removing unneeded things, and getting Tailwind imported to the CSS properly, I was able to to use the Tailwind classes again. I had no idea how much I missed it. I did go ahead and add a bunch of Tailwind classes to the Todo list branch's `app.jsx` since there were no custom classes listed in the CSS files anymore. It's definitely much quicker to add Tailwind classes than making custom ones in a stylesheet. With that said, old fashioned custom classes made things a lot cleaner to look at in my `button-state` branch. I do wanna re-learn how to make [reusable custom classes with Tailwind](https://tailwindcss.com/docs/adding-custom-styles) at some point, just to make things a little cleaner to look at, but doing things how we've been doing this whole semester has been working out fine.

### Todo Lesson, Again

We're going through the todo lesson, again, but there have been some minor touch ups that have been covered in a new video added to the page.

First it went over the starting code where there was a lot of repetition. To cut down on it, we made a custom hook that takes `useState` and whatever else we want to use (`useEffect` in our case) that does all the work. We would now only need to call that hook whenever we need to do some repetitive thing. Matter of fact, that's why there is an ESLint rule that tells us that we should use a custom hook instead of using `useState` directly.

`useEffect` is how we call/do things outside of React, and we should use it [very sparingly for very specific things](https://react.dev/learn/you-might-not-need-an-effect), like with `localStorage` for example. If we want to use an effect for something else, like something similar to a button `onClick`, then you don't need it. If you do use it, depending on how it's being used, you would also need to include a callback function so memory leaks don't occur (`return () => {code}`). You'd also need a [dependency array](https://react.dev/reference/react/useEffect#specifying-reactive-dependencies) to help prevent memory leaks as well.

With all that in mind, we can use that to make a hook to handle `localStorage` for us, which is great. Reusable hooks/components is always a plus in my book. There is also a pre-made one we can install with `npm`, and I originally used it, but I went back to the in-class hook for my own learning benefit.

All in all, this was a good reinforcement of `useEffect` and that we should only use it for specific purposes.

### Todo Solution

The result that I ended up with is very similar to the "official solution" to the assignment. With that said there are a few notable differences. The first one is the fact that the official solution uses `uihookdev`'s `useLocalStorage`. I did use it at first, but I switched to the in-class one. I will say that `uihookdev`'s version is miles better.

Another difference is how the app is styled. Both are relatively basic, but the official solution went for a darker look while I went for a lighter look. We both use unordered lists, but I had dots next to each task, while the official solution had a line in-between each todo. I also noticed that the tasks in the official solution stores not just what you typed in, but also an id.

Speaking of the tasks, they are inputted in using a text bar (or `<input>` tag). In mine, it was just a simple one, with an id of `newTask`. The official solution has `todo-input` for its id, and it is a much better name than what I came up with. The official version also has an [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), something I haven't mentioned in a bit. The input tag on the official solution uses an `onBlur` prop, which gets triggered when you click away from it, like say, clicking a button. The code attached is shorter than how my `onClick` turned out, since that handled the text inside, and made it a new todo. Matter of fact, the official solution doesn't even have an `onClick`. `onBlur` in this case is a different route to the same destination. In short, I think the code contents of the official version's `onBlur` looks a lot cleaner and shorter than how I did it.

As for how we handled adding the things to an unordered list, we ended up doing relatively the same. We both use an `index`, which is needed for dynamically added things to prevent React from acting up. As for me though, I had a ternary statement that converted most non-strings to strings using `JSON.stringify`, which looking back I didn't need since `useLocalStorage` does that stuff for me.

In short, our codebases ended up being pretty different, but with the same end result, as expected.
