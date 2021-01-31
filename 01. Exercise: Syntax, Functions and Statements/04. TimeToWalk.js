function solve(arg1, arg2, arg3) {
    const steps = arg1;
    const length = arg2;
    const speed = arg3;

    const distanceInMeters = steps * length;
    const metersPerSecond = speed / 3.6;
    const time = distanceInMeters / metersPerSecond;
    const restTime = Math.floor(distanceInMeters / 500);

    const mins = Math.floor(time / 60);
    const secs = Math.round(time - mins * 60);
    const hours = Math.round(time / 3600);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${mins + restTime < 10 ? '0' : ''}${mins + restTime}:${secs < 10 ? '0' : ''}${secs}`);
}
