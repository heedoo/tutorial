
//This way you don't need to use if else statement. ... + && combination handles it
const func = (payload, update = false) => {

    const {id, name} = payload;

    return {
        ...update && {myId: id},
        name: name
    }
}

//how to merge
const func2 = (addition) => {

    const payload = {
        ...addition,
        name: 'John',
        age: '30'
    }

    return payload;
}