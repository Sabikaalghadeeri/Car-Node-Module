// module.exports.beBasic = () => console.log("Hello Module")

// class Car {
//     constructor(color, convertible){
//         this.color= color
//         this.convertible = convertible
//         this.speed = 0
//     }

//     accelerate(num){
//         this.speed += num
//     }
//     declerate(num){
//         this.speed -= num
//     }

// }



module.exports = class Car {
    constructor(color, convertible){
        this.color= color
        this.convertible = convertible
        this.speed = 0
    }

    accelerate(num){
        this.speed += num
    }
    decelerate(num){
        this.speed -= num
    }

}