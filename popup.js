function sendUserConfiguration() {

  // const frequency = document.getElementById

  (async () => {
      const response = await chrome.runtime.sendMessage({frequency: });
      // do something with response here, not outside the function
      console.log(response);
    })();
  
  }