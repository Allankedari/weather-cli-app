// weather.js
const location = process.argv[2];

if (!location) {
    console.log("Please provide a location.");
    process.exit(1);
}


console.log(`Weather in ${location}: Summer, 30°C`);


