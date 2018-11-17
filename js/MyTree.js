function create_root() {
    var tree = new Tree();
    return tree;
}


function Node(id, data) {
    this.id = id
    this.data = data;
    this.children = [];
}

function Tree() {
    this.root = null;
}

Tree.prototype.add_node = function(id, data, toNodeid) {
    var node = new Node(id, data);
    var parent = toNodeid ? this.findBFS(toNodeid) : null;
    if (parent) {
        parent.children.push(node);
    } else {
        if(!this.root) {
            //add to empty tree
            this.root = node;
        } else {
            //root node is already assigned
            return;
        }

    }
};

Tree.prototype.delete_node = function(data) {
    if(this.root.data === id) {
        this.root = null;
        return;
    }

    //BFS
    var queue = [this.root];
    while(queue.length) {
        var node = queue.shift();
        for(var i = 0; i < node.children.length; i++) {
            if (node.children[i].id === id) {
                node.children.splice(i, 1); //remove node
            } else {
                queue.push(node.children[i]);
            }
        }
    }
};

//breadth first search
Tree.prototype.findBFS = function(id) {
    var queue = [this.root];
    while(queue.length) {
        var node = queue.shift();
        if(node.id === id)
            return node;
        for(var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
    return null;
};

Tree.prototype.render = function() {

}
