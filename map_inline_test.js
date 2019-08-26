let n = 10000000;
let a = [];

const init = ()=>{
    a = [];
    for(let i=0; i<n; i++)
        a.push(i%13);
};

const f_for = ()=>{
    let s = 0;
    for(let i=0; i<n; i++)
        s += a[i];
};

const f_for_of = ()=>{
    let s = 0;
    for(let v of a)
        s += v;
};

const f_map = ()=>{
    let s = 0;
    a.map((v)=>{
        s += v;
    })
};

console.log(`\n\n\nn=${n}, cycle 1 `);
console.time('init');
init();
console.timeEnd('init');

console.time('for');
f_for();
console.timeEnd('for');

console.time('for_of');
f_for_of();
console.timeEnd('for_of');

console.time('map');
f_map();
console.timeEnd('map');

console.log(`\n\n\nn=${n}, cycle 2 - same data, after v8 optimization finished`);

console.time('for');
f_for();
console.timeEnd('for');

console.time('for_of');
f_for_of();
console.timeEnd('for_of');
console.log(`HINT: Now for_of is faster, because v8 optimized it after many inefficient runs.`)


console.time('map');
f_map();
console.timeEnd('map');
console.log(`HINT: but map.`)

console.log(`\n\n\nn=${n}, cycle 3 - recreate data`);

console.time('init');
init();
console.timeEnd('init');

console.time('for');
f_for();
console.timeEnd('for');

console.time('for_of');
f_for_of();
console.timeEnd('for_of');

console.time('map');
f_map();
console.timeEnd('map');

console.log(`\n\n\nn=${n}, BENCHMARK FINISHED!`);
