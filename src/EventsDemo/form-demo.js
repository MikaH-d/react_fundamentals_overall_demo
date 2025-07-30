export default function FormDemo() {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Form submitted!');
    }

    return (
    <div>
      <h1>Form Demo:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name"/>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}