const getInTouchBtn = document.getElementById('getInTouchBtn')

function handleClick (){
    window.location.href = 'https://www.facebook.com/dev.code.smith.12'
}

getInTouchBtn.addEventListener ('click',  handleClick);
const emailLink = document.getElementById('emailLink');
function sendEmail() {
  const subject = encodeURIComponent('Subject of the email');
  const body = encodeURIComponent('Content of the email.');
  const mailtoLink = `mailto:abhayasolutions52@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
}
emailLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default behavior of the link
  sendEmail(); // Call the function to open the email client
});
// Function to handle the click event
function handleClick() {
    window.location.href = 'https://www.facebook.com/dev.code.smith.12';
  }
  
  // Get the button element
  const DuniyaChina = document.getElementById('DuniyaChina');
  
  // Attach click event listener to the button
  getInTouchBtn.addEventListener('click', handleClick);
  