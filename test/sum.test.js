const sum = require("./../dist/sum");
const { TestScheduler } = require("jest");
test("hellojest",()=>{
    let ret = sum(1,2);
    expect(ret).toBe(3);
});  