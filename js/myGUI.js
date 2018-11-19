// homework 4-1-1

func_array = {'createWindow':createWindow,
            'createTextBox': createTextBox,
            'createButton': createButton,
            'createMenu': createMenu }

function createWindow(id, parameters){
    var canvas = document.getElementById(id);
    if(canvas.getContext){
        parameters = parameters || {};
        var posX = parameters.posX !== undefined ? parameters.posX : 0;
        var posY = parameters.posY !== undefined ? parameters.posY : 0;
        var width = parameters.width !== undefined ? parameters.width : 100;
        var height = parameters.height !== undefined ? parameters.height : 100;
        var title = parameters.title !== undefined ? parameters.title : 'default title';

        var mainwindow = canvas.getContext('2d');

        // properties
        mainwindow.font = '18px serif';
        mainwindow.textAlign = 'center';
        mainwindow.textBaseline = 'middle';
        mainwindow.fillStyle = "rgb(0, 0, 255, 0.2)";

        // fill
        mainwindow.fillRect(posX, posY, width, height);

        // main border
        mainwindow.strokeRect(posX, posY, width, height); 

        // title bar
        mainwindow.strokeRect(posX, posY, width, 30);
        mainwindow.strokeText(title, posX + (width-60)/2, posY+15, width-80);

        // hide and remove buttons
        mainwindow.strokeRect(posX + width - 60, posY, 30, 30);
        mainwindow.strokeText('_', posX + width - 45, posY+15);
        mainwindow.strokeRect(posX + width - 30, posY, 30, 30);
        mainwindow.strokeText('X', posX + width - 15, posY+15);
    }
}

function createTextBox(id, parameters){
    var canvas = document.getElementById(id);
    if(canvas.getContext){
        parameters = parameters || {};
        var posX = parameters.posX !== undefined ? parameters.posX : 0;
        var posY = parameters.posY !== undefined ? parameters.posY : 0;
        var width = parameters.width !== undefined ? parameters.width : 100;
        var height = parameters.height !== undefined ? parameters.height : 100;
        var text = parameters.text !== undefined ? parameters.text : 'default text';
        var font = parameters.font !== undefined ? parameters.font : 'serif';
        var size = parameters.size !== undefined ? parameters.size : '20px';

        var textbox = canvas.getContext('2d');

        // properties
        textbox.font = size + ' ' + font;
        textbox.textAlign = 'center';
        textbox.textBaseline = 'middle';
        textbox.fillStyle = "rgb(0, 0, 255, 0.2)";

        // fill
        textbox.fillRect(posX, posY, width, height);

        // main border
        textbox.strokeRect(posX, posY, width, height); 

        // text
        textbox.strokeText(text, posX+width/2, posY+height/2, width-20);
    }
}

function createButton(id, parameters){
    var canvas = document.getElementById(id);

    if(canvas.getContext){
        parameters = parameters || {};
        var posX = parameters.posX !== undefined ? parameters.posX : 0;
        var posY = parameters.posY !== undefined ? parameters.posY : 0;
        var width = parameters.width !== undefined ? parameters.width : 100;
        var height = parameters.height !== undefined ? parameters.height : 100;
        var text = parameters.text !== undefined ? parameters.text : 'default text';
        var font = parameters.font !== undefined ? parameters.font : 'serif';
        var size = parameters.size !== undefined ? parameters.size : '20px';

        var button = canvas.getContext('2d');

        // properties
        button.font = size + ' ' + font;
        button.textAlign = 'center';
        button.textBaseline = 'middle';
        button.fillStyle = 'rgb(0, 0, 255, 0.2';

        // main border
        roundedRect(button, posX, posY, width, height, 8);

        // fill
        button.fill();

        // button name
        button.strokeText(text, posX+width/2, posY+height/2, width-20);
    }
}

function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
  }

  function createMenu(id, parameters){
    var canvas = document.getElementById(id);

    if(canvas.getContext){
        parameters = parameters || {};
        var posX = parameters.posX !== undefined ? parameters.posX : 0;
        var posY = parameters.posY !== undefined ? parameters.posY : 0;
        var width = parameters.width !== undefined ? parameters.width : 100;
        var height = parameters.height !== undefined ? parameters.height : 100;
        var text = parameters.text !== undefined ? parameters.text : 'default text';
        var font = parameters.font !== undefined ? parameters.font : 'serif';
        var size = parameters.size !== undefined ? parameters.size : '20px';
        var title = parameters.title !== undefined ? parameters.title : 'default title';
        var font = parameters.font !== undefined ? parameters.font : 'serif';
        var size = parameters.size !== undefined ? parameters.size : '20px';
        var items = parameters.items !== undefined ? parameters.items : ['default item'];

        var menu = canvas.getContext('2d');

        // properties
        menu.font = size + ' ' + font;
        menu.textAlign = 'center';
        menu.textBaseline = 'middle';
        menu.fillStyle = 'rgb(0, 0, 255, 0.2';

        // fill
        menu.fillRect(posX, posY, width, height);

        // main border
        menu.strokeRect(posX, posY, width, height); 

        // menu title
        menu.strokeText(title, posX+width/2, posY+height/2, width-20);

        // items
        var index = 0;
        for (var item in items){
            menu.fillRect(posX, posY + height + ((height-10)*index), width-10, height-10);
            menu.strokeRect(posX, posY + height + ((height-10)*index), width-10, height-10); 
            
            menu.strokeText(items[item], posX+(width-10)/2, posY + height + (height-10)/2 + (height-10)*index, width-40);
            index += 1;
        }
    }
  }