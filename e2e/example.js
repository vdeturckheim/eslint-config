'use strict';

const item = {};
eval('item.x = 1;');
console.log(JSON.stringify(item));
