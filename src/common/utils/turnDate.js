export default function (stamp) {
      let date = new Date(stamp * 1000)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

