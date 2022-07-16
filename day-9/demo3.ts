let global_num = 11         //global variable
class Numbers {
    num_val = 13;    //class variable
    static sval = 10;  //static field

    storeNum(): void {
        let local_num = 14;  //local variable
    }
}
console.log("Global num: " + global_num)
console.log(Numbers.sval)  //static variable
let obj = new Numbers();
console.log("Global num:" + obj.num_val)
