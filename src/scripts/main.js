
// Load up components
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/index.scss';
import Template from './components/'
import Header from './components/header'

// quick api call
fetch('http://agl-developer-test.azurewebsites.net/people.json')
  .then(function(response) {
    return response.json();
  }).then(function(data) {
      //call render after products are ready
    createPage(data);
  })
  
function createPage (data){
    // components
    const template = new Template(data);
    const header = new Header(data);
    //this is where we add the data template string to the dom
    const templateLoadingArea = document.getElementById('root');
    const headerSection = document.getElementById('header');
    templateLoadingArea.innerHTML = template.render();
    headerSection.innerHTML = header.render();
}









