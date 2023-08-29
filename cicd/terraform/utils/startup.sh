#!/bin/bash
    
    yum update -y
    yum install httpd -y
    yum install git -y
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    export INSTANCE_ID=$(curl -s http://169.254.169.254/latest/meta-data/instance-id)
    export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    systemctl start httpd
    chkconfig httpd on
    nvm install --lts 
    echo "<html><body><h1>Hello from Build Server</h1><p>Instance ID: $INSTANCE_ID</p></body></html>" > /var/www/html/index.html