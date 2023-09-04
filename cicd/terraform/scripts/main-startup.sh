#!/bin/bash
    
curr_dir="$(dirname "$0")"    
source "$curr_dir./startup1.sh"

echo "---------- BEGIN MAIN-STARTUP.SH ----------"
yum update -y
yum install httpd -y
yum install git -y
yum install nodejs -y
yum install npm -y

echo "---------- YUM INSTALLS COMPLETE ---------"

systemctl start httpd
systemctl enable httpd
usermod -a -G apache ec2-user
chown -R ec2-user:apache /var/www
chmod 2775 /var/www
chkconfig httpd on

echo "---------- SET ENV VAR ALIASES ----------"
echo 'alias findNode="ps -ef | grep node"' >> ~/.bashrc

echo 'alias openPorts="lsof -i -P -n | grep LISTEN"' >> ~/.bashrc

export 
echo "---------- HTTPD/APACHE CONFIG COMPLETE ----------"

export INSTANCE_ID=$(curl -s http://169.254.169.254/latest/meta-data/instance-id)
echo "<html><body><h1>Hello from Build Server</h1><p>Instance ID: $INSTANCE_ID</p></body></html>" > /var/www/html/index.html

echo "---------- END MAIN-STARTUP SECTION ----------"
echo "---------- BEGGINING AFTER STARTUP JOBS ----------"

# su ec2-user
# whoami

echo "---------- GIT CLONE OF ATO REPO ----------"

cd ~
git clone https://github.com/stall84/aborttoorbit.com.git

echo "---------- NPM INSTALL ATO ----------"
cd ~/aborttoorbit.com && npm install

echo "---------- NPM INSTALL BUILDSERVER ----------"
cd ~/aborttoorbit.com/cicd/buildserver && npm install

echo "---------- SET DEV-TEST.ENV AND CHMOD BUILD-SCRIPT ----------"
echo "HOST=0.0.0.0" > ~/aborttoorbit.com/cicd/buildserver/.env
echo "PORT=8181" >> ~/aborttoorbit.com/cicd/buildserver/.env
cd ~/aborttoorbit.com/cicd/buildserver/scripts && chmod u+x build-script.sh

echo "---------- START SERVER ----------"

cd ~/aborttoorbit.com/cicd/buildserver && npm run start

echo "---------- SERVER STARTED ----------"
