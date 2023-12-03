import * as fs from "fs"

function parseData() {
  const testData = fs.readFileSync("adventData.txt", "utf8").toString()
  const formattedData = testData.split("\n")
  return isolateData(formattedData)
}

function isolateData(formattedData: string[]) {
  return formattedData.map((data) => {
    const matches = data.match(/\d/g)
    if (!matches) {
      return "No pattern found!"
    } else if (matches.length === 1) {
      return matches[0].repeat(2)
    } else {
      return matches[0] + matches[matches.length - 1]
    }
  })
}

function addIsolatedData() {
  const isolatedData = isolateData(parseData())
  let total = 0
  isolatedData.forEach((data) => {
    if (!isNaN(Number(data))) {
      total += Number(data)
    }
  })
  console.log(total)
  return total
}

const completedData = addIsolatedData()
console.log(completedData)
