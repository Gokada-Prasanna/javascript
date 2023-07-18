function Queue(){
    //Let collection to collect all the items of the queue
    let collection = [];

    //this method to print all the item of the queue
    this.print = function(){
        console.log(collection);
    }

    //this method used to push an element into the queue at the end of the array
    this.enqueue = function(element){
        collection.push(element);
    }

    //this method used to delete an element from the beginning of the queue
    this.dequeue = function(){
        return collection.shift();
    }

    //this method used to display the beginning element of the queue 
    this.front = function(){
        return collection[0]
    }

    this.end = function(){
        return collection[collection.length-1];
    }

    //this method used to return the size of the queue
    this.size = function() {
        return collection.length;
    }

    //this method used to 
    this.isEmpty = function(){
        return (collection.length === 0);
    }
}



var q = new Queue();
q.enqueue("a")
q.enqueue("b")
q.enqueue("c")
q.print();
q.dequeue();
console.log(q.front());
q.enqueue("d")
console.log(q.end());
q.print();