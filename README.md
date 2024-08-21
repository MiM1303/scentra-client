Website Name: Scentra
Website Live Link: 

Features of website-
* Users can view products through a pagination
* Users can register and login using email and google account
* Users are able to search and sort products
* Products are categorized in different categories

#### Instructions to Clone and Run the Client Side

1. **Clone the Repository**
    ```bash
    git clone https://github.com/MiM1303/techhive-client.git
    cd your-repo-name/client
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**
    - Create a `.env` file in the `client` directory and add the necessary environment variables:
        ```env
        REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
        REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
        REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
        ```

4. **Run the Client**
    ```bash
    npm start
    ```

5. **Access the Application**
    - Open your web browser and navigate to `http://localhost:3000` to access the application.
