
let counter = 0;
let notify = (target, prop)=>{
    counter++;
};

let createTarget = ()=>{
    return {
        id: Math.round(Math.random()*100000),
        v: {
            age: Math.round(Math.random()*100),
        },
        new_v: Math.round(Math.random()*100000),
    }
}

let n = 10000000

counter = 0;
let items = []

let testFunc1 = eval(`(target, prop, value, twin) => {
    if(target.v.age !== value) {
        target.v.age = value;
        notify(target, 'age');
    };
}
`);

let testFunc2 = (target, prop, value, twin) => {
    if(target.v[prop] !== value) {
        target.v[prop] = value;
        notify(target, prop);
    };
};



console.log(`Test with n=${n}`);


for(let j=0; j<10; j++) {
    counter = 0;
    items = []
    for (let i = 0; i < n; i++)
        items.push(createTarget())

    console.time(`func`);
    for (let item of items) testFunc2(item, 'age', item.new_v);
    console.timeEnd(`func`);
}

for(let j=0; j<10; j++) {
    counter = 0;
    items = []
    for(let i=0;i<n;i++)
        items.push(createTarget())

    console.time(`eval`);
    for(let item of items) testFunc1(item, 'age', item.new_v);
    console.timeEnd(`eval`);
}

