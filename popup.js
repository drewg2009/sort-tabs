function sendUserConfiguration() {

  const frequencyInput = document.getElementById("frequencyInput")
  console.log('freq', frequencyInput)
  console.log('val', frequencyInput.value)
  const frequency = frequencyInput.value
  console.log('test')

  chrome.runtime.sendMessage({action: 'updateConfiguration', frequency: frequency }).then(response => {
    // do something with response here, not outside the function
    console.log(response);
  })

}


const saveButton = document.getElementById('save')

saveButton.onclick = function () {
  sendUserConfiguration()
}