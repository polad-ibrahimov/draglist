function Draggable(container){
    var self = this;

    self.container = document.querySelector(container);

    self.container.addEventListener('dragover', function(ev){
        ev.preventDefault();
    });

    self.container.addEventListener('drop', function(ev){
        ev.preventDefault();
        var id = ev.dataTransfer.getData('id');
        self.container.appendChild(document.getElementById(id));
    });

    for(var i=0; i < self.container.childElementCount; i++){
        self.container.children[i].setAttribute('draggable', true);
        self.container.children[i].id = 'item_' + (i + 1);


        self.container.children[i].addEventListener('dragstart', function(ev){
             ev.dataTransfer.setData("id", event.target.id);
        });
    }

}