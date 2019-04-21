var request = new XMLHttpRequest();

function request_api(i){
  request.open('GET', 'https://swapi.co/api/people/', true)
  request.onload = function() {
    console.log("on load called");
    var data = JSON.parse(this.response);

    if (request.status == 200) {
      data["results"].forEach((obj,index) =>{
        var nameApi = obj["homeworld"];
        var count = index;
        id = "div"+count;
        if(index< data["results"].length - 1){
        document.getElementById(id).innerHTML =
        `<h3>`+obj.name+`</h3>
        <p>Films:` + obj.films.length + `</p>
        `;

      }
    });
    }

     else {
      console.log('error')
    }
    return data;
  }
  console.log("request send");
request.send()
}
function get_response(url)
{
  console.log(url);
  var req  = new XMLHttpRequest();
  req.open('GET', url, true)
  req.onload = function() {
    console.log("response");
    var data = JSON.parse(this.response);
    if (req.status == 200) {

}}
req.send();
}
i=0;
request_api(i);
// for(i =1;i<=9;i++)
// {
//   var data1 = request_api(i);
//   console.log(data1+"new");
// }
