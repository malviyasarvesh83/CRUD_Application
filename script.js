function validateForm() {
    var amount = document.getElementById("amount").value;
    var desc = document.getElementById("desc").value;
    var cat = document.getElementById("cat").value;

    if (amount == "") {
        alert("Expense Amount is Required..!");
        return false;
    }
    if (desc == "") {
        alert("Expense Description is Required..!");
        return false;
    }
    if (cat == "") {
        alert("Expense Category is Required..!");
        return false;
    }
    return true;
}

function showData() {
    var expenseList;
    if (localStorage.getItem("expenseList") == null) {
        expenseList = [];
    } else {
        expenseList = JSON.parse(localStorage.getItem("expenseList"));
    }

    var html = "";

    expenseList.forEach(function (element, index){
        html = html + "<tr>";
        html = html + "<td>" + element.amount + "</td>";
        html = html + "<td>" + element.desc + "</td>";
        html = html + "<td>" + element.cat + "</td>";
        html = html + '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
        html = html + "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData() {
    if (validateForm() == true) {
        var amount = document.getElementById("amount").value;
        var desc = document.getElementById("desc").value;
        var cat = document.getElementById("cat").value;

        var expenseList;
        if (localStorage.getItem("expenseList") == null) {
            expenseList = [];
        } else {
            expenseList = JSON.parse(localStorage.getItem("expenseList"));
        }

        expenseList.push({
            amount: amount,
            desc: desc,
            cat: cat,
        });

        localStorage.setItem("expenseList", JSON.stringify(expenseList));
        showData();
        document.getElementById("amount").value = "";
        document.getElementById("desc").value = "";
        document.getElementById("cat").value = "";
    }
}

function deleteData(index) {
    var ans = confirm("Are you Sure you want to permanentaly delete this data ?");
    if (ans == true) {
        var expenseList;
        if (localStorage.getItem("expenseList") == null) {
          expenseList = [];
        } else {
          expenseList = JSON.parse(localStorage.getItem("expenseList"));
        }

        expenseList.splice(index, 1);
        localStorage.setItem("expenseList", JSON.stringify(expenseList));
        showData();
    }
}

function updateData(index) {
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";
    
    var expenseList;
    if (localStorage.getItem("expenseList") == null) {
      expenseList = [];
    } else {
      expenseList = JSON.parse(localStorage.getItem("expenseList"));
    }

    document.getElementById("amount").value = expenseList[index].amount;
    document.getElementById("desc").value = expenseList[index].desc;
    document.getElementById("cat").value = expenseList[index].cat;

    document.querySelector("#Update").onclick = function () {
        if (validateForm() == true) {
            expenseList[index].amount = document.getElementById("amount").value;
            expenseList[index].desc = document.getElementById("desc").value;
            expenseList[index].cat = document.getElementById("cat").value;

            localStorage.setItem("expenseList", JSON.stringify(expenseList));
            showData();
            document.getElementById("amount").value = "";
            document.getElementById("desc").value = "";
            document.getElementById("cat").value = "";

            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }
}