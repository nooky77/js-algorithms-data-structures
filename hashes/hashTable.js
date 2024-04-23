class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size);
    }
    _index(str) {
        let total = 0;
        const PRIME = 31;
        for(let i = 0; i < Math.min(str.length, 100); i++){
            total = (total * PRIME + (str[i].charCodeAt(0) - 96)) % this.keyMap.length;
        }
        return total;
    }
    set(key, value){
        let index = this._index(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        return this;
    }
    get(key){
        let index = this._index(key);
        if(this.keyMap[index]){
            for(let value of this.keyMap[index]){
                if(value[0] === key) return value[1];
            }
        }
        return undefined;
    }
    keys(){
        let arrKeys = [];
        for(let arr of this.keyMap){
            if(arr){
                for(let ele of arr){
                    if(!arrKeys.includes(ele[0])){
                        arrKeys.push(ele[0]);
                    }
                }
            }
        }
        return arrKeys;
    }
    values(){
        let arrValues = [];
        for(let arr of this.keyMap){
            if(arr){
                for(let ele of arr){
                    if(!arrValues.includes(ele[1])){
                        arrValues.push(ele[1]);
                    }
                }
            }
        }
        return arrValues;
    }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")