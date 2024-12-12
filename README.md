# AI Chatbot Demo

For this coding assessment, I decided to create an AI chatbot because it is something I have not built before and is something useful that I can use in my other projects. An AI chatbot is also useful because it gives customers, consumers and users a faster response time.

For this project, I built it using a HTML, CSS and React frontend and a Typescript backend. The application was built using Vite's typescript template and uses FontAwesome and React Icons for the graphics on the User Interface. The backend calls the Google's Gemini AI API to answer user questions.

## Features:

**Open/Close Chat button**: On launch there is going to be a button on the bottom right that opens the chat to the AI bot. Whenever the user hovers over the button, it gives a message about what the button does. When the user hovers over the open chat button, it displays the message Open a chat with a bot. Whenever the user hovers over the close button it displays the message Close Chatbot.
This button toggles so both buttons will never be present at the same time. When the chat is closed, the open chat button is displayed and when the chat is open, the close chat button is displayed. When the user clicks on the button, the button switches to the other type. Open -> Close and Close -> Open.

**Chat**: By default whenever the user opens the chat for the first time, it displays Hi there, how may I help you? There is an input field at the bottom of the chat that allows the user to enter messages and have it displayed in the chat. When the user starts typing in the input field, a send button appears. The send button disappears whenever the input field is empty. Whenever the user sends a message, the message is sent to Google's Gemini AI and the application retrieves this response and displays the results of that response in the chat.

## Software Requirements

- An Integrated development environment (IDE)
- Node and the Node Process Manager (npm) are installed
  [Node Download Link](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

- This project uses Google's Gemini AI and this pre-trained AI model supports very specific versions of Node.
  node: '^18.0.0 || ^20.0.0 || >=22.0.0'
- To check which version of node you are using, use the _node -v_ command in the terminal of the project. If you are using a version of node that is not supported by the Google Gemini API, use the _use_ command to switch between versions.

## How to run the project

1. Fork then clone or clone the repository.
   Open a new directory where you want the project and clone the project into that directory.
2. Open the root directory in your IDE.
3. Run the _npm install_ command at the root directory. If this command ran successfully, there should not be any errors in the terminal and there should be a new folder in your project file named _node_modules_.

```
npm install
```

4. Create an environment variables file at the root level of the project. Go to the Google Gemini website to get your own API key.
   [Google API Key Website](https://aistudio.google.com/app/apikey)

After generating an API key, in your environment variables file, create an environment variable named _VITE_AI_API_BASE_.

It should look similar to this

```
VITE_AI_API_BASE=[Insert your API key here]
```

5. To run the project, use the _npm run dev_ command in the terminal. By default, the project should be running on port 5137.

```
npm run dev
```
