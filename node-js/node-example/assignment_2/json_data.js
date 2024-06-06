console.log("-------------JSON Values------------");

const data=require("./testdata.json");
console.log("Name : ", data.Name);
console.log("Course Name : ", data.Course.Name);
console.log("Batch : " , data.Course.Batch);
console.log("Conducted By: ", data.Conducted_By);
console.log("Place : ", data.Place);