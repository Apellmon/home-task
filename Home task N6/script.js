const testObject = {
    id:1,
    email: "test@test.com",
    firstName: "Peter",
    lastName: "Parker",
    isAdmin: true,
    fff:{hghg:3}

}
const testObject2 = {    id:1,
    email: "test@test.com",
    firstName: "Peter",
    lastName: "Parker",
    isAdmin: true,
    fff:{hghg:2}}

function copy (target,origin) {
    let terget = {};
    for (let key in origin){
           target[key] = origin[key];
    }
    return target;
}

function isEqual(object1, object2) {
    const objectKey = Object.keys(object1);
    const objectKey2 = Object.keys(object2);

    if (objectKey.length !== objectKey2.length) {
        return false
    }
    for (i = 0; i <= objectKey.length; i++) {
        const key = objectKey[i];
        const isObject = typeof (object1[key]) === "object" && typeof (object2[key]) === "object";
        console.log(isObject);

        if ((!isObject && (object1[key] !== object2[key])) || (isObject && !isEqual(object1[key], object2[key]))) {
            return false;
        }
    }

    return true;
}

function countChars_long(str) {
    const result = {};
    const chars = str.split("");

    for (i = 0; i < chars.length; i++) {
        let count = 0;
        for (j = 0; j < chars.length; j++) {
            if (chars[i] === chars[j]) {
                count++
            }
        }
        result[chars[i]] = chars[i] + count;
    }

    return result
}


