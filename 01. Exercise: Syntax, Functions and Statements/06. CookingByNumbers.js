function solve(arg1, arg2, arg3, arg4, arg5, arg6) {
    let num = Number(arg1);

    const actions = {
        'chop': num => num /= 2,
        'dice': num => Math.sqrt(num),
        'spice': num => num += 1,
        'bake': num => num *= 3,
        'fillet': num => num *= 0.8
    }

    for (const command of Array.from(arguments).slice(1)) {
        num = actions[command](num);
        console.log(num);
    }
}
