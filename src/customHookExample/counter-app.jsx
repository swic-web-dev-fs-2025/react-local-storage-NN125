import useCount from "./useCount";

export default function counterApp() {
  const { count, increment, decrement } = useCount(0);

  // Runs after EVERY render
  useEffect(() => {
    console.log("Runs every render");
  });

  // Runs only ONCE, after the first render
  useEffect(() => {
    console.log("Runs only once");
  }, []);

  // Runs whenever 'count' changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // Runs whenever 'count' OR 'name' changes
  useEffect(() => {
    console.log("Count or name changed");
  }, [count, name]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
