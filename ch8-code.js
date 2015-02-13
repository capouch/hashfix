
function buildChains() {
 for (var i = 0; i < this.table.length; ++i) {
 this.table[i] = [];
 }
}

function showDistro() {
 var n = 0;
 for (var i = 0; i < this.table.length; ++i) {
 if (this.table[i][0] !== undefined) {
 print(i + ": " + this.table[i]);
 }
 }
}

function put(data) {
 var key = this.betterHash(data);
 var index = 0;
 if (this.table[key][index] == undefined) {
 this.table[key][index] = data;
 }
 else {
 while (this.table[key][index] !== undefined) {
 ++index;
 }
 this.table[key][index] = data;
 }
}

function get(key) {
 var index = 0;
 var pos = this.betterHash(key);
 if (this.table[pos][index] == key) {
 return this.table[pos][index+1];
 }
 else {
 while (this.table[pos][index] != key) {
 index += 2;
 }
 return this.table[pos][index+1];
 }
 return undefined;
}

load("separatechain.js");
var hTable = new HashTable();
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
 "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; ++i) {
 hTable.put(someNames[i]);
}
for (var i = 0; i < someNames.length; ++i) {
 hTable.put(someNames[i]);
}
hTable.showDistro();

