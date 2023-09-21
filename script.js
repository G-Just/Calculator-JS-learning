let last = "";

function eq(type, input) {
  let text = document.getElementById("output-text");
  let history = document.getElementById("history");

  if (type === "hist") {
    if (input === "clear") {
      history.innerHTML = "";
    }
  }
  if (type === "num") {
    last = "num";
    text.innerHTML += input;
  }

  if (type === "mod") {
    last = "mod";
    if (input === "C") {
      text.innerHTML = "";
    }
    if (input === "backspace") {
      text.innerHTML = text.innerHTML.slice(0, -1);
    }
    if (input === "l-b") {
      text.innerHTML += "(";
    }
    if (input === "r-b") {
      text.innerHTML += ")";
    }
    if (input === "." && text.innerHTML[text.innerHTML.length - 1] !== ".") {
      text.innerHTML += ".";
    }

    if (input === "calc") {
      history.innerHTML +=
        text.innerHTML + " = " + eval(text.innerHTML) + "<br>";
      text.innerHTML = eval(text.innerHTML);
    }
  }

  if (type === "op" && last !== "op") {
    last = "op";
    if (input === "/") {
      text.innerHTML += "/";
    }
    if (input === "x") {
      text.innerHTML += "*";
    }
    if (input === "-") {
      text.innerHTML += "-";
    }
    if (input === "+") {
      text.innerHTML += "+";
    }
  }
  if (type === "op" && last === "op") {
    text.innerHTML = text.innerHTML.slice(0, -1);
    if (input === "/") {
      text.innerHTML += "/";
    }
    if (input === "x") {
      text.innerHTML += "*";
    }
    if (input === "-") {
      text.innerHTML += "-";
    }
    if (input === "+") {
      text.innerHTML += "+";
    }
  }
}
