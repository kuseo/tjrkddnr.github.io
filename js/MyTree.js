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

// data of graphic element = {function: function name
                        //   parameters: {
                        //      posX: ??
                        //      posY: ??
                        //   }}
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
    // BFS
    var queue = [this.root];
    while(queue.length) {
        var node = queue.shift();
        // render
        func_array[node.data.function]('canvas', node.data.parameters);
        for(var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
}

Tree.prototype.printClickeObject = function(x, y) {
    // BFS
    var queue = [this.root];
    var msg;
    while(queue.length) {
        var node = queue.shift();
        
        var objInfo = node.data.parameters;

        if (objInfo.posX <= x && x <= objInfo.posX + objInfo.width &&
            objInfo.posY <= y && y <= objInfo.posY + objInfo.height) {
            msg = node.id;
        } 
        
        for(var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
    alert("You have clicked " + msg);

}

// mouse callback routine
function init(tree){
    var canvas = document.getElementById("canvas");
    canvas.addEventListener("mousedown", function(event){getPosition(event, tree)}, false);
}

function getPosition(event, tree){
    var x = new Number();
    var y = new Number();
    var canvas = document.getElementById("canvas");

    if (event.x != undefined && event.y != undefined) {
        x = event.x;
        y = event.y;
    } else {
        console.log('Error');
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    tree.printClickeObject(x, y);
}