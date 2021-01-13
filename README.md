# UserGroupCRUD  
### Run the project:
You must have installed `docker` and `docker-compose`  
 
1. Clone this repo - `git clone https://github.com/olksndrdevhub/test_synergyway.git`.
2. Move to folder - `cd test_synergyway/`.
3. Run container with - `docker-compose up --build`. Use `sudo` if needed.
4. Frontend start on `:3000` port, so open your browser and navigate to `YOUR_LOCAL_IP:3000` to check app. You can see your IP in `ifconfig` tool if use linux.

### Project structure:
Backend and frontend pats are separated in diff directories - `django_app` and `frontend`. Each one part have own `Dockerfile`.  
In root folder you can see `docker-compose.yml` file, that build images and run container with both frontend and backend services.

Work fine in Chrome, Chromium. In Firefox have some isuess.
