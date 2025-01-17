function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        let pattern = /^pet_[a-zA-Z0-9]+$/;
    
        // Check if the input matches the regex pattern
        if (pattern.test(input)) {
            result = 'Valid input! 🎉';
        } else {
            result = 'Invalid input!❌';
        }
            document.getElementById('result').innerText = result;
}


