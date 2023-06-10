# custom_alert_modal

Lightweight and customizable pure JS modal

### Installation

```
npm i custom_alert_modal
```

#How to use example code 
```
  <button onclick="showCustomAlert()">Show Custom Alert</button>
```
```Js
  function showCustomAlert() {
        let custom = new CustomAlert();
        custom.showAlert(
        'Are you sure you want to create this small library?',
        `By creating this small library, you will be able to create custom alerts in your web applications 
        without having to use the default alert() function. This will allow you to customize the alert`,
        [
          {
            text: 'No Cancel',
            style: 'cancel',
            onPress: function() {
              console.log('Cancel Pressed');
            },
          },
          {
            text: 'Yes, OK',
            onPress: function() {
                console.log('Cancel Pressed');
            }
          }
        ],
        closeOnClickModal= false,
        closeOnEscKeyPress= true,
      );
    }
```



