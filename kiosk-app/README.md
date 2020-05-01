## Install Dependencies and Download Source Files (Debian based Linux) ##
1. Add the nodesource repo, then install Node.js, Apache, and git
```
sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs apache2 git
```
2. Install Angular CLI through npm
```
sudo npm install -g @angular/cli
```
3. Change directory to where you want the source code to reside, such as /opt, then use git to clone the repo
```
cd /opt
sudo git clone https://github.com/techmilldenton/askjohn.git
```
## Development Environment ##
1. Change directory into the project folder then use `ng serve` to build the app into a live development mode. Open a chrome based browser and go to localhost:4200 so you can see the kiosk and and see change live.
```
cd /opt/askjohn/code
ng serve
```
2. Open the `environment.ts` file located under `src/environments`. This is where you will fill in the information for the APIs. It is best to avoid modifying the base URLs for the weather, AQI, events, and news unless the provider changes the URL. The survey and map URLs should be changed to what you have customized with Google and OpenStreetMaps, respectively.
3. When changes are made to the environment file or source code, Angular will compile and refresh the page to show live changes.
4. To add the URLs for the transit route PDFs and their route names, go to `src/assets/json/routes.json`. Replace what is there with your own info, but be careful to maintain the structure of the JSON and end the lines (except last) with a comma.
## Production Environment ##
It is possible to run the digital kiosk in develpment mode as production, such as when running locally and you want to make frequent changes without disrupting service. However, if serving over the network it is best to doa  production build.
1. From the command line, change directrory into the root of the project source code. Then run `ng build --prod`
```
cd /opt/askjohn/code
ng build --prod
```
2. Once compilation is finished, the final files will be located in the `dist/` inside the project folder.
3. Now we need to setup Apache to serve the app. Create a symlink in /var/www to the compiled project files
```
sudo ln -s /opt/askjohn/code/dist/kiosk /var/www/kiosk
```
4. Use a text editor to open `/etc/apache2/sites-enabled/000-default.conf` and change the `DocumentRoot` to `/var/www/kiosk`
5. Restart the apache service with systemctl
```
sudo systemctl restart apache2
```
5. Test access to the kiosk page with a Chromium based browser using the hostname or IP address of the system