
# Node Image
FROM node

# Environment
ENV APP_ROOT="/var/www/node"

# Set the application root
WORKDIR ${APP_ROOT}

# Install Express Generator
RUN npm install -g express-generator

# Install dependencies
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN cp -a /tmp/node_modules /var/www/

# Install Nodebot Workshop
RUN echo "alias nodebot-workshop='node /var/www/node_modules/nodebot-workshop/nodebot-workshop.js'" >> /etc/bash.bashrc

# Listen to port
EXPOSE 6000

# Setup application
COPY ./devops/start.sh /opt/start.sh
RUN chmod 755 /opt/start.sh

# Start application
ENTRYPOINT [ "/opt/start.sh" ]
