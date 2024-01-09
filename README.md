# _node_red_container
Creation steps of Node-red encrypted container with Apptainer on AMD64 and ARM64 architectures.

## Install Apptainer
Follow the instructions in [Apptainer Installation Guide](https://github.com/apptainer/apptainer/blob/main/INSTALL.md) to install Apptainer.

## Create the Apptainer Definition File
Create the Apptainer definition file (`.def`) specifying the details of your container.


## Compile and Create Encrypted Container
Run the following command to compile and create the encrypted container:
```bash
apptainer build -e --passphrase cont-name.sif def-name.def
```
## Sign the Encrypted Container
Run the following command:
```bash
apptainer sign con-name.sif
```

## Run the Encrypted Container
Run the following command:
```bash
apptainer run -p 1880:1880 --passphrase cont-name.sif
```
## Emulating Rasp env using Qemu:
Install the [QEMU](https://www.qemu.org/download/#linux) and go to QEMU-img/, download the raspios from this [link](https://downloads.raspberrypi.com/raspios_oldstable_lite_arm64/images/raspios_oldstable_lite_arm64-2023-12-06/2023-12-05-raspios-bullseye-arm64-lite.img.xz?_gl=1*bj3dde*_ga*MTkxNjAzMDQxOC4xNzA0Nzk3MTU3*_ga_22FD70LWDS*MTcwNDc5NzE1OS4xLjEuMTcwNDc5NzIyOS4wLjAuMA..).Then,run this command after extracting the archive
```bash
sudo qemu-system-aarch64 -machine virt -cpu cortex-a72 -smp 6 -m 4G \         
    -kernel Image -append "root=/dev/vda2 rootfstype=ext4 rw panic=0 console=ttyAMA0" \
    -drive format=raw,file=2023-12-05-raspios-bullseye-arm64-lite.img,if=none,id=hd0,cache=writeback \
    -device virtio-blk,drive=hd0,bootindex=0 \
    -netdev user,id=mynet,hostfwd=tcp::2222-:22 \
    -device virtio-net-pci,netdev=mynet \
    -monitor telnet:127.0.0.1:5555,server,nowait
```
