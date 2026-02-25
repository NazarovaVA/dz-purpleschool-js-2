class Car{
    #_stamp;
    #_model;
    #_mileage;
    constructor (stamp,model,mileage){
        this.#_stamp = stamp;
        this.#_model = model;
        this.#_mileage = mileage;
    };
    get mileage(){
        return this.#_mileage;
    };
    set mileage(newMileage){
        this.#_mileage = newMileage;
    }
     info(){
        console.log(this.#_stamp, this.#_model, this.#_mileage);
     }
};

const BMW = new Car('BMW','X5',30000);
BMW.info();
BMW.mileage = 0;
BMW.info();