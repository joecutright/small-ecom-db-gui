function Table() {
    var dResponse = [
        { "user_id": "1", "user_firstname": "Mark", "user_lastname": "Woo", "user_latitude": "37.7902", "user_longitude": "-122.458" },
        { "user_id": "2", "user_firstname": "Hualong", "user_lastname": "Chen", "user_latitude": "37.7285", "user_longitude": "-122.438" },
        { "user_id": "3", "user_firstname": "TFirst", "user_lastname": "TLast", "user_latitude": "37.7401", "user_longitude": "-122.492" },
        { "user_id": "4", "user_firstname": "Zishan", "user_lastname": "Budhwani", "user_latitude": "37.7298", "user_longitude": "-122.47" },
        { "user_id": "5", "user_firstname": "ibian", "user_lastname": "hodgson", "user_latitude": "37.8014", "user_longitude": "-122.427" },
        { "user_id": "6", "user_firstname": "Amos", "user_lastname": "Munoz", "user_latitude": "37.7367", "user_longitude": "-122.439" },
        { "user_id": "7", "user_firstname": "Brennan", "user_lastname": "Ramos", "user_latitude": "37.7624", "user_longitude": "-122.435" },
        { "user_id": "8", "user_firstname": "Cole", "user_lastname": "Lott", "user_latitude": "37.7607", "user_longitude": "-122.462" },
        { "user_id": "9", "user_firstname": "Slade", "user_lastname": "Strickland", "user_latitude": "37.796", "user_longitude": "-122.451" },
        { "user_id": "10", "user_firstname": "Isaiah", "user_lastname": "Gibbs", "user_latitude": "37.7536", "user_longitude": "-122.464" }
    ];
    // Target the Table you want to insert the Data to
    var results = document.getElementById('Results');
    results.innerHTML += "<tr><td>User ID</td><td>First Name</td><td>Last Name</td><td>latitude</td><td>longitude</td></tr>";
    for (var obj in dResponse) {
        //Loop through the object to get each objects data
        results.innerHTML += "<tr><td>" + dResponse[obj].user_id + "</td><td>" + dResponse[obj].user_firstname + "</td><td>" + dResponse[obj].user_lastname + "</td><td>" + dResponse[obj].user_latitude + "</td><td>" + dResponse[obj].user_longitude + "</td></tr>";
    }

}
window.onload = Table;