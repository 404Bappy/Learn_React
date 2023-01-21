const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    const container = document.getElementById('countries');
    const CountryHtmls = countries.map(country => getCountry(country));

    container.innerHTML = CountryHtmls;
    console.log(CountryHtmls);
}

const getCountry = country => {

    const {name, capital, flag, subregion, borders} = country;
    return `
<div class ="country">
<h2>${name}</h2>
<h4>Capital : ${capital}</h4>
<img src ="${flag}">
<h5>Subregion: ${subregion}</h5>
<h5>Borders : ${borders}</h5>


</div>

`
}

loadCountries();