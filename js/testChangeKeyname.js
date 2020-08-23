let testObject = {
    id : 100,
    name : "Taro"
};

console.log(testObject);

testObject.new_id = testObject.id;
delete testObject.id;

console.log(testObject);