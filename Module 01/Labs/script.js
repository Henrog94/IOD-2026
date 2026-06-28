function changeColumn1() {

    const newText =
        document.getElementById("input1").value;

    document.getElementById("heading1").textContent =
        newText || "Column 1 Updated";

    document.getElementById("column1").style.backgroundColor =
        "lightcoral";
}

function changeColumn2() {

    const newText =
        document.getElementById("input2").value;

    document.getElementById("heading2").textContent =
        newText || "Column 2 Updated";

    document.getElementById("column2").style.backgroundColor =
        "lightgreen";
}