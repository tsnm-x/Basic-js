var msg = prompt("Enter a message: ");

for(var i=0;i<7;i++){
  switch (i) {
    case 1:
      document.write("<h1>" + msg + "</h1>");
      break;
    case 2:
      document.write("<h2>" + msg + "</h2>");
      break;
    case 3:
      document.write("<h3>" + msg + "</h3>");
      break;
    case 4:
      document.write("<h4>" + msg + "</h4>");
      break;
    case 5:
      document.write("<h5>" + msg + "</h5>");
      break;
    case 6:
      document.write("<h6>" + msg + "</h6>");
      break;
  }
}
