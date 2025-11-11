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
