var elForm = document.querySelector(".heto-form");
var list = document.querySelector(".list");
var arr = []

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    var firstname = elForm.querySelector(".hero-input-fname").value;
    var lastname = elForm.querySelector(".hero-input-lname").value;
    var phone = elForm.querySelector(".hero-input-tel").value;

    var obj = {
        fname: firstname,
        lname: lastname,
        tel: phone,
    }

    arr.push(obj);


    elForm.reset();
    
    list.textContent = null;

    for(var i = 0; i < arr.length; i++){
        var item = document.createElement("li");
        var title = document.createElement("h3");
        var phonenumber = document.createElement("p");

        title.textContent = arr[i].fname + " " + arr[i].lname;
        phonenumber.textContent = arr[i].tel;

        item.appendChild(title);
        item.appendChild(phonenumber);
        list.appendChild(item)
        }
})