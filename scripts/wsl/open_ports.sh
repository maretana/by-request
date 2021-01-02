#!/bin/bash

# This script can be used to open the ports for network users in a WSL environment.
# This runs the powershell command in an elevated powershell terminal to open the proxy.

# Get the path of this file
cwd="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
# Replace file separators to windows file separators (e.g. '/' -> '\')
cwd=${cwd////\\}
# Get the name of the Linux distro
os_name=$(grep '^NAME' /etc/os-release | sed 's/NAME=//' | sed 's/"//g')
# PowerShell script that opens the proxy.
ps1=add_wsl2_proxy.ps1

# Run powershell
powershell.exe -File "\\\wsl$\\$os_name$cwd\\$ps1"
