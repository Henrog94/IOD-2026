const button = document.getElementById('calculateButton');

button.addEventListener('click', async () => {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;
    const result = document.getElementById('result');

    if (num1 === '' || num2 === '') {
        result.textContent = 'Please enter both numbers.';
        return;
    }

    try {
        const response = await fetch(`/${operation}?num1=${encodeURIComponent(num1)}&num2=${encodeURIComponent(num2)}`);
        const data = await response.json();

        if (!response.ok) {
            result.textContent = data.error || 'An error occurred.';
            return;
        }

        result.textContent = `Result: ${data.result}`;
    } catch (error) {
        result.textContent = 'Unable to contact the server.';
        console.error(error);
    }
});
