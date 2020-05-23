const app=require("./app");
const supertest=require("supertest");
const request=supertest(app);

test("suma endpoint",async done=>{
    const response=await request.get("/add?value1=2&value2=3");
    expect(response.body.result).toBe(5);
    done();
}); 