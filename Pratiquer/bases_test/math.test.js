const math = require("./math.js");
console.log(math);

it("adds 1 + 2 equal 3", ()=> {
    expect(math.sum(1,2)).toBe(3);
})

it("removes 2-1 equal 1", ()=>{
    expect(math.remove(2,1)).toBe(1);
})