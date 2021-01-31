function solve(arg1, arg2, arg3, arg4) {
    const x1 = Number(arg1);
    const y1 = Number(arg2);
    const x2 = Number(arg3);
    const y2 = Number(arg4);

    function distance(x1, y1, x2, y2) {
        const distanceX = x1 - x2;
        const distanceY = y1 - y2;
        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    }

    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
