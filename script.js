const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    // Filter countries from Asia continent/region
    const asiaCountries = data.filter((country) => country.region === "Asia");

    console.log("Countries from Asia:");
    asiaCountries.forEach((country) => {
      console.log(
        `Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`
      );
    });

    // Filter countries with population less than 200,000
    const lowPopulationCountries = data.filter(
      (country) => country.population < 200000
    );

    console.log("\nCountries with population less than 200,000:");
    lowPopulationCountries.forEach((country) => {
      console.log(
        `Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`
      );
    });

    // Calculate total population using reduce function
    const totalPopulation = data.reduce(
      (acc, country) => acc + country.population,
      0
    );

    console.log(`\nTotal population of all countries: ${totalPopulation}`);

    // Find country that uses US dollars as currency
    const usDollarCountry = data.find((country) => {
      return country.currencies && country.currencies.USD;
    });

    if (usDollarCountry) {
      console.log(
        `\nCountry that uses US dollars as currency: ${usDollarCountry.name.common}`
      );
    } else {
      console.log("\nNo country uses US dollars as currency.");
    }
  }
};
xhr.send();
