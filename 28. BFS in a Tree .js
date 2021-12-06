class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    search(value){
        if(this.root === null){
            return false;
        }
        if(value === this.root.value){
            return true;
        }
        var found = false;
        var current = this.root
        while(current && !found){
            if(value > current.value){
                current = current.right;
                
            }
            else if(value < current.value){
                
                current = current.left
                
            }
            else{
            found = true
            }

        }
        return current; 
    }
    BFS(){
        var node = this.root 
        var a =[];
        var data = [];
        a.push(node);   //We are pushing the whole Node in array not the Node value
        while(a.length){
            node = a.shift();
            data.push(node.value);
            if(node.left) a.push(node.left);
            if(node.right) a.push(node.right);
        }
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(100);
tree.insert(80);
tree.insert(1);
tree.insert(20);
tree.insert(31);
tree.insert(105);
tree.insert(400);
