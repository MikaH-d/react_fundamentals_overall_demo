export default function EventDemo3() {
  return (
    <div>
      <h5>Logging the input to the console whenever the value changes: </h5>
      <p>enter the console in the developer tools</p>
        <input
            type="text"
            onChange={(e) => console.log('Input changed:', e.target.value)}
            placeholder="Type something..."
        />
    </div>
  );
}