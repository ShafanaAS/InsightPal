# InsightPal 🚀

**Your AI-powered web research assistant. Paste a URL, get a summary, and discover insightful follow-up questions.**

InsightPal is a sleek, modern web application designed to accelerate your research process. By leveraging the power of the Google Gemini API, it scrapes content from any provided URL, distills it into a concise summary, and generates thought-provoking questions to guide your learning journey.

---

## ✨ Key Features

*   **🔗 URL-Based Analysis:** Simply provide a link to an article or webpage.
*   **🧠 AI-Powered Summarization:** Utilizes the `gemini-2.5-flash` model for fast and high-quality content summarization.
*   **🤔 Intelligent Question Generation:** Generates insightful, open-ended questions to encourage deeper thinking about the topic.
*   **💅 Modern & Responsive UI:** Built with Tailwind CSS for a beautiful, intuitive, and mobile-friendly user experience.
*   **🔄 Clear State Handling:** Features elegant loading spinners and user-friendly error messages for a smooth experience.
*   **💻 Clean Codebase:** Written in TypeScript with a clear component-based architecture.

---

## 🛠️ Tech Stack

*   **Frontend:** React & TypeScript
*   **Styling:** Tailwind CSS
*   **AI Model:** Google Gemini API (`@google/genai`)
*   **Content Fetching:** AllOrigins CORS Proxy

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

*   Node.js (v18 or later recommended)
*   A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/insightpal.git
    cd insightpal
    ```

2.  **Install dependencies:**
    The project uses ES modules imported via an import map in `index.html`, so no `npm install` is necessary for the listed dependencies.

3.  **Set up your environment variables:**
    The application requires your Google Gemini API key to be available as an environment variable. The code is already configured to read `process.env.API_KEY`. Ensure this variable is set in the environment where you run the application.

4.  **Run the development server:**
    You can serve the `index.html` file using any static file server. A common way is using the `http-server` npm package:
    ```bash
    npx http-server .
    ```

    The application should now be running on a local port (e.g., `http://localhost:8080`).

---

## ⚙️ How It Works

1.  **Input:** The user enters a valid URL into the input field and clicks "Summarize".
2.  **Content Fetching:** The app uses the `AllOrigins` CORS proxy to fetch the raw HTML content from the provided URL. This is a client-side workaround for the browser's Same-Origin Policy.
3.  **Text Extraction:** The fetched HTML is parsed using the browser's native `DOMParser`, and all text content from the `<body>` is extracted and sanitized.
4.  **API Call:** The cleaned text content is sent to the `geminiService`. A structured prompt is created, instructing the Gemini model to act as the "InsightPal" assistant, summarize the text, and generate follow-up questions.
5.  **Response Handling:** The Gemini API's response, formatted in Markdown, is received by the application.
6.  **Rendering:** The `MainContent` component intelligently parses the Markdown response, separating the summary and questions, and renders them in a clean, readable format for the user.

---

## 📂 Project Structure

```
/
├── components/         # Reusable React components
│   ├── MainContent.tsx
│   └── LoadingSpinner.tsx
├── services/           # Modules for external services (e.g., Gemini API)
│   └── geminiService.ts
├── App.tsx             # Main application component, state management
├── index.html          # Main HTML file
├── index.tsx           # React root entry point
├── metadata.json       # Project metadata
└── README.md
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License.
