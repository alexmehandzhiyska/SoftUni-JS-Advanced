function solve(arg1, arg2) {
    const speed = arg1;
    const area = arg2;

    const limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }

    const limit = limits[area]


    if (speed - limit <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (speed - limit <= 20) {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - speeding`);
    } else if (speed - limit <= 40) {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - excessive speeding`);
    } else {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - reckless driving`);
    }
}
