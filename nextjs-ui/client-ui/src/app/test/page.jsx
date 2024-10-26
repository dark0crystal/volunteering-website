export default async function Test() {
    async function getPosts() {
        const res = await fetch('http://localhost:5287/api/Posts'); // Updated URL
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    }

    const data = await getPosts();

    return (
        <div>
            <h1>Test Page</h1>
            {data.map((post, index) => ( // Changed from data.products to data
                <h1 key={index}>{post.name}</h1> // Using post.name based on your API
            ))}
        </div>
    );
}
