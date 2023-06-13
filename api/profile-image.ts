// Capture and send image from front-facing mobile camera
const captureAndSendImage = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });
    const videoTrack = stream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(videoTrack);
    const photo = await imageCapture.takePhoto();
    const reader = new FileReader();
    reader.onload = function () {
      const imageData = reader.result;

      // Create a data object to send in the request body
      const data = {
        useCamera: true,
        imageData: imageData,
      };

      // Send the captured image data to the API route
      fetch("/api/matting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          // Process the response data
          console.log(data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    };
    reader.readAsDataURL(photo);
  } catch (error) {
    // Handle any errors related to accessing the camera
    console.error(error);
  }
};

// Call the function to capture and send the image
captureAndSendImage();
