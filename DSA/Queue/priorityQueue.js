function PriorityQueue () {
    //var collection to collect all the element of the queue
    var collection = [];

    //this method to print all the element of the queue
    this.print = function(){
        // return collection;
        console.log(collection)
    }

    //this method used to add the elements into the queue according to the priority
    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element);
        }
        else{
            var added = false;
            for(var i=0; i<collection.length; i++){
                if(element[1]<collection[i][1]){
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            
            if(!added){
                collection.push(element);
            }
        }
    }



    //this method to delete the element from the beginning of the queue
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    }


    //this method to return the element at the beginning of the queue
    this.front = function() {
        return collection[0];
    }

    //this method to return the size of the queue
    this.size = function() {
        return collection.length
    }

    //this method used to check if the queue is empty or not
    this.isEmpty = function() {
        return (collection.length === 0)
    }
}

var q = new PriorityQueue();
q.enqueue(["Beau Carnes", 2])
q.enqueue(["Quincy Larson", 3])
q.enqueue(["Ewa Mitulska-Wojcik", 1])
q.print();
q.dequeue();
console.log(q.front());
q.enqueue(["satya", 4])
q.print();