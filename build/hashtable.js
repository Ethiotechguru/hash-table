class HashTable {
    constructor(_size, _data = []) {
        this._size = _size;
        this._data = _data;
        for (let i = 0; i < this._size; i++) {
            this._data.push([]);
        }
    }
    hashFunction(key) {
        let hash = 0;
        if (key.length === 0) {
            return hash;
        }
        for (let i = 0; i < key.length; i++) {
            let char = key.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    }
    hashKeyToIndex(key) {
        let hashKey = this.hashFunction(key);
        let index = hashKey % this._size;
        return index;
    }
    insert(key, value) {
        let hashIdex = this.hashKeyToIndex(key);
        let item = {};
        item[key] = value;
        this._data[hashIdex].push(item);
    }
    search(key) {
        let hashIdex = this.hashKeyToIndex(key);
        for (let i = 0; i < this._data[hashIdex].length; i++) {
            if (this._data[hashIdex][i].hasOwnProperty(key)) {
                return this._data[hashIdex][i];
            }
        }
        return null;
    }
    delete(key) {
        let hashIdex = this.hashKeyToIndex(key);
        for (let i = 0; i < this._data[hashIdex].length; i++) {
            if (this._data[hashIdex][i].hasOwnProperty(key)) {
                return this._data[hashIdex].splice(i, 1)[0];
            }
        }
        return null;
    }
    print() {
        for (let item of this._data) {
            console.log(item);
        }
    }
}
var t = new HashTable(16);
t.insert("Gavin", "This is Gaven's String");
t.insert("Carlo", "This is Carlo String");
t.insert("Michael", "This is Mike's String");
t.insert("Samuel", "This is Sameul's String");
t.insert("Garrett", "This is Garret's String");
t.insert("Justin", "This is Justin's String");
t.insert("Lidet", "This is Lidet's String");
t.insert("Piyi", "This is Piyi's String");
t.insert("Don", "This is Don's String");
t.insert("Justin", "This is Justin's String");
t.insert("Jose", "This is Jose's String");
t.insert("Madison", "This is Madison's String");
t.print();
var result = t.search('Madison');
console.log("result of search:", result);
result = t.delete('Samuel');
result = t.search('Samuel');
console.log("result of search for Samuele", result);
result = t.delete('Jose');
result = t.search('Jose');
console.log("result of search for Jose", result);
t.insert("Liul Belete", "this is Liuls string");
result = t.search("Liul Belete");
console.log("result of search for Liul", result);
//# sourceMappingURL=hashtable.js.map