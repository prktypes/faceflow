WebRTC Video Calling Project

Overview

This project is a real-time video calling application built using WebRTC, allowing peer-to-peer communication over the web without requiring external plugins. It enables users to establish video and audio calls directly from their browsers.

Features

Peer-to-peer video and audio calling

WebRTC-based real-time communication

Simple and user-friendly interface

Secure and encrypted communication

Support for multiple browsers (Chrome, Firefox, Edge, etc.)

Optional signaling server for connection setup

Technologies Used

WebRTC - Handles peer-to-peer video/audio communication

JavaScript (Node.js, Express.js) - Backend server for signaling

Socket.io - Real-time messaging for signaling

HTML, CSS, JavaScript - Frontend interface

Installation

Prerequisites

Ensure you have the following installed:

Node.js (v14 or later)

npm (Node Package Manager)

Setup

Clone this repository:

git clone https://github.com/your-username/webrtc-videocall.git
cd webrtc-videocall

Install dependencies:

npm install

Start the signaling server:

npm start

Open the application in your browser:

http://localhost:3000

Usage

Open the application in your browser.

Share the generated room link with another user.

Both users join the room to establish a video call.

Project Structure

webrtc-videocall/
│-- public/         # Frontend files (HTML, CSS, JS)
│-- server.js       # Node.js server for signaling
│-- package.json    # Project dependencies
│-- README.md       # Documentation

Troubleshooting

If video/audio doesn’t work, ensure camera and microphone permissions are granted.

Check the console for any errors and restart the server if necessary.

License

This project is licensed under the MIT License.

Contributors

Your Name : Prakkhar Prassun

Acknowledgments

WebRTC Documentation (https://webrtc.org/)

Mozilla WebRTC Guide (https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
