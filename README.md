# AI Chatbot Demo

---

For this coding assessment, I decided to create an AI chatbot because it is something I have not built before and is something useful that I can use in my other projects. An AI chatbot is also useful because it gives customers, consumers and users a faster response time.

For this project, I built it using a HTML, CSS and React frontend and a Typescript backend. The application was built using Vite's typescript template and uses FontAwesome and React Icons for the graphics on the User Interface. The backend calls the Google's Gemini AI API to answer user questions.

## Features:

---

**Open/Close Chat button**: On launch there is going to be a button on the bottom right that opens the chat to the AI bot. Whenever the user hovers over the button, it gives a message about what the button does. When the user hovers over the open chat button, it displays the message Open a chat with a bot. Whenever the user hovers over the close button it displays the message Close Chatbot.
This button toggles so both buttons will never be present at the same time. When the chat is closed, the open chat button is displayed and when the chat is open, the close chat button is displayed. When the user clicks on the button, the button switches to the other type. Open -> Close and Close -> Open.

**Chat**: By default whenever the user opens the chat for the first time, it displays Hi there, how may I help you? There is an input field at the bottom of the chat that allows the user to enter messages and have it displayed in the chat. When the user starts typing in the input field, a send button appears. The send button disappears whenever the input field is empty. Whenever the user sends a message, the message is sent to Google's Gemini AI and the application retrieves this response and displays the results of that response in the chat.
