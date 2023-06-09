function titleCaseEdit(title) {
  let x = title.split(" ")
    for (let i = 0; i < x.length; i++)
        x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1);
    return x.join(' ')
}

// Do not edit this line;
module.exports = titleCaseEdit;
