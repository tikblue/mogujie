export default function (num, point) {
    let anum = num.toString()
    if (anum.length < 5) {
        return anum
    } else if (anum.length > 8) {
        let apoint = anum.substring(anum.length - 8, anum.length - 8 + point)
        return parseFloat(parseInt(num / 100000000) + '.' + apoint) + '亿'
    } else if (anum.length > 4) {
        let apoint = anum.substring(anum.length - 4, anum.length - 4 + point)
        return parseFloat(parseInt(num / 10000) + '.' + apoint) + '万'
    }
}

