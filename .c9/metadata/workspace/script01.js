{"filter":false,"title":"script01.js","tooltip":"/script01.js","undoManager":{"mark":98,"position":98,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":43}},"text":"function StaffMember(name,discountPercent){"},{"action":"insertText","range":{"start":{"row":0,"column":43},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":43,"column":0}},"lines":["    this.name = name;","    this.discountPercent = discountPercent;","}","","var sally = new StaffMember(\"Sally\",5);","var bob = new StaffMember(\"Bob\",10);","","// Create yourself again as 'me' with a staff discount of 20%","var me = new StaffMember(\"Leon\",20);","","var cashRegister = {","    total:0,","    lastTransactionAmount: 0,","    add: function(itemCost){","        this.total += (itemCost || 0);","        this.lastTransactionAmount = itemCost;","    },","    scan: function(item,quantity){","        switch (item){","        case \"eggs\": this.add(0.98 * quantity); break;","        case \"milk\": this.add(1.23 * quantity); break;","        case \"magazine\": this.add(4.99 * quantity); break;","        case \"chocolate\": this.add(0.45 * quantity); break;","        }","        return true;","    },","    voidLastTransaction : function(){","        this.total -= this.lastTransactionAmount;","        this.lastTransactionAmount = 0;","    },","    applyStaffDiscount: function(employee)     { this.total *= ((100 - employee.discountPercent)/100);","    }","};","","cashRegister.scan('eggs',1);","cashRegister.scan('milk',1);","cashRegister.scan('magazine',3);","// Apply your staff discount by passing the 'me' object ","cashRegister.applyStaffDiscount(me);","","","// Show the total bill"]},{"action":"insertText","range":{"start":{"row":43,"column":0},"end":{"row":43,"column":59}},"text":"console.log('Your bill is '+cashRegister.total.toFixed(2));"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":10},"end":{"row":43,"column":11}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":9},"end":{"row":43,"column":10}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":8},"end":{"row":43,"column":9}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":7},"end":{"row":43,"column":8}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":6},"end":{"row":43,"column":7}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":5},"end":{"row":43,"column":6}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":4},"end":{"row":43,"column":5}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":3},"end":{"row":43,"column":4}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":2},"end":{"row":43,"column":3}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":1},"end":{"row":43,"column":2}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":0},"end":{"row":43,"column":1}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":0},"end":{"row":43,"column":1}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":1},"end":{"row":43,"column":2}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":2},"end":{"row":43,"column":3}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":3},"end":{"row":43,"column":4}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":4},"end":{"row":43,"column":5}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":5},"end":{"row":43,"column":6}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":6},"end":{"row":43,"column":7}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":0},"end":{"row":42,"column":22}},"text":"// Show the total bill"},{"action":"insertText","range":{"start":{"row":42,"column":0},"end":{"row":42,"column":1}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":1},"end":{"row":42,"column":2}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":2},"end":{"row":42,"column":3}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":3},"end":{"row":42,"column":4}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":4},"end":{"row":42,"column":5}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":4},"end":{"row":42,"column":5}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":3},"end":{"row":42,"column":4}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":2},"end":{"row":42,"column":3}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":1},"end":{"row":42,"column":2}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":0},"end":{"row":42,"column":1}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":0},"end":{"row":42,"column":1}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":1},"end":{"row":42,"column":2}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":2},"end":{"row":42,"column":3}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":3},"end":{"row":42,"column":4}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":4},"end":{"row":42,"column":5}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":5},"end":{"row":42,"column":6}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":6},"end":{"row":42,"column":7}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":7},"end":{"row":42,"column":8}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":8},"end":{"row":42,"column":9}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":9},"end":{"row":42,"column":10}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":10},"end":{"row":42,"column":11}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":11},"end":{"row":42,"column":12}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":12},"end":{"row":42,"column":13}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":13},"end":{"row":42,"column":14}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":14},"end":{"row":42,"column":16}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":16},"end":{"row":42,"column":17}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":17},"end":{"row":42,"column":18}},"text":"{"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":55},"end":{"row":44,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":0},"end":{"row":43,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":0},"end":{"row":44,"column":1}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":4},"end":{"row":43,"column":10}},"text":"return"},{"action":"insertText","range":{"start":{"row":43,"column":4},"end":{"row":43,"column":9}},"text":"alert"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":29},"end":{"row":9,"column":30}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":28},"end":{"row":9,"column":29}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":27},"end":{"row":9,"column":28}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":26},"end":{"row":9,"column":27}},"text":"L"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":26},"end":{"row":9,"column":27}},"text":"V"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":27},"end":{"row":9,"column":28}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":28},"end":{"row":9,"column":29}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":29},"end":{"row":9,"column":30}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":30},"end":{"row":9,"column":31}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":31},"end":{"row":9,"column":32}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":32},"end":{"row":9,"column":33}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":33},"end":{"row":9,"column":34}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":35},"end":{"row":9,"column":36}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":36},"end":{"row":9,"column":37}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":37},"end":{"row":9,"column":38}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":38},"end":{"row":9,"column":39}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":39},"end":{"row":9,"column":40}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":40},"end":{"row":9,"column":41}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":41},"end":{"row":9,"column":42}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":42},"end":{"row":9,"column":43}},"text":"q"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":43},"end":{"row":9,"column":44}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":44},"end":{"row":9,"column":45}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":45},"end":{"row":9,"column":46}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":46},"end":{"row":9,"column":47}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":46},"end":{"row":9,"column":47}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":46},"end":{"row":9,"column":47}},"text":"I"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":47},"end":{"row":9,"column":48}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":48},"end":{"row":9,"column":49}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":49},"end":{"row":9,"column":50}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":50},"end":{"row":9,"column":51}},"text":"6"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":51},"end":{"row":9,"column":52}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":52},"end":{"row":9,"column":53}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":53},"end":{"row":9,"column":54}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":54},"end":{"row":9,"column":55}},"text":"6"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":55},"end":{"row":9,"column":56}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":55},"end":{"row":9,"column":56}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":54},"end":{"row":9,"column":55}},"text":"6"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":53},"end":{"row":9,"column":54}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":52},"end":{"row":9,"column":53}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":51},"end":{"row":9,"column":52}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":50},"end":{"row":9,"column":51}},"text":"6"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":49},"end":{"row":9,"column":50}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":48},"end":{"row":9,"column":49}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":47},"end":{"row":9,"column":48}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":46},"end":{"row":9,"column":47}},"text":"I"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":45},"end":{"row":9,"column":46}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":25},"end":{"row":43,"column":26}},"text":"$"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":25},"end":{"row":43,"column":26}},"text":"$"},{"action":"insertText","range":{"start":{"row":43,"column":25},"end":{"row":43,"column":26}},"text":"$"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":42,"column":0},"end":{"row":44,"column":1},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1413587225404,"hash":"2345dd3343a765eaca0faee2985f49f6e41f3eb3"}