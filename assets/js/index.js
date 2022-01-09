$("#update_user").submit(function (event) {
  event.preventDefault();
  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  var request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };
  $.ajax(request).done(function (response) {
    window.location = "http://localhost:3000";
  });
});

$("#delete_user").click(function (event) {
  event.preventDefault();
  var id = $(this).attr("data-id");
  var request = {
    url: `http://localhost:3000/api/users/${id}`,
    method: "DELETE",
  };
  $.ajax(request).done(function (response) {
    window.location = "http://localhost:3000";
  });
});

$("#download_csv").click(async function (event) {
  var obj;
  obj = await fetch("http://localhost:3000/api/users", {}).then((res) =>
    res.json()
  );
  var result = "Number, Name, Quantity\n";
  for (var i = 0; i < obj.length; i++) {
    result =
      result + (i + 1) + "," + (obj[i].name + "," + obj[i].quantity + "\n");
  }

  const blob = new Blob([result], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);
  a.setAttribute("download", "inventory.csv");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
