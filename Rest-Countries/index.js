const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    const 
    const CountryHtmls = countries.map(country => getCountry(country));
console.log(CountryHtmls);
}

const getCountry = country => {
    return `
<div>
<h2>${country.name}</h2>
<h4>Capital : ${country.capital}</h4>
<img src ="${country.flag}">

</div>

`
}

loadCountries();