fetch('countries.json')
    .then(response => response.json())
    .then(data => {
        const select = document.getElementById('countrySelect');
        data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = country.name;
            select.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching countries data:', error);
    });