const graphqlUrl = 'http://localhost:9000/'

async function fetchGreeting() {
    const response = await fetch(graphqlUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: `
            query{greeting}`
        })
    })
    const responseBody = await response.json();
    return responseBody.data;
}
fetchGreeting().then((data) => {
    const title = document.querySelector('h1');
    title.textContent = data.greeting;
});