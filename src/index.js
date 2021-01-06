const car = {
    color: 'blue'
}
const handler = {
    
    get(target, property) {
        // return NOT FOUND if property does not exist
      return target[property] || 'Not found'
    }
}


const proxyObject = new Proxy(car, handler)

console.log(`proxyObject.white: ${proxyObject.white}`)
console.log(`car.white: ${car.white}`)