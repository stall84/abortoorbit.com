#!/bin/bash

echo "---------- TESTING BUILD SCRIPT INIT ----------" >> ~/build-script.log
echo "---------- BEGIN BUILD-SCRIPT.SH ----------" >> ~/build-script.log

ls -la
which gatsby >> ~/build-script.log
gatsby --version >> ~/build-script.log


echo "---------- END BUILD-SCRIPT.SH ----------" >> ~/build-script.log