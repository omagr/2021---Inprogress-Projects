console.log('hi.... everyone!');
//constructuure
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}
// displaying

function Display() {
}

// displaying add prototype

Display.prototype.add = function (Nbook) {
    console.log('adding to ui');
    tablebody = document.getElementById('tablebody');
    let Ustring = `<tr>
                        <td>#</td>
                        <td>${Nbook.name}</td>
                         <td>${Nbook.author}</td>
                        <td>${Nbook.type}</td>
                    </tr>`;

    tablebody.innerHTML += Ustring;
};

Display.prototype.clear = function () {
    let addbtn = document.getElementById('add');
    addbtn.reset();
}




Display.prototype.validate = function (Nbook) {
    if (Nbook.name.length < 4 || Nbook.author.length < 3) {
        return false;
    } else {
        return true;
    }
}


Display.prototype.show = function (type, meg) {
    let msg = document.getElementById('alrt');
    msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>message:!</strong> ${meg}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`
    setTimeout(() => {
        msg.innerHTML = ``;
    }, 1000);
}

// adeventlisner
let addbtn = document.getElementById('add');
addbtn.addEventListener('submit', liberyfunc)

function liberyfunc(e) {
    console.log('hi.... everyone!');


    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let science = document.getElementById('science');
    let programming = document.getElementById('programming');
    let pshycology = document.getElementById('pshycology');

    let type;

    if (science.checked) {
        type = science.value;
    } else if (programming.checked) {
        type = programming.value;

    } else if (pshycology.checked) {
        type = pshycology.value;
    }


    let Nbook = new Book(name, author, type);
    console.log(Nbook);


    let display = new Display();
    if (display.validate(Nbook)) {
        display.add(Nbook);
        display.clear();
        display.show('success', 'your book is added')
    } else {
        display.show('error', 'your book is not added')

    }

    e.preventDefault();

}