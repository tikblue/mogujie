export default function (fun, ...arg) {
    let timer = null
    return (time = 10) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fun.apply(this, arg);
        }, time);
    };

}