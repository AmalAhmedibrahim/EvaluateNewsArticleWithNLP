function handleSubmit(event) {
    event.preventDefault()
    let inputText = document.getElementById('input-text').value;

    if (Client.validateURL(inputText)) {

        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/result', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: inputText }),
        }).then(res => res.json())
            .then(function (res) {
                console.log(res);
                document.getElementById('polarity').innerHTML = res.polarity;
                document.getElementById('subjectivity').innerHTML = res.subjectivity;
                document.getElementById('confidence').innerHTML = res.polarity_confidence;
                document.getElementById('subjectivity-c').innerHTML = res.subjectivity_confidence;
            }).catch(err => {
                console.log(err);
            });
    } else {
        alert("Please Enter a Valid URL ");
    }
}

export { handleSubmit }
