// Linked List Object
function LinkedList () {
    var _head = {},
        _length = {
            value: 0
        };

    function addNode (data) {
        _length.value++;  // Increment list length

        // First Insert
        if(_head.data == undefined) {
            _head = new Node(data, null);
            this.head = _head;
            return _head;
        }

        // Thereafter Insertion
        var n = _head;
        while(n.next != null) {
            n = n.next;
        }
        n.next = new Node(data, null);
        return _head;
    }

    function deleteNode (data) {

        if(_head.data == undefined) {
            console.log("No nodes in the list");
            return _head;
        }

        var n = _head;

        // delete HEAD
        if(n.data == data) {
            _head = n.next == null ? {} : n.next;
            _length.value--;
            return _head;
        }

        // delete nodes after head
        while(n.next != null) {
            if (n.next.data == data) {
                n.next = n.next.next;
                _length.value--;
                return _head;
            };
            n = n.next;
        }

        console.log("Node not found!");
        return _head;
    }

    function printList () {
        
        if(_head.data == undefined) {
            console.log("List empty!");
            return;
        }
        
        var n = _head,
            str = 'HEAD => ' + n.data + ' => ';
        
        while(n.next != null) {
            n = n.next;
            str += n.data + " => ";
        }
        str += "NULL";
        console.log(str);
        return;
    }

    return {
        head: _head,
        length: _length,
        add: addNode,
        delete: deleteNode,
        print: printList
    }
}

// Node Object
function Node (data, next) {
    var _nextNode = next,
        _data = data;

    return {
        next: _nextNode,
        data: _data
    }
}